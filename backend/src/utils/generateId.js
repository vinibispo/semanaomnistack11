const crypto = require('crypto')

const generateId = () =>{
    return crypto.randomBytes(4).toString('HEX')
}
module.exports = generateId