'use strict'
var React = require('react')
var createClass = require('create-react-class')
var PropTypes = require('prop-types')
var Input = createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
  },
  render: function () {
    let wrapperClass = 'form-group'
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ' ' + 'has-error'
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          type='text'
          className='form-control'
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <div className='input'>{this.props.error}</div>
      </div>
    )
  }
})
module.exports = Input
