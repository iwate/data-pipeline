/* global  setTimeout */

import UriRecognizer  from './uri-recognizer'

const later = window.requestIdleCallback || (fn => setTimeout(fn, 0))

export class Pipeline {
  constructor() {
    this.recognizer  = new UriRecognizer()
  }
  put(uri, ...data) {
    const result = this.recognizer.recognize(uri)
    later(() => {
      for (let i = 0; i < result.length; i++) {
        result[i].handler(result[i], ...data)
      }
    })
  }
  take(uri, handler) {
    this.recognizer.add(uri, handler)
  }
}

const pipeline = new Pipeline()
export default pipeline
