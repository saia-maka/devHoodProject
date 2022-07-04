const express = require('express')
const path = require('path')

const profiles = require('./routes/profiles')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/fruits', profilesRoutes)
server.use('/profiles', profiles)


module.exports = server
