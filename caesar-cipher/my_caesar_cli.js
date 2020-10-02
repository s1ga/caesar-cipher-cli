const fs = require('fs')
const path = require('path')
const commander = require('commander')
const {} = require("stream")

//our caesar cipher function
const caesarCipher = require('./caesarCipher')


//creating flags for app
program
    .storeOptionsAsProperties(true)
    .passCommandToAction(true)
program.version('0.0.1')
program
    .requiredOption('-a, --action <name>', 'Action: encode or decode')
    .requiredOption('-s, --shift <number>', 'Shift of cipher')
    .option('-i, --input <path>', 'File from which cipher will be read')
    .option('-o, --output <path>', 'File where cipher will be written')
    .parse(process.argv)