import { createStore, applyMiddleware } from 'redux'
import { cancelAjax, putReqToPipeline } from 'data-pipeline'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(
  cancelAjax,
  putReqToPipeline,
)(createStore)
const store = createStoreWithMiddleware(reducers)

export default store