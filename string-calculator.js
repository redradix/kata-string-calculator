const add = (str) => {
    if (str === '') return 0
    const numbers = str.split(',')
    return numbers.reduce((acc, curr) => acc + parseInt(curr), 0)
}

module.exports = add