const mkTest = (title, input, expectMethod, expected) => ({
  title,
  input,
  expectMethod,
  expected,
})

const tests = [
  mkTest('Adding emtpy string the outcome must be zero', '', 'toBe', 0),
  mkTest('Adding "1" string the outcome must be 1', '1', 'toBe', 1),
  mkTest('Adding "1,2,3,4,5" string the outcome must be 15', '1,2,3,4,5', 'toBe', 15),
  mkTest('Adding "1\n2,3" string the outcome must be 6', '1\n2,3', 'toBe', 6)
]

const add = require('./string-calculator')

describe('string-calculator', () => {
  tests.forEach(({ title, input, expectMethod, expected }) => {
    it(title, () => {
      const result = add(input)
      expect(result)[expectMethod](expected)
    })
  })

  it('Adding "1,\\n" string the outcome must give Exception', () => {
    let error
    try {
      const result = add("1,\n")
    } catch(err) {
      error = err
    }
    
    expect(error).toBeTruthy()
  })

  it('Adding "2,\\n" string the outcome must give Exception', () => {
    let error
    try {
      const result = add("2,\n")
    } catch(err) {
      error = err
    }
    expect(error).toBeTruthy()
  })
})