$ = jQuery = require('jquery')
var React = require('react')
var ReactDOM = require('react-dom')
var createClass = require('create-react-class')
var App = require('./components/App')
var About = require('./components/about/about')
var Header = require('./components/header')
var Authors = require('./components/authors/authorPage')
var Main = createClass({
  render: function () {
    var Child
    console.log(this.props.route)
    switch (this.props.route) {
      case 'about':
        Child = About
        break
      case 'author':
        Child = Authors
        break
      default:
        Child = App
        break
    }
    return (
      <div>
        <Header />
        <Child />
      </div>
    )
  }
})

function render () {
  var route = window.location.hash.substr(1)
  ReactDOM.render(<Main route={route} />, document.getElementById('root'))
}
window.addEventListener('haschange', render)
render()
