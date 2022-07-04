const connection = require('./connection')

function getAllPosts(db = connection) {
  return db('posts')
}

function addPost(post, db = connection) {
  return db('posts').insert(post)
}

module.exports = {
  getAllPosts,
  addPost,
}

// .insert({
//   post_id: post.post_id,
//   post_owner: post.post_owner,
//   post: post.post,
//   type: post.type,
// })
