const connection = require('./connection')

function getProfiles(db = connection) {
  return db('profiles').select()
}

function addNewProfile(profile, db = connection) {
  return db('profiles').insert(profile)
}

module.exports = {
  getProfiles,
  addNewProfile,
}
