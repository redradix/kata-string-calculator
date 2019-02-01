const escapeRegexp = regexp => regexp.replace('\n', '\\n').replace('{', '\\{')

const add = string => {
  const delimiters = [',', '\n']
  const delimiterMatch = string.match(/\/\/(.)\n/)
  const customDelimiterMatch = string.match(/\/\/\[(.+)\]\n/)

  if (delimiterMatch !== null) {
    const delimiter = delimiterMatch[1]
    delimiters.push(delimiter)
    string = string.slice(delimiterMatch.index + delimiterMatch[0].length)
  }

  if (customDelimiterMatch !== null) {
    const delimiter = customDelimiterMatch[1]
    delimiters.push(delimiter)
    string = string.slice(
      customDelimiterMatch.index + customDelimiterMatch[0].length
    )
  }

  const numbers = string
    .split(new RegExp(`${delimiters.map(escapeRegexp).join('|')}`))
    .map(number => parseInt(number, 10))
    .filter(number => !isNaN(number))
    .filter(number => number < 1000)

  const negativeNumbers = numbers.filter(number => number < 0)

  if (negativeNumbers.length > 0)
    throw new Error('negatives not allowed ' + negativeNumbers.join(' '))

  return numbers.reduce((acc, number) => acc + number, 0)
}

module.exports = { add }
