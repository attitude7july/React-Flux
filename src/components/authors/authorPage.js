'use strict'
var React = require('react')
var AuthorApi = require('../../api/authorApi')
var createClass = require('create-react-class')
var AuthorList = require('./authorList')
var Link = require('react-router-dom').Link
var Authors = createClass({
  isMount: false,
  statics: {
    willTransitionTo: function (transition, param, query, callback) {
      if (!confirm(" Are you sure you read a page that's this boring?")) {
        transition.abort()
      } else {
        callback()
      }
    },
    willTransitionFrom: function (transition, component) {
      if (!confirm(" Are you sure you leave a page that's this exciting?")) {
        transition.about()
      }
    }
  },
  getInitialState: function () {
    return { authors: [] }
  },
  componentWillMount: function () {
    if (!this.isMount) {
      this.setState({ authors: AuthorApi.getAllAuthors() })
      this.setState({ isMount: true })
    }
  },

  render: function () {
    // Moved Committed code to authorList.js
    // var createAuthorRow = function (author) {
    //   return (
    //     <tr key={author.id}>
    //       <td>
    //         <a href={'/#author/' + author.id}>{author.id}</a>
    //       </td>
    //       <td>
    //         {author.firstName} {author.lastName}
    //       </td>
    //     </tr>
    //   )
    // }
    return (
      <div>
        <h1>Authors </h1>
        <Link className='btn btn-default' to='/author-add'>
          Add Author
        </Link>
        {/* <table className='table table-responsive'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>{this.state.authors.map(createAuthorRow, this)}</tbody>
        </table> */}
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
})

module.exports = Authors
