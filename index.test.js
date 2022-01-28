const { add } = require('./index.js')

describe('add', () => {
  it('returns 0 when empty argument is passed', () => {
    const result = add('')
    expect(result).toBe(0)
  })

  it("returns 1 when single '1' argument is passed", () => {
    const result = add('1')
    expect(result).toBe(1)
  })

  it("returns 2 when single '2' argument is passed", () => {
    const result = add('2')
    expect(result).toBe(2)
  })

  it("returns the sum when two arguments are passed", () => {
    const result = add('1,2')
    expect(result).toBe(3)
  })

  it("returns the sum when any arguments are passed", () => {
    const result = add('1,2,3,4')
    expect(result).toBe(10)
  })

  it("acepts breaklines and commas as delimiters", () => {
    const result = add('1\n2,3')
    expect(result).toBe(6)
  })
})
