import * as actions from './actions'
import pipeline from '../pipeline'
import store from './store'

const STATE_LOADING  = 'loading'
const STATE_LOADED   = 'loaded'
const STATE_CANCELED = 'canceled'
const STATE_TIMEOUT  = 'timeout'

let index = 0
const unique = () => ++index

const defaultOpts = {
  headers: {},
  body: undefined,
  user: undefined,
  password: undefined,
  timeout: 0,
  withCredentials: false
}

export class AjaxActivity {
  constructor(pipeline) {
    const self = this
    this.pipeline = pipeline
    this.pipeline.take('requests/*uri', function (request) {
      self.handleRequest(this.params.uri, request)
    })
  }

  handleRequest(uri, request) {
    if (!request || !request.method || !request.url)
      return

    const { method, url } = request
    const opts = Object.assign({}, defaultOpts, request.opts)

    const id = unique()
    const xhr = new window.XMLHttpRequest()
    const onProgress = ev => ev.lengthComputable && store.dispatch(actions.updateAjax(id, STATE_LOADING, ev.loaded / ev.total))
    const onAbort    = () => store.dispatch(actions.updateAjax(id, STATE_CANCELED, null))
    const onTimeout  = () => store.dispatch(actions.updateAjax(id, STATE_TIMEOUT, null))
    const onLoadend  = () => {
      store.dispatch(actions.updateAjax(id, STATE_LOADED, 1.0))
      pipeline.put(uri, { status: xhr.status, body: xhr.response })
    }

    xhr.onprogress = onProgress
    xhr.onloadend  = onLoadend
    xhr.onabort    = onAbort
    xhr.ontimeout  = onTimeout

    xhr.upload.onprogress = onProgress
    xhr.upload.onloadend  = onLoadend
    xhr.upload.onabort    = onAbort
    xhr.upload.ontimeout  = onTimeout

    xhr.timeout = opts.timeout
    xhr.withCredentials = opts.withCredentials

    store.dispatch(actions.addAjax(id, STATE_LOADING, 0, xhr))

    xhr.open(method, url, true, opts.user, opts.password)
    
    for (let key in opts.headers) {
      xhr.setRequestHeader(key, opts.headers[key])
    }
    
    xhr.send(opts.body)
  }
}

const ajaxActivity = new AjaxActivity(pipeline)

export default ajaxActivity
