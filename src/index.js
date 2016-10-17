import pipeline from './pipeline'
import { cancelAjax, putReqToPipeline } from './ajax/middlewares'
import initAjaxActivity from './ajax/activity'
import ajaxRequests from './ajax/reducer'
import ajaxActions from './ajax/actions'

const init = dispatcher => {
  initAjaxActivity(pipeline, dispatcher)
}

export {
  init,
  pipeline,
  cancelAjax,
  putReqToPipeline,
  ajaxRequests,
  ajaxActions
}
