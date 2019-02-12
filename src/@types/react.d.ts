import {FunctionComponent} from 'react'

declare module 'react' {
  export interface NextFunctionComponent<P> extends FunctionComponent<P> {
    getInitialProps(ctx): Promise<P>
  }
}

