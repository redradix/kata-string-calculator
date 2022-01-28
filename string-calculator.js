const sanitizeString = str => str.replace('\n', ',')

const add = (str) => {
    if (str === '') return 0

    const sanitizedString = str.replace('\n', ',')

    if (sanitizedString.includes(',,')) {
        throw new Error('foo')
    }

    const numbers = sanitizedString.split(',')
    return numbers.reduce((acc, curr) => acc + parseInt(curr), 0)
}

module.exports = add