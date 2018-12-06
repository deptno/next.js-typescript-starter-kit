import * as React from 'react'
import {Layout} from '../src/components/Layout'

const SSR: React.NextFunctionComponent<Props> = props =>
  <Layout>
    {props.name}
  </Layout>

SSR.getInitialProps = async (context) => {
  const props = {
    name: '"next.js-typescript-starter-kit" from client'
  }
  const server = !!context.req

  if (server) {
    props.name = await mockFetchName()
  }

  return props
}
export default SSR

interface Props {
  name
}
async function mockFetchName() {
  return '"next.js-typescript-starter-kit" from server'
}