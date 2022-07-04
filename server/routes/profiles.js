const express = require('express')

const db = require('../db/profiles')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getFruits()
//     .then(results => {
//       res.json({ fruits: results.map(fruit => fruit.name) })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Somthing went wrong' })
//     })
// })

router.get('/signup', (req, res) => {
  return db
    .getProfiles()
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/create', async (req, res) => {
  const profile = req.body
  try {
    console.log(profile, ' this is data')
    const data = await db.addNewProfile(profile)
    profile.id = data
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: 'Somthing went wrong' })
  }
})

module.exports = router
