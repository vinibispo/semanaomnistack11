const express = require('express')
const cors = require('cors')
const {errors} = require('celebrate')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(require('./routes'))
app.use(errors())

module.exports = app