import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// function imports:
import { fetchProfiles } from '../../apis/api'

// component imports:
import SignInInput from './SignInInput'
import SignInBtn from './SignInBtn'
import SignUpAd from './SignUpAd'

function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isErr, setIsErr] = useState('')
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()

  function usernameHandler(e) {
    setUsername(e.target.value)
  }

  function passwordHandler(e) {
    setPassword(e.target.value)
  }

  const errMsg = (
    <div>
      <p className="errMsg">Incorrect username or password, try again!</p>
    </div>
  )

  async function signInHandler(e) {
    e.preventDefault()
    const user = await profiles.find(
      (profile) => profile.password == password && profile.username == username
    )
    try {
      if (user) {
        console.log(user, ' success')
        navigate('/home')
      } else {
        setIsErr(true)
        console.log('failed')
      }
    } catch (err) {
      setIsErr(true)
      console.error(err.message)
    }
  }

  useEffect(() => {
    fetchProfiles()
    .then((res)=>{
      setProfiles(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }, [])

  return (
    <main className="signin-wrapper">
      <form className="signin-form" onSubmit={signInHandler}>
        <h1 className="signin-title">Welcome to DevHood</h1>
        <hr className="signin-hr" />
        <SignInInput
          type="text"
          name="login-username"
          placeholder="Enter your username"
          inputHandler={usernameHandler}
          value={username}
        />
        <SignInInput
          type="password"
          name="login-password"
          placeholder="Enter your password"
          inputHandler={passwordHandler}
          value={password}
        />
        {isErr && errMsg}

        <SignInBtn />
      </form>
      <SignUpAd />
    </main>
  )
}

export default SignIn
