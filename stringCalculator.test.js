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
})
