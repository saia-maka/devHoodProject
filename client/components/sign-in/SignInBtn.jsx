import React from 'react'

function SignInBtn(props) {
  return (
    <>
      <button className="signin-btn" onSubmit={props.signIn} type="submit">
        Login
      </button>
    </>
  )
}

export default SignInBtn
