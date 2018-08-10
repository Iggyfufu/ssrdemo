const express = require('express')
const volley = require('volleyball')
const data = require('./img').data

const app = express()

app.use(volley)
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.send('Initial Page')
})

app.listen(8080, () => {
  console.log('On the port 8080');
})

// -------------SERVER SIDE RENDERING -------------------//
require('node-jsx').install()
const React = require('react');
const { renderToString } = require('react-dom/server')
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { reducer } = require('./components/store')
const { ContainerComponent } = require('./components/Container')


app.use('/server', handleRender)

// creates HTML layout and sends preloaded state to window
function renderFullPage(html, preloadedState) {
  return (
    `<!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <script src="public/bundle.js" defer></script>
        <title>Server Side</title>
      </head>
      <body>
        <div id="app">
        <div>
        ${html}
        </div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}</script>
      </body>
    </html>`
  )
}


function handleRender(req, res) {

  const preloadedState = { imgs: data }

  const store = createStore(reducer, preloadedState)
  const html = renderToString(React.createElement(Provider, { store: store }, React.createElement(ContainerComponent)))
  const finalState = store.getState()

  res.send(renderFullPage(html, finalState))
}
// -------------SERVER SIDE RENDERING -------------------//