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

  it('Adding "1,2,3,4,5" string the outcome must be 15', () => {
    const result = add("1,2,3,4,5")

    expect(result).toBe(15)
  })
  it('Adding "1\n2,3" string the outcome must be 6', () => {
    const result = add("1\n2,3")

    expect(result).toBe(6)
  })
})