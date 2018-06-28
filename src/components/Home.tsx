import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'

export const Home = props =>
  <div className={classnames('test', css.home)}>
    home
    <div>
      nested
    </div>
  </div>