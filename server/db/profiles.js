const connection = require('./connection')

function getProfiles (db = connection) {
  return db('profiles').select()
}

module.exports = {
  getProfiles
}
