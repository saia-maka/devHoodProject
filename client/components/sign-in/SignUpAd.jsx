import React from 'react'
import {useNavigate} from 'react-router-dom'

function SignUpAd() {
  const navigate = useNavigate()

  function signupHandler() {
    navigate('/signup')
  }

  return (
    <>
      <section className="signupAd-wrapper">
        <h2 className='signupAd-title'>New around here?</h2>
        <p className='signupAd-text'>Your next coding solution awaits!</p>
        <button onClick={signupHandler} className='signupAd-link'>Sign up</button>
      </section>
    </>
  )
}
export default SignUpAd
