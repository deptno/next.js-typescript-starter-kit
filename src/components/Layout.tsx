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
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"/>
                    <style {...{jsx: true}}>{stylesheet}</style>
                    <meta name="viewport"
                          content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
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