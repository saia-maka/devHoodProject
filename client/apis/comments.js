import request from 'superagent'

const url = '/comments'

export async function getAllComments() {
  const allComments = await request.get(`${url}/all`)
  try {
    // console.log('API comments: ', allComments.body)
    return allComments.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function addNewComment(comment) {
  const newComment = {
    comment_id: comment.comment_id,
    comment_owner: comment.comment_owner,
    comment: comment.comment
  }
  const postComment = await request.post(`${url}/add`).send(newComment)
  try {
    console.log('API comments: ', postComment.body)
    return postComment.body
  } catch (err) {
    console.error(err.message)
  }
}