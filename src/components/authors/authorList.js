'use strict'
var React = require('react')
var createClass = require('create-react-class')
var Link = require('react-router-dom').Link
var AuthorList = createClass({
  //   propTypes: {
  //    authors: React.PropTypes.array.isRequired
  //    },
  render: function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td>
            <Link
              className='navbar-brand'
              to='/author'
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
