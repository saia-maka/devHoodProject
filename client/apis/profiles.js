import request from 'superagent'

const url = '/profiles'

export async function fetchProfiles() {
  const allProfiles = await request.get(`${url}/signup`)
  try {
    console.log('API: ', allProfiles.body)
    return allProfiles.body
  } catch (err) {
    console.error(err.message)
  }
}

export function createProfile(profile) {
  const newProfile = {
    username: profile.username,
    password: profile.password,
    email: profile.email,
  }
  return request
    .post(`${url}/create`)
    .send(newProfile)
    .then((response) => {
      console.log(response.body, ' this is response')
      return response.body
    })
    .catch((err) => {
      console.error(err.message)
    })
}
