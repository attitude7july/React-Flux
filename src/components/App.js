'use strict'
$ = jQuery = require('jquery')
var React = require('react')
var createClass = require('create-react-class')
var App = createClass({
  render: function () {
    return (
      <div className='jumbotron'>
        <h1>eCommerce</h1>
        <p>Wecome to the party</p>
      </div>
    )
  }
})
module.exports = App
