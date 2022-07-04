import React from 'react'

function SignUpInput(props) {
  return (
    <>
      <input
        className="signup-input"
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
    </>
  )
}

export default SignUpInput
