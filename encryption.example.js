const printEncryptionStrings = (string) => {
    const crypto = require('node:crypto')
    const keyOptions = {
        modulusLength: 520,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            cipher: 'aes-256-cbc',
            format: 'pem',
            passphrase: string,
        }
    }

    const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', keyOptions)
    const signed = crypto.privateEncrypt({key: privateKey, passphrase: string}, Buffer.from(string, 'utf-8'))
    const decrypted = crypto.publicDecrypt(publicKey, signed)
    return `
    Encrypted String: ${signed.toString('hex')}\n
    Decrypted String: ${decrypted.toString('utf-8')}
    `
}

if (require.main === module) {
    const {STRING} = require('./vars')
    console.log(printEncryptionStrings(STRING))
}

module.exports = printEncryptionStrings