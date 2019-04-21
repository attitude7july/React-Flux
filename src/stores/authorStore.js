'use strict'
var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var _ = require('lodash')
var CHANGE_EVENT = 'change'
var _authors = []
// Take new object
// extend new object
var AuthorStore = assign({}, EventEmitter.prototype, {
  // this function is usefull to know when store changes
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  // mirror image of addchangelistener
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },
  getAllAuthors: function () {
    return _authors
  },
  getAuthorById: function (id) {
    return _.find(_authors, { id: id })
  }
})

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.CREATE_AUTHOR:
      console.log(action.action)
      _authors.push(action.action)
      AuthorStore.emitChange()
      break
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors
      AuthorStore.emitChange()
      break
    case ActionTypes.UPDATE_AUTHOR:
      console.log('update')
      console.log(action.action)
      var existingAuthorIndex = _authors.findIndex(
        x => x.id === action.action.id
      )
      console.log(existingAuthorIndex)
      // _.indexOf(
      //   authors,
      //   _.find(author, { id: author.id })
      // )
      _authors.splice(existingAuthorIndex, 1, action.action)
      AuthorStore.emitChange()
      break
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, { id: action.id })
      AuthorStore.emitChange()
      break
    default:
      // no operations
      break
  }
})

module.exports = AuthorStore
