'use strict'
var React = require('react')
var createClass = require('create-react-class')
var Link = require('react-router-dom').Link
var Header = createClass({
  render: function () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img
              src='./images/logo.png'
              style={{ width: '35', height: '35' }}
            />
          </Link>
          <ul className='nav navbar-nav'>
            <li>
              <Link className='navbar-brand' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='navbar-brand' to='/authors'>
                Author
              </Link>
            </li>
            <li>
              <Link className='navbar-brand' to='/about-us'>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
})
module.exports = Header
