import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import ReactDOM from 'react-dom'

import lookup from './utils/lookup'

const Component = (props) => {
  console.log(props)
  return (
    <div>
      This is a component

      <Link to='/post'>Post</Link>
    </div>
  )
}

const Resources = ({ namespace }) => {
  // const Layout = lookup(namespace, 'layout')
  return (
    <Switch>
      <Route exact path={`/`} component={Component} />
      <Route exact path={`/post`} component={Component} />
      <Route exact path={`/${namespace}/:${namespace}Id`} component={Component} />
      <Route exact path={`/${namespace}/:${namespace}Id/edit`} component={Component} />
    </Switch>
  )
}

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Resources namespace="post" />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
