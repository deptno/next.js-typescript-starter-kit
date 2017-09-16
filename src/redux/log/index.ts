import * as GA from 'react-ga'
import {GA_TRACKING_ID, NA_TRACKING_ID} from '../../constants/env'
import {DEV} from '../../constants/env'
import Router from 'next/router'
import * as qs from 'querystring'
import {addRouteCompleteEvent} from '../router/index'

declare const wcs: any
declare let _nasa: any
declare let wcs_add: any

declare function wcs_do(...args): void

const INITIALIZED_GA = 'INITIALIZED_GA'
const INITIALIZED_NA = 'INITIALIZED_NA'
const SKIP_GA = 'SKIP_GA'
const SKIP_NA = 'SKIP_NA'
const UPDATE_USER    = 'UPDATE_USER'
const LOG_NA         = 'LOG_NA'

export const initializeGa = (userId?) => {
  if (!DEV && GA_TRACKING_ID) {
    const gaOptions = userId ? {userId} : {}

    GA.initialize(GA_TRACKING_ID, {
      debug: DEV,
      gaOptions
    })
    GA.pageview([Router.pathname, qs.stringify(Router.query)].join('?'))

    addRouteCompleteEvent(url => {
      GA.pageview(url)
      wcs_do(_nasa)
    })
    return {type: INITIALIZED_GA}
  }
  return {type: SKIP_GA}
}

export const logNa     = (first: string, second: string) => {
  if (!DEV) {
    wcs_do({cnv: wcs.cnv(first, second)})
  }
  return {type: LOG_NA, payload: [first, second]}
}
export const setGaUser = (userId?) => {
  if (!DEV) {
    GA.set({userId})
  }
  return {type: UPDATE_USER}
}
export const initializeNa = () => {
  if (!DEV && NA_TRACKING_ID) {
    if (!wcs_add) {
      wcs_add = {}
    }
    wcs_add['wa'] = NA_TRACKING_ID
    if (!_nasa) {
      _nasa = {}
    }
    wcs.inflow()
    wcs_do(_nasa)
    return {type: INITIALIZED_NA}
  }
  return {type: SKIP_NA}
}
