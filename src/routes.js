const crypto = require('crypto')
const {Router} = require('express')
const connection = require('./database/index')

const routes = Router()

routes.get('/ongs', async(req, res)=>{
    const ongs = await connection('ongs').select('*')
    return res.json({ongs})
})

routes.post('/ongs', async(req, res)=>{
    const {name, email, uf, city, whatsapp} = req.body
    const id = crypto.randomBytes(4).toString('HEX')
    await connection('ongs').insert({id, name, email, city, uf,whatsapp })
    res.json({id})
})

module.exports = routes