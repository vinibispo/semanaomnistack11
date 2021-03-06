const crypto = require('crypto')

const generateId = require('../utils/generateId')

const connection = require('../database/index')

module.exports = {
    index:async(req, res)=>{
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    },
    create: async(req, res)=>{
        const {name, email, uf, city, whatsapp} = req.body
        const id = generateId()
        await connection('ongs').insert({id, name, email, city, uf,whatsapp })
        return res.json({id})
    }
}