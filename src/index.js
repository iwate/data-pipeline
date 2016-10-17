import pipeline from './pipeline'
import { cancelAjax, putReqToPipeline } from './ajax/middlewares'
import initAjaxActivity from './ajax/activity'
import ajaxRequests from './ajax/reducer'
import { cancel, remove, removeRange } from './ajax/actions'

const init = dispatcher => {
  initAjaxActivity(pipeline, dispatcher)
}

const ajaxActions = {
  cancel,
  remove,
  removeRange
}

export {
  init,
  pipeline,
  cancelAjax,
  putReqToPipeline,
  ajaxRequests,
  ajaxActions
}
