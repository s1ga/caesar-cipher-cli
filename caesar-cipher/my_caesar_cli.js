const fs = require('fs')
const path = require('path')
const commander = require('commander')
const {pipeline, Transform} = require("stream")
//our caesar cipher function
const caesarCipher = require('./caesarCipher')
//our path validation
const validate = require('./validate')


//creating flags for app
commander
    .storeOptionsAsProperties(true)
    .passCommandToAction(true)
commander.version('0.0.1')
commander
    .requiredOption('-a, --action <name>', 'Action: encode or decode')
    .requiredOption('-s, --shift <number>', 'Shift of cipher')
    .option('-i, --input <path>', 'File from which cipher will be read')
    .option('-o, --output <path>', 'File where cipher will be written')
    .parse(process.argv)

//validate the files path
const input = program.input ? validate(program.input) : null
const output = program.output ? validate(program.output) : null

//creating proto for transform stream for cipher
Transform.prototype._transform = function(chunk, encoding, callback) {
    callback(null, caesarCipher(chunk.toString(), +program.shift, program.action))
}

//vars for streams
const inputStream = input 
                    ? fs.createReadStream(path.join(__dirname, input)) 
                    : process.stdin
const outputStream = output 
                    ? fs.createWriteStream(path.join(__dirname, output), {flags: 'a+'}) 
                    : process.stdout
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