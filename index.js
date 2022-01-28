const add = numbersString => {
  const numbers = numbersString.replace('\n', ',').split(',')
  return numbers.reduce((acc, curr)=> Number(curr)+ acc, 0)
}


module.exports = {add}
