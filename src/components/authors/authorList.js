'use strict'
var React = require('react')
var createClass = require('create-react-class')
var AuthorList = createClass({
  //   propTypes: {
  //    authors: React.PropTypes.array.isRequired
  //    },

  render: function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td>
            <a href={'/#author/' + author.id}>{author.id}</a>
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
