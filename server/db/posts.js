const connection = require('./connection')

function getAllPosts(db = connection) {
  return db('posts')
}