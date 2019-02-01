module.exports = input => {
  if (input.length === 0) return 0
  const numbers = parseMultiple(getNumbers(input))
  return sumMultiple(numbers)
}

const getNumbers = input => input.split(/[,\n]/)
const parse = n => parseInt(n)
const parseMultiple = arr => arr.map(parse)
const sum = (a, b) => a + b
const sumMultiple = numbers => numbers.reduce(sum)
