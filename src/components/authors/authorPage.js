'use strict'
var React = require('react')
var AuthorApi = require('../../api/authorApi')
var createClass = require('create-react-class')
var AuthorList = require('./authorList')
var Authors = createClass({
  getInitialState: function () {
    return { authors: [] }
  },
  componentWillMount: function () {
    // if (this.isMounted()) {
    this.setState({ authors: AuthorApi.getAllAuthors() })
    // }
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
