const add = require('./index')

describe('add function', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0)
  })
})
