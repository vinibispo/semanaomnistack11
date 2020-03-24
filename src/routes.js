const {Router} = require('express')
const routes = Router()
const crypto = require('crypto')

routes.post('/ongs', (req, res)=>{
    const {name, email, uf, city, whatsapp} = req.body
    const id = crypto.randomBytes(4).toString('HEX')
    console.log(data)
    res.json({})
})

module.exports = routes