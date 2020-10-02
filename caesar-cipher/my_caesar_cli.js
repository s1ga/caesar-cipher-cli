const fs = require('fs')
const path = require('path')
const commander = require('commander')
const {} = require("stream")

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