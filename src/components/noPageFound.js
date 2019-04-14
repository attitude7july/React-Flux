'use strict'
var React = require('react')
var Link = require('react-router').Link
var createClass = require('create-react-class')
var NoPageFound = createClass({
  componentDidMount () {
    console.log('wwo')
  },
  render: function () {
    return (
      <div>
        <h1> Page not found </h1>
        <p> Whoops! Sorry, there is nothing to see here.</p>
        <p>
          <Link to='/'>back to Home</Link>
        </p>
      </div>
    )
  }
})
module.exports = NoPageFound
