import * as React from 'react'
import * as classnames from 'classnames'

export class Header extends React.Component<undefined, undefined> {
  render() {
    return (
      <div className={classnames('row', 'header')}>
        <h1 className="col-12">
          header
        </h1>
      </div>
    )
  }
}