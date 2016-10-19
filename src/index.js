import pipeline from './pipeline'
import { cancelAjax, putReqToPipeline } from './ajax/middlewares'
import initAjaxActivity from './ajax/activity'
import ajaxRequests from './ajax/reducer'
import { cancel, remove, removeRange } from './ajax/actions'
import { putRequest } from './ajax/utils'

const ajaxActions = {
  cancel,
  remove,
  removeRange
}

export {
  pipeline,
  cancelAjax,
  putReqToPipeline,
  ajaxRequests,
  ajaxActions,
  putRequest,
  initAjaxActivity
}
