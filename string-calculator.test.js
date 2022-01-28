const add = require('./string-calculator')

describe('string-calculator', () => {
  const result = add('')
  it('Adding emtpy string the outcome must be zero', () => {
    expect(result).toBe(0)
  })
  
})