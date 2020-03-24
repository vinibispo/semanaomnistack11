const {Router} = require('express')
const OngController = require('./controllers/OngController')
const routes = Router()

routes.get('/ongs', OngController.list)

routes.post('/ongs', OngController.create)

module.exports = routes