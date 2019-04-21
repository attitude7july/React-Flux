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
            placeholder='first name'
            onChange={this.props.onChange}
            error={this.props.errors.firstName}
            value={this.props.author.firstName}
          />
          <br />

          <Input
            name='lastName'
            label='last Name'
            placeholder='last name'
            onChange={this.props.onChange}
            error={this.props.errors.lastName}
            value={this.props.author.lastName}
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
