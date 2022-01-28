const {add} = require('./index')

describe('it returns the arguments summatory', () => {
  it(`returns zero if it receives '' as arg`, ()=>{
    expect(add('')).toBe(0)
  })
})
