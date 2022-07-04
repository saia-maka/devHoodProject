const express = require('express')

const db = require('../db/posts')

const router = express.Router()

router.get('/all', (req, res) => {
  return db
    .getAllPosts()
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/post', (req, res) => {
  const post = req.body
  return db
    .addPost(post)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
