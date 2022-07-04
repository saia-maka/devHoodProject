const express = require('express')
const path = require('path')

const profiles = require('./routes/profiles')
const posts = require('./routes/posts')
const comments = require('./routes/comments')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/fruits', profilesRoutes)
server.use('/profiles', profiles)
server.use('/posts', posts)
server.use('/comments', comments)

module.exports = server
