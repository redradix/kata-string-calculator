module.exports = input => {
  if (input.length === 0) return 0
  const [delimiter, chain] = splitInput(input) 
  const numbers = parseMultiple(
    getNumbers(chain, delimiter)
  )

  if(areInvalidNumbers(numbers)) throw new Error('negatives not allowed ' + numbers.filter(isNegative))

  return sumMultiple(numbers)
}

const splitInput = input => {
  if (!input.startsWith(CHANGE_DELIMITER_MARKER)) return [DEFAULT_DELIMITER, input ]

  const delimiter = getDelimiter(input)
  const chain = getChain(input)
  return [ delimiter, chain]
}

const DEFAULT_DELIMITER = ','
const CHANGE_DELIMITER_MARKER = '//'

const isNegative = n => n < 0
const areInvalidNumbers = numbers => numbers.some(isNegative)

const getDelimiter = input => input.split('\n')[0].substring(2)
const getChain = input => input.slice(input.indexOf('\n') + 1)

const getNumbers = (input, delimiter) =>
  input.split(new RegExp(`[${delimiter}\n]`))
const parse = n => parseInt(n)
const parseMultiple = arr => arr.map(parse)
const sum = (a, b) => a + b
const sumMultiple = numbers => numbers.reduce(sum)
