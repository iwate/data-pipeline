import * as actions from './action-types'
import pipeline from '../pipeline'

export const cancelAjax = store => next => action => {
  if (action.type === actions.CANCEL_AJAX) {
    const ajax = store.getState().ajaxRequests.find(item => item.id === action.id)
    ajax.xhr.abort()
  } else {
    next(action)
  }
}

export const putReqToPipeline = store => next => action => {
  const { method, url, opts } = action
  if (method && url) {
    const addr = new URL(url)
    const uri = addr.host + addr.pathname
    pipeline.put(`requests/${uri}`, { method, url, opts })
  } else {
    next(action)
  }
}
