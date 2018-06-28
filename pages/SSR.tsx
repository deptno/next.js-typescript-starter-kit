import * as React from 'react'
import {Layout} from '../src/components/Layout'

export default class SSR extends React.Component<Props> {
  static async getInitialProps(context) {
    const props = {
      name: '"next.js-typescript-starter-kit" from client'
    }
    const server = !!context.req

    if (server) {
      props.name = await mockFetchName()
    }

    console.log(props)
    return props
  }

  render() {
    return (
      <Layout>
        {this.props.name}
      </Layout>
    )
  }
}

interface Props {
  name
}

export async function mockFetchName() {
  return '"next.js-typescript-starter-kit" from server'
}