const crypto = require('crypto')

const connection = require('../database/index')

module.exports = {
    list:async(req, res)=>{
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    },
    create: async(req, res)=>{
        const {name, email, uf, city, whatsapp} = req.body
        const id = crypto.randomBytes(4).toString('HEX')
        await connection('ongs').insert({id, name, email, city, uf,whatsapp })
        return res.json({id})
    }
}