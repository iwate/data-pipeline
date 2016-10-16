/*globals describe it expect */

import UriRecognizer from '../src/uri-recognizer'

describe('uri-recognizer', () => {
  it('default', () => {
    const recognizer = new UriRecognizer()
    const handler = function () {}
    recognizer.add('localhost/products/:id', handler)
    recognizer.add('localhost/products/1', handler)
    recognizer.add('localhost/:collection/:id', handler)    
    recognizer.add('localhost/*path', handler)
    recognizer.add('*', handler)
    const result = recognizer.recognize('localhost/products/1')
    expect(result.length).toEqual(5)
  })
})
