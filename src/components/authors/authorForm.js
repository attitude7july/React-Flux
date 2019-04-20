'use strict'
var React = require('react')
var createClass = require('create-react-class')
var Link = require('react-router-dom').Link
var Input = require('../../components/textInput')
var AuthorForm = createClass({
  //   propTypes: {
  //    authors: React.PropTypes.array.isRequired
  //    },
  render: function () {
    return (
      <div>
        <h1> Manage Author </h1>

        <form>
          <Input
            name='firstName'
            label='first Name'
            value={this.props.author.firstName}
            onChange={this.props.onChange}
            placeholder='first name'
          />
          <br />

          <Input
            name='lastName'
            label='last Name'
            value={this.props.author.lastName}
            onChange={this.props.onChange}
            placeholder='last name'
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
