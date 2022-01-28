const add = input => {
  if (input === '') return 0

  // Lexing
  const hasCustomDelimiter = input.startsWith('//')

  const delimiter = hasCustomDelimiter ? input.slice(2, 3) : /,|\n/

  const inputNumbers = hasCustomDelimiter ? input.slice(4) : input

  const operands = inputNumbers.split(delimiter)

  if (operands.some(n => n === '')) {
    throw new Error(
      'Empty operands not allowed (or multiple delimiters in a row)',
    )
  }

  // Parsing
  const numbers = operands.map(n => parseInt(n, 10)).filter(n => n < 1000)

  {
    const negativeNumbers = numbers.filter(n => n < 0)
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(', ')}`,
      )
    }
  }

  // Computing
  return numbers.reduce((acc, n) => acc + n, 0)
}

module.exports = add
