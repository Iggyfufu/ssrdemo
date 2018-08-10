const { createStore, applyMiddleware } = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const SET_IMGS = 'SET_IMGS'

const setImgs = imgs => ({ type: SET_IMGS, imgs })

const fetchImgs = () => dispatch => {
  axios.get('/api/images')
    .then(res => {
      dispatch(setImgs(res.data))
    })
}

const initialState = { imgs: [] }

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

module.exports = { reducer, store, fetchImgs }