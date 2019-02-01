const stringCalculator = require('./stringCalculator')

describe('String calculator', () => {
  it('For an empty String returns 0', () => {
    expect(stringCalculator.add('')).toBe(0)
  })
  it('For 1 number returns its value', () => {
    expect(stringCalculator.add('1')).toBe(1)
  })
  it('With 2 numbers they must be added', () => {
    expect(stringCalculator.add('1,2')).toBe(3)
  })

  it('Handle an unknown amount of numbers', () => {
    expect(stringCalculator.add('1,2,3')).toBe(6)
    expect(stringCalculator.add('1,2,3,4')).toBe(10)
    expect(stringCalculator.add('1,2,3,4,5')).toBe(15)
  })

  it('Handles new lines character as separator', () => {
    expect(stringCalculator.add('1\n2')).toBe(3)
    expect(stringCalculator.add('1\n2,3\n4,5')).toBe(15)
  })

  it('Handles a custom delimiter', () => {
    expect(stringCalculator.add('//;\n1;2;3')).toBe(6)
  })

  it('Throws and exception for negative numbers on input', () => {
    expect(() => stringCalculator.add('-1,-2')).toThrow(
      new Error('negatives not allowed: -1,-2')
    )
  })
})
