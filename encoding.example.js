const printBase64Strings = (string) => {
    const encoded = btoa(string)

    return `The string: ${string}\n
    Encoded string: ${encoded}\n
    Decoded string: ${atob(encoded)}        
    `
}

if (require.main === module) {
    const {STRING} = require('./vars')
    console.log(printBase64Strings(STRING))
}

module.exports = printBase64Strings