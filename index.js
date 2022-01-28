const add = stringNumbers => {
  if (stringNumbers.length === 0) {
    return 0
  }
  const numbers = stringNumbers.split(/,|\n/)
  return numbers.reduce((acc, num) => {
    const number = parseInt(num)
    if (number === NaN) throw new Error()
    return acc + number
  }, 0)
}

module.exports = { add }
