const { add } = require('./index')

describe('add', () => {
  it('for an empty string it will return 0', () => {
    expect(add('')).toEqual(0)
  })

  it('for the string with one number it will return the number', () => {
    expect(add('1')).toEqual(1)
    expect(add('76')).toEqual(76)
  })

  it('for the string with two numbers it will return their sum', () => {
    expect(add('1,4')).toEqual(5)
    expect(add('76,42')).toEqual(118)
  })

  it('should handle an unknown amount of numbers', () => {
    expect(add('1,4,5,3,4,1999,88')).toEqual(2104)
  })

  it('should handle numbers separated by newlines', () => {
    expect(add('1\n4,5,3,4\n1999,88')).toEqual(2104)
  })

  it('should support different delimiters', () => {
    expect(add('//{\n1\n4{5{3\n1999{88')).toEqual(2100)
  })
})
