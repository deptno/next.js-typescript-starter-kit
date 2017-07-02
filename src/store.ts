import {applyMiddleware, compose, createStore, Middleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {epics$, reducer} from './modules/index'
import {Store} from 'react-redux'

const dev = true
let store

export const getStore = (state, isServer?): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<RootState>(reducer, state, applyMiddleware(createEpicMiddleware(epics$)))
  } else {
    const composeEnhancers = dev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    if (!store) {
      if (!dev) {
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {
          }
        }
      }

      store = createStore<RootState>(reducer, state, composeEnhancers(applyMiddleware(createEpicMiddleware(epics$))) as any)
      // store.dispatch(initializeNa());
      // store.dispatch(initializeBeusable());
    }
    return store
  }
}
