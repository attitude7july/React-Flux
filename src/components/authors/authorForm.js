'use strict'
var React = require('react')
var createClass = require('create-react-class')
var Input = require('../../components/textInput')
var PropTypes = require('prop-types')
var AuthorForm = createClass({
  propTypes: {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
  },
  render: function () {
    return (
      <div>
        <h1> Manage Author </h1>

        <form className='needs-validation' noValidate>
          <Input
            name='firstName'
            label='first Name'
            value={this.props.author.firstName}
            onChange={this.props.onChange}
            placeholder='first name'
            error={this.props.errors.firstName}
          />
          <br />

          <Input
            name='lastName'
            label='last Name'
            value={this.props.author.lastName}
            onChange={this.props.onChange}
            error={this.props.errors.lastName}
          />
          <br />
          <input
            type='submit'
            className='btn btn-primary'
            value='Save Changes'
            onClick={this.props.onSave}
          />
        </form>
      </div>
    )
  }
})

module.exports = AuthorForm
