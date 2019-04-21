var authors = require('./authorData').authors
var _ = require('lodash')

var _generateId = function (author) {
  console.log(author)
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase()
}
var _clone = function (item) {
  return JSON.parse(JSON.stringify(item))
}

var AuthorApi = {
  getAllAuthors: function () {
    return _clone(authors)
  },
  getAuthorById: function (id) {
    var author = _.find(authors, { id: id })
    return _clone(author)
  },
  saveAuthor: function (author) {
    console.log(author.id)
    // pretend an ajax call to api is made here
    console.log(
      'Pretend this is just saved the author to the DB via ajax cal...'
    )
    if (author.id) {
      var existingAuthorIndex = authors.findIndex(x => x.id === author.id)
      console.log(existingAuthorIndex)
      // _.indexOf(
      //   authors,
      //   _.find(author, { id: author.id })
      // )
      authors.splice(existingAuthorIndex, 1, author)
    } else {
      console.log('push item')
      // just simulating creation here
      // the server would generate ids for new author in a real app
      // cloning so new copy returned is passed by value rather than by reference.
      author.id = _generateId(author)
      authors.push(author)
    }
    return _clone(author)
  },
  deleteAuthor: function (id) {
    console.log(
      'Pretend this just deleted the author from the DB via an AJAX call...'
    )
    _.remove(authors, { id: id })
  }
}
module.exports = AuthorApi
