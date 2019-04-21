'use strict'
var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./components/app')
var ReactRouter = require('react-router-dom')
let el = document.getElementById('root')

var InitializeActions = require('../src/actions/initializeActions')
InitializeActions.initApp()
ReactDOM.render(
  <ReactRouter.BrowserRouter>
    <ReactRouter.Route component={App} />
  </ReactRouter.BrowserRouter>,
  el
)
