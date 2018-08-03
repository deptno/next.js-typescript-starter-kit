import {applyMiddleware, compose, createStore, Store} from 'redux'
import {reducer, RootState} from './redux'
import {DEV} from './constants/env'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist'
import {session} from './redux/system'

let store

export const getStore = (state, isServer?): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<RootState, any, {}, undefined>(reducer, state, applyMiddleware(thunk))
  } else {
    const composeEnhancers = DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    if (!store) {
      const mw = [thunk]
      if (!DEV) {
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
        }
      } else {
        mw.push(createLogger({
          predicate: (getState, action) => !/^@@/.test(action.type),
          collapsed: true
        }));
      }

      store = createStore<RootState, any, {}, undefined>(
        reducer,
        state,
        composeEnhancers(applyMiddleware(...mw), autoRehydrate())
      )
      store.dispatch(session());

      const whitelist = ['persist']
      persistStore(store, {whitelist}, _ => {
        console.log(`define whitelist: ${whitelist.join(', ')}`)
      })
    }
    return store
  }
}
