const DEFAULT_SEPARATOR = ','

const homogeneizeInput = input =>
  input.startsWith('//')
    ? input
        .slice(4)
        .replace(new RegExp(`${input.charAt(2)}`, 'g'), DEFAULT_SEPARATOR)
    : input.replace(/\n/g, DEFAULT_SEPARATOR)

const toNumberList = input =>
  input
    .split(DEFAULT_SEPARATOR)
    .filter(Boolean)
    .map(number => parseInt(number))

const parseInput = input => toNumberList(homogeneizeInput(input))

const sum = numbers => numbers.reduce((sum, element) => sum + element, 0)

const stringCalculator = {
  add: input => sum(parseInput(input))
}

module.exports = stringCalculator
