import React from 'react'

function SignInInput(props) {
  return (
    <>
      <input
        className="signin-input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.inputHandler}
      />
    </>
  )
}

export default SignInInput
