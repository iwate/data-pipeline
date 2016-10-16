import UriRecognizer  from './uri-recognizer'

export class Pipeline {
  constructor() {
    this.recognizer  = new UriRecognizer()
  }
  put(uri, ...data) {
    const result = this.recognizer.recognize(uri)
    for (let i = 0; i < result.length; i++) {
      result[i].handler.apply(result[i], data)
    }
  }
  take(uri, handler) {
    this.recognizer.add(uri, handler)
  }
}

const pipeline = new Pipeline()
export default pipeline