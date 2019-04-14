$ = jQuery = require('jquery')
var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./components/app')
var ReactRouter = require('react-router-dom')
let el = document.getElementById('root')
ReactDOM.render(
  <ReactRouter.BrowserRouter>
    <ReactRouter.Route component={App} />
  </ReactRouter.BrowserRouter>,
  el
)
