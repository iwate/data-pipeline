/*globals describe it expect */

import { Pipeline } from '../src/pipeline'

const PRODUCT = { id: 1, name: 'hoge' }
const META = 'meta'

describe('pipeline', () => {
  it('pass params and data to callback', () => {
    const pipeline = new Pipeline()
    pipeline.take('products/:id', function (context, product, meta) {
      expect(context.params.id).toEqual('1')
      expect(product).toEqual(PRODUCT)
      expect(meta).toEqual(META)
    })
    pipeline.put('products/1', PRODUCT, META)
  })
  it('can multi callbacks', () => {
    const pipeline = new Pipeline()
    let index = 0
    pipeline.take('products/:id', function () {
      index++
      expect(index).toEqual(1)
    })
    pipeline.take('products/:id', function () {
      index++
      expect(index).toEqual(2)
    })
    pipeline.put('products/1', PRODUCT, META)
  })
  it('callbacks are First In First Execute', () => {
    const pipeline = new Pipeline()
    let index = 0
    pipeline.take('products/:id', function () {
      index++
      expect(index).toEqual(1)
    })
    pipeline.take('products/:id', function () {
      index++
      expect(index).toEqual(2)
    })
    pipeline.take('products/:id', function () {
      index++
      expect(index).toEqual(3)
    })
    pipeline.put('products/1', PRODUCT, META)
  })
})
