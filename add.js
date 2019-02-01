module.exports = function add(input = '') {
  const hasDelimiter = input.startsWith('//')

  const delimiters = hasDelimiter
                     ? [input[2]]
                     : [',', '\n']

  const numbersStr = hasDelimiter
                  ? input.slice(3)
                  : input

  const numbers = numbersStr
    .split(new RegExp(`[${delimiters.join('')}]`))
    .map(x => parseInt(x))

  const negatives = numbers.filter(x => x < 0)
  if (negatives.length) {
    throw new Error('negatives not allowed ' + negatives.join(', '))
  }

  return numbers
    .filter(x => x <= 1000)
    .reduce((a, b) => a + b, 0)
}