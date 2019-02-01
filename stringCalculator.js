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

const throwOnNegativeValues = numbers => {
  const negativeNumbers = numbers.filter(n => n < 0)
  if (negativeNumbers.length)
    throw new Error(`negatives not allowed: ${negativeNumbers.join(',')}`)
  return numbers
}

const parseInput = input =>
  throwOnNegativeValues(toNumberList(homogeneizeInput(input)))

const sum = numbers => numbers.reduce((sum, element) => sum + element, 0)

const stringCalculator = {
  add: input => sum(parseInput(input))
}

module.exports = stringCalculator
