const add = (str) => {
    if (str === '') return 0
    const sanitizeString = str.replace('\n', ',')
    const numbers = sanitizeString.split(',')
    return numbers.reduce((acc, curr) => acc + parseInt(curr), 0)
}

module.exports = add