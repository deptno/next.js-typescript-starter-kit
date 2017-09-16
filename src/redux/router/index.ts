import Router from 'next/router'
import * as qs from 'querystring'
import {cleanObject} from '../../modules/index'
import {Reducer} from 'redux'

export const reducer: Reducer<{}> = (state = {}, action) => {
  const {type, payload} = action
  switch (type) {
    default:
      return state
  }
}

enum ActionTypes {
  CHANGE_URL = 'change url',
  BACK       = 'back',
  RESTRICTED = 'refuse to access restricted url',
}

export const changeUrl  = updateUrl
export const replaceUrl = (url = Router.pathname, options = {}, replace = false) =>
  updateUrl(url, options, replace, REPLACE)

export function back() {
  return dispatch => {
    dispatch({type: ActionTypes.BACK})
    window.history.back()
  }
}

export function addRouteCompleteEvent(fx: (url) => void) {
  onRouteCompleteEvents.push(fx)
}

function updateUrl(url = Router.pathname, options = {}, replace = false, type: ChangeUrlType = PUSH) {
  return async (dispatch, getState) => {
    if (!replace) {
      options = {
        ...Router.query,
        ...options
      }
    }

    const query = Object.entries(options)
      .filter(([key, value]) => value !== undefined && value !== null)
      .reduce((ret, [key, value]) => {
        ret[key] = value
        return ret
      }, {})

    if (type === REPLACE) {
      const isSame = Object
        .entries(cleanObject(options))
        .every(([key, value]) => Router.query[key] == value.toString())
      if (isSame) {
        return dispatch({
          type:    ActionTypes.RESTRICTED,
          payload: `${url}?${qs.stringify(query)}`
        })
      }
    }

    dispatch({type: ActionTypes.CHANGE_URL, payload: {url, query}})
    Router[type](`${url}?${qs.stringify(query)}`)
  }
}

const onRouteCompleteEvents = []

Router.onRouteChangeComplete = (url) => {
  onRouteCompleteEvents.forEach(fx => fx(url))
}

type Push = 'push'
type Replace = 'replace'
type ChangeUrlType = Push | Replace
const PUSH: Push       = 'push'
const REPLACE: Replace = 'replace'

