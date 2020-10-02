module.exports = function(shift, action) {
    if (typeof action === "function" && !shift) {
        console.error("Action and shift are required")
        process.exit(-1)
    } else if (typeof action === "function") {
        console.error("Action is required")
        process.exit(-1)
    } else if (action !== 'encode' && action !== 'decode') {
        console.error("Action must be encode or decode")
        process.exit(-1)
    } else if (!shift) {
        console.error("Shift is required")
        process.exit(-1)
    } else if (shift < 0) {
        console.error("Shift is positive number. Please, try again")
        process.exit(-1)
    }
}