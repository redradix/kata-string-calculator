const {add} = require('./index')

describe('it returns the arguments summatory', () => {
  it(`returns zero if it receives '' as arg`, () =>{
    expect(add('')).toBe(0)
  })
  it(`returns zero if it receives '1' as arg`, () =>{
    expect(add('1')).toBe(1)
  })
})
