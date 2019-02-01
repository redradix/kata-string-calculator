module.exports = input => {
  if (input.length === 0) return 0
  const numbers = getNumbers(input)
  return sumMultiple(numbers)
}

const getNumbers = input => input.split(',')
const sumMultiple = numbers => numbers.reduce(sum, 0)
const sum = (a, b) => a + parseInt(b)
