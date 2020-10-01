module.exports = function caesarCipher(string, shift, action) {
    //depending on action 
    if (action === 'decode') {
        return caesarCipher(string, 26 - shift)
    }

    //negative shift being changed for decoding
    if (shift < 0) {
        console.log("Works only with positive numbers. Please, try again")
        process.exit(1)
    }

    //returning the encoded/decoded string
    return string.split('').map(c => {
        //check if letter
        if (c.toUpperCase() !== c.toLowerCase()) {
            // Get its code
            let code = c.charCodeAt(0);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        //return the letter to map method
        return c
    })
    //join array to string
    .join('')
}