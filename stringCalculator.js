const pipe = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)

const DEFAULT_SEPARATOR = ','
const CUSTOM_DELIMITER_TOKEN = '//'

const usesCustomDelimiter = input => input.startsWith(CUSTOM_DELIMITER_TOKEN)

const homogeneizeInput = input =>
  usesCustomDelimiter(input)
    ? input
        .slice(4)
        .replace(new RegExp(`${input.charAt(2)}`, 'g'), DEFAULT_SEPARATOR)
    : input.replace(/\n/g, DEFAULT_SEPARATOR)

const toNumberList = input =>
  input
    .split(DEFAULT_SEPARATOR)
    .filter(Boolean)
    .map(number => parseInt(number))

const throwOnNegativeValues = numbers => {
  const negativeNumbers = numbers.filter(n => n < 0)
  if (negativeNumbers.length)
    throw new Error(`negatives not allowed: ${negativeNumbers.join(',')}`)
  return numbers
}

const parseInput = pipe(
  homogeneizeInput,
  toNumberList,
  throwOnNegativeValues
)

const sum = numbers => numbers.reduce((sum, element) => sum + element, 0)

const stringCalculator = {
  add: pipe(
    parseInput,
    sum
  )
}

module.exports = stringCalculator
