'use strict'
var React = require('react')
var createClass = require('create-react-class')
var ReactRouter = require('react-router-dom')
var Header = require('./header')
var Home = require('../components/homePage')
var Author = require('../components/authors/authorPage')
var AboutUs = require('../components/about/about')
var NoPageFound = require('../components/noPageFound')
var ManageAuthor = require('../components/authors/manageAuthorPage')
var App = createClass({
  render: function () {
    return (
      <div>
        <Header />
        <ReactRouter.Switch>
          <ReactRouter.Route exact path='/' component={Home} />
          <ReactRouter.Route exact path='/authors' component={Author} />
          <ReactRouter.Route exact path='/about-us' component={AboutUs} />
          <ReactRouter.Route
            exact
            path='/author-add'
            component={ManageAuthor}
          />
          <ReactRouter.Route path='*' component={NoPageFound} />
        </ReactRouter.Switch>
      </div>
    )
  }
})
module.exports = App
