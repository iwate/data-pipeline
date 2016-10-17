/*globals describe it expect */

import * as actions from '../src/ajax/actions'

describe('actions', () => {
  it('functions are exist', () => {
    expect(typeof actions.add).toBe('function')
    expect(typeof actions.cancel).toBe('function')
    expect(typeof actions.remove).toBe('function')
    expect(typeof actions.removeRange).toBe('function')
    expect(typeof actions.update).toBe('function')
  })
})
