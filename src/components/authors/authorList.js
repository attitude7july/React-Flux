'use strict'
var React = require('react')
var createClass = require('create-react-class')
var Link = require('react-router-dom').Link
var AuthorActions = require('../../actions/authorActions')
var toastr = require('toastr')
var AuthorList = createClass({
  //   propTypes: {
  //    authors: React.PropTypes.array.isRequired
  //    },

  deleteAuthor: function (id, event) {
    event.preventDefault()
    AuthorActions.deleteAuthor(id)
    toastr.success('Author deleted')
  },
  render: function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td>
            <a
              href='#'
              className='navbar-brand'
              onClick={this.deleteAuthor.bind(this, author.id)}
            >
              X
            </a>
          </td>
          <td>
            <Link
              className='navbar-brand'
              to={'author-edit/' + author.id}
              params={{ id: author.id }}
            >
              {author.id}
            </Link>
          </td>
          <td>
            {author.firstName} {author.lastName}
          </td>
        </tr>
      )
    }
    return (
      <div>
        <table className='table table-responsive'>
          <thead>
            <tr>
              <th>Action</th>
              <th>Id</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>{this.props.authors.map(createAuthorRow, this)}</tbody>
        </table>
      </div>
    )
  }
})

module.exports = AuthorList
