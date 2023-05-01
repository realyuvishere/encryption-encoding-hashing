const printHashingStrings = (string) => {
    const crypto = require('node:crypto')
    const hmac = crypto.createHmac('sha512', string)
    hmac.update(string)

    const hashed = hmac.digest('hex')

    return `
    The string: ${string}\n
    Hashed string: ${hashed}
    `
}

if (require.main === module) {
    const {STRING} = require('./vars')
    console.log(printHashingStrings(STRING))
}

module.exports = printHashingStrings