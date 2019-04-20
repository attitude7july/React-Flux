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
    return {
      author: { id: '44', firstName: '444', lastName: '444' },
      errors: {}
    }
  },
  setAuthorState: function (event) {
    var field = event.target.name
    var value = event.target.value
    this.state.author[field] = value
    return this.setState({ author: this.state.author })
  },
  authorFormIsValid: function () {
    var formIsValid = true
    this.state.errors = {} // clear any previous errors

    if (this.state.author.firstName < 3) {
      formIsValid = false
      this.state.errors.firstName = ' First name must be atleast 3 characters'
    }
    if (this.state.author.lastName < 3) {
      formIsValid = false
      this.state.errors.lastName = ' Last name must be atleast 3 characters'
    }
    this.setState({ errors: this.state.errors })

    return formIsValid
  },
  saveAuthor: function (event) {
    event.preventDefault()
    if (!this.authorFormIsValid()) {
      return
    }
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
          errors={this.state.errors}
        />
      </div>
    )
  }
})

module.exports = ManageAuthor
