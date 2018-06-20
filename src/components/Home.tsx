import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'

export const Home = props =>
  <div className={classnames('row', 'home', css.home)}>
    {/*language=PostCSS*/}
    <style jsx>{`{
      color: darkred;
    }`}</style>
    home
  </div>
