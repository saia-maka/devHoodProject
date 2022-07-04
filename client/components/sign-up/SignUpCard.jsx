import React from 'react'

function SignUpCard(props) {
  return (
    <div className='signup-card-wrapper'>
      {props.children}
    </div>
  )
}

export default SignUpCard