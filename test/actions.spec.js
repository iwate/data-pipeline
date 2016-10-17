/*globals describe it expect */

import * as actions from '../src/ajax/actions'

describe('actions', () => {
  it('functions are exist', () => {
    expect(typeof actions.addAjax).toBe('function')
    expect(typeof actions.cancelAjax).toBe('function')
    expect(typeof actions.removeAjax).toBe('function')
    expect(typeof actions.updateAjax).toBe('function')
  })
})
