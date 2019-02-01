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

  it('return the sum of any bumber of inputs', () => {
    const testCases = [
      { input: '4,2,8', output: 14 },
      { input: '4,2,8,10,1', output: 25 },
      { input: '4,2,8,10,1,3,3,-4', output: 27 }
    ]

    testCases.forEach( ({ input, output}) => {
      expect(add(input)).toBe(output)
    })
  })

  it('allows to separate number with line breaks', () => {
    expect(add('1\n2')).toBe(3)
    expect(add('1\n2,3')).toBe(6)
  })
})
