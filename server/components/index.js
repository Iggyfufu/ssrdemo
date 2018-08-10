const React = require('react')
const ReactDOM = require('react-dom')

const AppProvider = require('./app')

ReactDOM.render(
  <AppProvider />,
  document.getElementById('app')
)