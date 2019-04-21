'use strict'
var React = require('react')
var createClass = require('create-react-class')
var Header = require('./header')
var homePage = createClass({
  render: function () {
    return (
      <div>
        <div className='jumbotron'>
          <h1>React & Flux</h1>
        </div>
      </div>
    )
  }
})
module.exports = homePage
