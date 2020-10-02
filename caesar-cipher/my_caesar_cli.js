const fs = require('fs')
const path = require('path')
const commander = require('commander')
const {pipeline, Transform} = require("stream")
//our caesar cipher function
const caesarCipher = require('./caesarCipher')
//our path validation
const validate = require('./validate')
//our argument validation
const validateArgs = require('./validateArgs')
const { program } = require('commander')


//creating flags for app
commander
    .storeOptionsAsProperties(true)
    .passCommandToAction(false)
commander.version('0.0.1')
commander
    .requiredOption('-a, --action <name>', 'Action: encode or decode')
    .requiredOption('-s, --shift <number>', 'Shift of cipher')
    .option('-i, --input <path>', 'File from which cipher will be read')
    .option('-o, --output <path>', 'File where cipher will be written')

//parse arguments
commander.parse(process.argv)

//validation arguments
validateArgs(commander.shift, commander.action)

//creating proto for transform stream for cipher
Transform.prototype._transform = function(chunk, encoding, callback) {
    callback(null, caesarCipher(chunk.toString(), +commander.shift, commander.a))
}

//validate the files path
const output = commander.output ? validate(commander.output) : null
const input = commander.input ? validate(commander.input) : null
    
//vars for streams
const outputStream = output 
                    ? fs.createWriteStream(path.join(__dirname, output), {flags: 'a+'}) 
                    : process.stdout
const inputStream = input 
                    ? fs.createReadStream(path.join(__dirname, input)) 
                    : process.stdin
const transformStream = new Transform()

//pipeline with our streams
pipeline(
    inputStream,
    transformStream,
    outputStream,
    err => {
        if (err) {
            console.error(err)
            process.exit(-1)
        } else {
            console.log("Success cipher")
        }
    }
)


// 1. отделить стрим
// 2. разложить по папочкам
// 3. в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, 
//    которые можно передать приложению