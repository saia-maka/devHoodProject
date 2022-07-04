const connection = require('./connection')

function getAllComments(db = connection) {
  return db('comments').select()
}

function addNewComment(comment, db = connection) {
  return db('comments').insert(comment)
}

module.exports = {
  getAllComments,
  addNewComment
}
