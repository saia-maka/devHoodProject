import request from 'superagent'

const url = '/comments'

export async function getAllComments() {
  const allComments = await request.get(`${url}/all`)
  try {
    console.log('API comments: ', allComments.body)
    return allComments.body
  } catch (err) {
    console.error(err.message)
  }
}