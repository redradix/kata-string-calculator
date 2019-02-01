// General purpose
const pipe = (...fns) => input => fns.reduce((a, fn) => fn(a), input)
const trace = x => {
  console.log('x', x)
  return x
}
const sum = numbers => numbers.reduce((a, b) => a + b)
const isEmpty = input => input.length === 0
const isNegative = n => n < 0

// Entities
const DEFAULT_DELIMITER = ','
const CHANGE_DELIMITER_MARKER = '//'

module.exports = input => {
  if (isEmpty(input)) {
    return 0
  }
  return pipe(
    splitInput,
    getNumberList,
    parseMultiple,
    throwIfInvalid,
    sum
  )(input)
}

const throwIfInvalid = numbers => {
  if (haveNegativeNumbers(numbers)) {
    throw new Error('negatives not allowed ' + numbers.filter(isNegative))
  }
  return numbers
}

const splitInput = input => {
  if (!input.startsWith(CHANGE_DELIMITER_MARKER))
    return [input, DEFAULT_DELIMITER]

  const delimiter = getDelimiter(input)
  const numbers = getNumbers(input)
  return [numbers, delimiter]
}

const haveNegativeNumbers = numbers => numbers.some(isNegative)

const getDelimiter = input => input.split('\n')[0].substring(2)
const getNumbers = input => input.slice(input.indexOf('\n') + 1)

const getNumberList = ([input, delimiter]) =>
  input.split(new RegExp(`[${delimiter}\n]`))
const parseMultiple = arr => arr.map(n => parseInt(n))
