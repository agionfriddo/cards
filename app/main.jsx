'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import App from './components/App'
import store from './store'

render (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>,
  document.getElementById('main')
)
