const escapeRegexp = regexp => regexp.replace('{', '\\{')

const add = string => {
  const delimiters = [',', '\n']
  const delimiterMatch = string.match(/\/\/(.)\n/)

  if (delimiterMatch !== null) {
    delimiters.push(delimiterMatch[1])
    string = string.slice(delimiterMatch.index + delimiterMatch[0].length)
  }

  const numbers = string
    .split(new RegExp(`[${delimiters.map(escapeRegexp).join('')}]`))
    .map(number => parseInt(number, 10))
    .filter(number => !isNaN(number))

  const negativeNumbers = numbers.filter(number => number < 0)

  if (negativeNumbers.length > 0)
    throw new Error('negatives not allowed ' + negativeNumbers.join(' '))

  return numbers.reduce((acc, number) => acc + number, 0)
}

module.exports = { add }
