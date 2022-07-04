import request from 'superagent'


export function fetchProfiles () {
  return request.get('/profiles/signup')
    .then(res => {
      console.log(res.body)
      return res.body
    })
}

// export function createProfile(profile) {
//   return request.post('/creating')
//   .send({
//     username: profile.name,
//     email: profile.email,
//     password: profile.password
//   })
//   .then(res => {
//     console.log('api :', res.req._data)
//     return res.req._data
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// }

export function createProfile(profile) {
  return request
  .post('/profiles/create')
  .send({
    username: profile.username,
    email: profile.email,
    password: profile.password
  })
  .then((response) => {
    console.log(response, ' this is response')
    return response
  })
  .catch((err) => {
    console.error(err.message)
  })
}