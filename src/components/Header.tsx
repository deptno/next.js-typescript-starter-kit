import * as React from 'react'
import {Nav} from './Nav'

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2>
          header
        </h2>
        <Nav/>
      </div>
    )
  }
}
