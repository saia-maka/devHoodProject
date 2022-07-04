const express = require('express')

const db = require('../db/comments')

const router = express.Router()

router.get('/all', (req,res) => {
  return db.getAllComments()
  .then((response) => {
    res.json(response)
  })
  .catch((err) => {
    console.error(err.message)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

module.exports = router