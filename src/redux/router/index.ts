import Router from 'next/router'

export function addRouteCompleteEvent(fx: (url) => void) {
  onRouteCompleteEvents.push(fx)
}

const onRouteCompleteEvents = []

Router.onRouteChangeComplete = (url) => {
  onRouteCompleteEvents.forEach(fx => fx(url))
}
