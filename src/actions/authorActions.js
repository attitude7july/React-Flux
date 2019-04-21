'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../actions/actionType')
var AuthorActions = {
  createAuthor: function (author) {
    var newAuthor = AuthorApi.saveAuthor(author)
    // Hey dispatcher tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      action: newAuthor
    })
  }
}
module.exports = AuthorActions
