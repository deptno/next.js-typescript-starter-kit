import {applyMiddleware, compose, createStore, Middleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {epics$, reducer} from './modules/index'
import {Store} from 'react-redux'
import {DEV} from './constants/env'

let store

export const getStore = (state, isServer?): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<RootState>(reducer, state, applyMiddleware(createEpicMiddleware(epics$)))
  } else {
    const composeEnhancers = DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    if (!store) {
      if (!DEV) {
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {
          }
        }
      }

      store = createStore<RootState>(reducer, state, composeEnhancers(applyMiddleware(createEpicMiddleware(epics$))) as any)
    }
    return store
  }
}
