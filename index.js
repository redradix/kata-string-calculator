module.exports = input => {
  if (input.length === 0) return 0
  const delimiter = getDelimiter(input)
  const numbers = parseMultiple(
    getNumbers(removeDelimiterChanger(input), delimiter)
  )
  return sumMultiple(numbers)
}

const DEFAULT_DELIMITER = ','
const CHANGE_DELIMITER_MARKER = '//'

const removeDelimiterChanger = input => {
  if (input.startsWith(CHANGE_DELIMITER_MARKER)) {
    const indexOfFirstLineBreak = input.indexOf('\n')
    return input.slice(indexOfFirstLineBreak + 1)
  }
  return input
}
const getDelimiter = input => {
  if (input.startsWith(CHANGE_DELIMITER_MARKER))
    return input.split('\n')[0].substring(2)
  return DEFAULT_DELIMITER
}

const getNumbers = (input, delimiter) =>
  input.split(new RegExp(`[${delimiter}\n]`))
const parse = n => parseInt(n)
const parseMultiple = arr => arr.map(parse)
const sum = (a, b) => a + b
const sumMultiple = numbers => numbers.reduce(sum)
