'use strict'
$ = jQuery = require('jquery')
var React = require('react')
var createClass = require('create-react-class')
var Header = createClass({
  render: function () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a href='/' className='navbar-band'>
            <img src='' />
          </a>
          <ul className='nav navbar-nav'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/#author'>Authors</a>
            </li>
            <li>
              <a href='/#about'>About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
})
module.exports = Header
