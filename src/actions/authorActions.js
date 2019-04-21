'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../constants/actionTypes')
var AuthorActions = {
  createAuthor: function (author) {
    console.log('creating new author')
    var newAuthor = AuthorApi.saveAuthor(author)
    // Hey dispatcher tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      action: newAuthor
    })
  },
  updateAuthor: function (author) {
    console.log('updating author')
    var updatedAuthor = AuthorApi.saveAuthor(author)
    // Hey dispatcher tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      action: updatedAuthor
    })
  },
  deleteAuthor: function (id) {
    console.log('deleting author....')
    AuthorApi.deleteAuthor(id)
    // Hey dispatcher tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    })
  }
}
module.exports = AuthorActions
