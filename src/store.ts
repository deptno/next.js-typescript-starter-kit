import {applyMiddleware, compose, createStore} from 'redux'
import {reducer, RootState} from './redux'
import {Store} from 'react-redux'
import {DEV} from './constants/env'
import thunk from 'redux-thunk'

let store

export const getStore = (state, isServer?): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<RootState>(
      reducer,
      state,
      applyMiddleware(thunk)
    )
  } else {
    const composeEnhancers = DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    if (!store) {
      if (!DEV) {
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
        }
      }

      store = createStore<RootState>(
        reducer,
        state,
        composeEnhancers(applyMiddleware(thunk))
      )
    }
    return store
  }
}
