const add = require('./string-calculator')

describe('string-calculator', () => {
  it('Adding emtpy string the outcome must be zero', () => {
    const result = add('')

    expect(result).toBe(0)
  })

  it('Adding "1" string the outcome must be 1', () => {
    const result = add("1")

    expect(result).toBe(1)
  })
  
})