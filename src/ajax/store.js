import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { cancelAjax } from './middlewares'

const createStoreWithMiddleware = applyMiddleware(
  cancelAjax,
)(createStore)

const store = createStoreWithMiddleware(reducer)

export default store
