const { createStore, applyMiddleware } = require('redux')
const thunkMiddleware = require('redux-thunk').default

const SET_IMGS = 'SET_IMGS'

const setImgs = imgs => ({ type: SET_IMGS, imgs })

const initialState = { imgs: [] }

if (typeof (window) !== 'undefined') {
  preloadedState = window.__PRELOADEDSTATE__
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMGS:
      return { imgs: action.imgs }
    default:
      return state
  }
}

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

module.exports = { reducer, store }