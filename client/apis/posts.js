import request from 'superagent'

const url = '/posts'

export async function getAllPosts() {
  const allPosts = await request.get(`${url}/all`)
  try {
    // console.log('API: ', allPosts.body)
    return allPosts.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function addNewPost(post) {
  const newPost = {
    post_id: post.post_id,
    post_owner: post.post_owner,
    post: post.post,
    type: post.type,
  }
  const addNew = await request.post(`${url}/post`).send(newPost)
  try {
    return addNew.body
  } catch (err) {
    console.error(err.message)
  }
}
