import * as React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import Head from 'next/head'
import stylesheet from './global.pcss'

export class Layout extends React.Component<undefined, undefined> {
  render() {
    const {children} = this.props
    return (
      <div className="container-fluid">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <style {...{jsx: true}}>{stylesheet}</style>
        </Head>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    )
  }
}
