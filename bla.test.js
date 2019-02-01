const add = require('./index')

describe('add function', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0)
  })

  it('returns number for one number input', () => {
    expect(add('1')).toBe(1)
  })
  it('returns sum of numbers for two numbers input', () => {
    expect(add('1,2')).toBe(3)
  })
})
