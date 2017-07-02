import * as React from 'react'
import {Provider, Store} from 'react-redux'
import {getStore} from '../src/store'
import {Home} from '../src/components/Home'
import {Layout} from '../src/components/Layout'

interface HomeProps {
}
export default class extends React.Component<HomeProps, undefined> {
  private store: Store<RootState>

  static async getInitialProps({req}) {
    const server       = !!req
    const store        = await getStore(undefined, server)
    const initialState = store.getState()

    return {initialState, server}
  }

  constructor(props) {
    super(props)
    this.store = getStore(props.initialState, props.server)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <Home/>
        </Layout>
      </Provider>
    )
  }
}