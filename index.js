const fs = require('fs')

const files = fs.readdirSync('.')

files.forEach((file, index) => {
    if (file.endsWith('.example.js')) {
        const moduleName = file.replace('.js', '')
        const functionName = moduleName.replace('.example', '')

        fs.readFile(file, (err, data) => {
            if (err) throw err
            console.log(`-------"${functionName}" file starts-------`)
            console.log(`\r\n${data.toString()}\r\n`)
            console.log(`-------"${functionName}" file ends-------`)
            console.log('\r\n----Output Starts Here ----\r\n')
            const temp = require(`./${moduleName}`)
            console.log(temp())
            console.log('\r\n----Output Ends Here----\r\n')
        })
    }
})