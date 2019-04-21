'use strict'
var React = require('react')
var createClass = require('create-react-class')
var AuthorApi = require('../../api/authorApi')
var AuthorForm = require('./authorForm')
var toastr = require('toastr')
var ManageAuthor = createClass({
  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm(' Leave without saving?')) {
        transition.abort()
      }
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount')
    var authorId = this.props.match.params.id // this is from path '/author-edit/:id'
    if (authorId) {
      this.setState({ author: AuthorApi.getAuthorById(authorId) })
      console.log(this.state.author)
    }
  },
  // mixins: [Router.Navigation],
  getInitialState: function () {
    console.log('getInitialState')
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {},
      dirty: false
    }
  },
  setAuthorState: function (event) {
    console.log('setAuthorState')
    this.setState({ dirty: true })
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
    this.setState({ dirty: false })
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
