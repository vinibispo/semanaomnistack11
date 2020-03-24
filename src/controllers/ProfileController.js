const connection = require('../database/index')
module.exports = {
    index: async(req, res)=>{
        const ong_id = req.headers.authorization
        const incidents = connection('ongs').where('ong_id', ong_id).select('*')
        return res.json(incidents)
    }
}