import * as GA from 'react-ga'
import {GA_TRACKING_ID} from '../../constants/env'
import {DEV} from '../../constants/env'
import Router from 'next/router'
import * as qs from 'querystring'
import {addRouteCompleteEvent} from '../router'

const INITIALIZED_GA = 'INITIALIZED_GA'
const SKIP_GA = 'SKIP_GA'

export const initializeGa = (userId?) => {
  if (!DEV && GA_TRACKING_ID) {
    const gaOptions = userId ? {userId} : {}

    GA.initialize(GA_TRACKING_ID, {debug: DEV, gaOptions})
    GA.pageview([Router.pathname, qs.stringify(Router.query)].join('?'))

    addRouteCompleteEvent(url => GA.pageview(url))

    return {type: INITIALIZED_GA}
  }
  return {type: SKIP_GA}
}

