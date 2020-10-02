const fs = require("fs")

module.exports = function validate(path) {
    // try/catch block for asynchronous code 
    try {
        //check access or existence of file
        fs.access(path, err => {
            //if false, delete them and exit the app
            if (err) {
                fs.unlink(path, err => console.error(err))
                console.error(`There are no such file "${path}"`)
                process.exit(-1)
            }
    
        })
        
        //in other case return our path
        return path 
    } catch (e) {
        //if something goes wrong make it known
        console.error("Something goes wrong")
    }
}