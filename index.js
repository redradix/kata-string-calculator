const add = stringNumbers => {
  if (stringNumbers.length === 0) {
    return 0
  }
  const numbers = stringNumbers.split(',')
  return numbers.reduce((acc, num) => acc + parseInt(num), 0)
}

module.exports = { add }
