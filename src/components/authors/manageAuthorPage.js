'use strict'
var React = require('react')
var createClass = require('create-react-class')
var Router = require('react-router-dom')
var AuthorApi = require('../../api/authorApi')
var AuthorForm = require('./authorForm')
var toastr = require('toastr')
var ManageAuthor = createClass({
  // mixins: [Router.Navigation],
  getInitialState: function () {
    return { author: { id: '44', firstName: '444', lastName: '444' } }
  },
  setAuthorState: function (event) {
    var field = event.target.name
    var value = event.target.value
    this.state.author[field] = value
    return this.setState({ author: this.state.author })
  },
  saveAuthor: function (event) {
    event.preventDefault()
    AuthorApi.saveAuthor(this.state.author)
    // this.transitionTo('/authors')
    toastr.success('author saved')
  },
  render: function () {
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
        />
      </div>
    )
  }
})

module.exports = ManageAuthor
