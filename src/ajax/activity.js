import * as actions from './actions'

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
  withCredentials: false,
  tags: [],
  autoRemove: false
}

export default function initAjaxActivity(pipeline, dispatcher) {
  pipeline.take('requests/*uri', function (context, request) {
    if (!request || !request.method || !request.url)
      return

    const uri = context.params.uri
    const { method, url } = request
    const opts = Object.assign({}, defaultOpts, request.opts)

    const id = unique()
    const xhr = new window.XMLHttpRequest()
    const onProgress = ev => ev.lengthComputable && dispatcher.dispatch(actions.update(id, STATE_LOADING, ev.loaded / ev.total))
    const onAbort    = () => dispatcher.dispatch(actions.update(id, STATE_CANCELED, null))
    const onTimeout  = () => dispatcher.dispatch(actions.update(id, STATE_TIMEOUT, null))
    const onLoadend  = () => {
      dispatcher.dispatch(actions.update(id, STATE_LOADED, 1.0))
      pipeline.put(uri, { status: xhr.status, body: xhr.response })
      if(opts.autoRemove){
        dispatcher.dispatch(actions.remove(id))
      }
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

    dispatcher.dispatch(actions.add(id, STATE_LOADING, 0, opts.tags, xhr))

    xhr.open(method, url, true, opts.user, opts.password)
    
    for (let key in opts.headers) {
      xhr.setRequestHeader(key, opts.headers[key])
    }
    
    xhr.send(opts.body)
  })
}
