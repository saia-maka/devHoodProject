const connection = require('./connection')

function getAllComments(db = connection) {
  return db('comments').select()
}

module.exports = {
  getAllComments,
}
