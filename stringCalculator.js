const stringCalculator = {
  add: numbers =>
    numbers
      .split(',')
      .filter(Boolean)
      .map(number => parseInt(number))
      .reduce((sum, element) => sum + element, 0)
}

module.exports = stringCalculator
