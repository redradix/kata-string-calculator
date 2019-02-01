const DEFAULT_SEPARATOR = ','

const parseInput = numbers =>
  numbers
    .replace(/\n/g, DEFAULT_SEPARATOR)
    .split(DEFAULT_SEPARATOR)
    .filter(Boolean)
    .map(number => parseInt(number))

const sum = numbers => numbers.reduce((sum, element) => sum + element, 0)

const stringCalculator = {
  add: input => sum(parseInput(input))
}

module.exports = stringCalculator
