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
    expect(add('1,4,5,3,4,88')).toEqual(105)
  })

  it('should handle numbers separated by newlines', () => {
    expect(add('1\n4,5,3,4\n88')).toEqual(105)
  })

  it('should support different delimiters', () => {
    expect(add('//{\n1\n4{5{3{88')).toEqual(101)
  })

  it('should throw an exception for negative numbers', () => {
    expect(() => add('-1')).toThrowError(/negatives not allowed/)
    expect(() => add('-1')).toThrowError(/-1/)
    expect(() => add('-1,3,-4')).toThrowError(/negatives not allowed/)
    expect(() => add('-1,3,-4')).toThrowError(/-1/)
    expect(() => add('-1,3,-4')).toThrowError(/-4/)
  })

  it('numbers bigger than 1000 should be ignored', () => {
    expect(add('1\n1999,88')).toEqual(89)
  })

  it('supports delimiters of any length with the following format: “//[delimiter]\n”', () => {
    expect(add('//[quack]\n1\n4quack5,3quack88')).toEqual(101)
    expect(add('//[123]\n1\n41232,312388')).toEqual(98)
  })
})
