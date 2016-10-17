import * as actions from './action-types'
import { putRequest } from './utils'

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
    putRequest(method, url, opts)
  } else {
    next(action)
  }
}
