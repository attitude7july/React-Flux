'use strict'
var React = require('react')
var createClass = require('create-react-class')
var ReactRouter = require('react-router-dom')
var Header = require('./header')
var Home = require('../components/homePage')
var Author = require('../components/authors/authorPage')
var AboutUs = require('../components/about/about')
var NoPageFound = require('../components/noPageFound')
var App = createClass({
  render: function () {
    return (
      <div>
        <ReactRouter.BrowserRouter>
          <Header />
          <ReactRouter.Route path='/' component={Home} />
          <ReactRouter.Route path='/author' component={Author} />
          <ReactRouter.Route path='/author/:id' component={Author} />
          <ReactRouter.Route path='/about-us' component={AboutUs} />
          <ReactRouter.Route component={NoPageFound} />
        </ReactRouter.BrowserRouter>
      </div>
    )
  }
})
module.exports = App
