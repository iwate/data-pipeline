import { createStore, applyMiddleware } from 'redux'
import products from './reducers/products'
import { putReqToPipeline } from 'data-pipeline'

const createStoreWithMiddleware = applyMiddleware(
  putReqToPipeline,
)(createStore)
const store = createStoreWithMiddleware(products, [])

export default store