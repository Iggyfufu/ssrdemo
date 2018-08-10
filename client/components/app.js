const React = require('react')
const { Provider } = require('react-redux')

const { ContainerComponent } = require('./Container')
const { store } = require('./store')

class AppProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerComponent />
      </Provider>
    )
  }
}

module.exports = AppProvider