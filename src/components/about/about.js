'use strict'
var React = require('react')
var createClass = require('create-react-class')
var About = createClass({
  statics: {
    willTransitionTo = function (transition, param, query, callback) {
      if (!confirm(" Are you sure you read a page that's this boring?")) {
        transition.about()
      } else {
        callback()
      }
    },
    willTransitionFrom = function (transition, component) {
      if (!confirm(" Are you sure you leave a page that's this exciting?")) {
        transition.about()
      }
    }

  },

  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses the following technologies</p>
        <ul>
          <li> React </li>
          <li> React Router </li>
          <li> Flux </li>
          <li> Node </li>
          <li> Gulp </li>
          <li> Browserify </li>
          <li> Bootstrap </li>
        </ul>
      </div>
    )
  }
})

module.exports = About
