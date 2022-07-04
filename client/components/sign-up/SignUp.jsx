import React, { useState, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

// data imports:
// import profilesData from '../../../data/profiles'

// function imports:
import { fetchProfiles, createProfile } from '../../apis/api'

// component imports:
import SignUpCard from './SignUpCard'
import SignUpInput from './SignUpInput'

const initialState = {
  // profiles: [],
  userInput: '',
  userUnavailable: null,
  userInvalidFormat: null,
  emailInput: '',
  emailUnavailable: null,
  emailInvalidFormat: false,
  passInput: '',
  passInvalidFormat: null,
}

function reducer(state, action) {
  switch(action.type) {
    case 'USER_INPUT':
      return {
        ...state, userInput: action.payload
      }
    case 'USER_UNAVAILABLE':
      return {
        ...state,
        userUnavailable: action.payload,
      }
    case 'USER_AVAILABLE':
      return {
        ...state,
        userUnavailable: action.payload,
      }
    case 'USER_INVALID':
      return {
        ...state,
        userInvalidFormat: action.payload
      }
    case 'USER_VALID':
      return {
        ...state,
        userInvalidFormat: action.payload
      }
    case 'EMAIL_INPUT':
      return {
        ...state, emailInput: action.payload
      }
      case 'EMAIL_UNAVAILABLE':
        return {
          ...state,
          emailUnavailable: action.payload,
        }
      case 'EMAIL_AVAILABLE':
        return {
          ...state,
          emailUnavailable: action.payload,
        }
      case 'EMAIL_INVALID':
        return {
          ...state,
          emailInvalidFormat: action.payload
        }
      case 'EMAIL_VALID':
        return {
          ...state,
          emailInvalidFormat: action.payload
        }
      case 'PASS_INPUT':
        return {
          ...state,
          passInput: action.payload
        }
      case 'PASS_INVALID':
        return {
          ...state,
          passInvalidFormat: action.payload
        }
      case 'PASS_VALID':
        return {
          ...state,
          passInvalidFormat: action.payload
        }
      default:
        return state
  }
}

function SignUp() {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [profiles, setProfiles] = useState([])

  // const [userInput, setUserInput] = useState('')
  // const [userUnavailable, setUserUnavailable] = useState(null)
  // const [userInvalidFormat, setUserInvalidFormat] = useState(null)

  // const [emailInput, setEmailInput] = useState('')
  // const [emailUnavailable, setEmailUnavailable] = useState(null)
  // const [emailInvalidFormat, setEmailInvalidFormat] = useState(false)

  // const [passInput, setPassInput] = useState('')
  // const [passInvalidFormat, setPassInvalidFormat] = useState(null)

  useEffect(() => {
    fetchProfiles()
      .then((res) => {
        setProfiles(res)
        // dispatch({
        //   type: 'SET_PROFILES',
        //   payload: res,
        // })
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function changeHandler(e) {
    // setUserInput(e.target.value)
    dispatch({
      type: 'USER_INPUT',
      payload: e.target.value
    })
  }

  function usernameHandler() {
    // console.log(state.userInput, ' this is state.userInput in username handler')
    // console.log(profiles, ' this is profiles in username handler')
    const userExists = profiles.find((profile) => profile.username == state.userInput)
    const format = /^\w{4,12}$/i
    if (userExists) {
      // setUserUnavailable(true)
      dispatch({
        type: 'USER_UNAVAILABLE',
        payload: true
      })
      // console.log('user is unavailable', state)
    }
    if (!userExists) {
      // setUserUnavailable(false)
      dispatch({
        type: 'USER_AVAILABLE',
        payload: false
      })
      // console.log('user is available', state)
    }
    if (!state.userInput.match(format)) {
      // setUserInvalidFormat(true)
      dispatch({
        type: 'USER_INVALID',
        payload: true
      })
      // console.log('bad format ', state)
    }
    if (state.userInput.match(format)) {
      // setUserInvalidFormat(false)
      dispatch({
        type: 'USER_VALID',
        payload: false
      })
      // console.log('good format ', state)
    }
  }

  const userMsg = (
    <div>
      <p className="errMsg">
        Username must be 4 - 12 alphanumeric characters only
      </p>
    </div>
  )
  const userTaken = (
    <div>
      <p className="errMsg">Username is already taken</p>
    </div>
  )

  function changeEmailHandler(e) {
    // setEmailInput(e.target.value)
    dispatch({
      type: 'EMAIL_INPUT',
      payload: e.target.value
    })
  }

  function emailHandler() {
    const emailExists = profiles.find((profile) => profile.email == state.emailInput)
    const format = /^\w*[@][a-z|0-9]*[.][a-z]{1,}[a-z]$/i
    if (emailExists) {
      // setEmailUnavailable(true)
      dispatch({
        type: 'EMAIL_UNAVAILABLE',
        payload: true
      })
    }
    if (!emailExists) {
      // setEmailUnavailable(false)
      dispatch({
        type: 'EMAIL_AVAILABLE',
        payload: false
      })
    }
    if (!state.emailInput.match(format)) {
      // setEmailInvalidFormat(true)
      dispatch({
        type: 'EMAIL_INVALID',
        payload: true
      })
    }
    if (state.emailInput.match(format)) {
      // setEmailInvalidFormat(false)
      dispatch({
        type: 'EMAIL_VALID',
        payload: false
      })
    }
  }

  const emailMsg = (
    <div>
      <p className="errMsg">Please enter a valid email address</p>
    </div>
  )
  const emailTaken = (
    <div>
      <p className="errMsg">This email has already been used!</p>
    </div>
  )

  function changePassHandler(e) {
    // setPassInput(e.target.value)
    dispatch({
      type: 'PASS_INPUT',
      payload: e.target.value
    })
  }

  function passHandler() {
    const format = /^\w{6,16}$/i
    if (!state.passInput.match(format)) {
      // setPassInvalidFormat(true)
      dispatch({
        type: 'PASS_INVALID',
        payload: true
      })
    }
    if (state.passInput.match(format)) {
      // setPassInvalidFormat(false)
      dispatch({
        type: 'PASS_VALID',
        payload: false
      })
    }
  }

  const passMsg = (
    <>
      <p className="errMsg">
        Passwords must be 6-16 alphanumeric characters only
      </p>
    </>
  )

  // function creationHandler(e) {
  //   e.preventDefault()
  //   const profile = {
  //     username: userInput,
  //     email: emailInput,
  //     password: passInput
  //   }
  //     createProfile(profile)
  //     // .then((res) => {
  //     //   console.log('front ', res)
  //     //   setProfiles([...profiles, res])
  //     // })
  //     // .catch(err => {
  //     //   console.error(err.message)
  //     // })
  //   }

  function creationHandler(e) {
    e.preventDefault()
    const newProfile = {
      username: state.userInput,
      email: state.emailInput,
      password: state.passInput,
    }
    createProfile(newProfile)
      .then((res) => {
        console.log('front end ', res)
        setProfiles([...profiles, res])
        navigate('/home')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const submitbtn = (
    <button className="signup-create-btn" type="submit">
      Create account
    </button>
  )

  return (
    <main className="signup-wrapper">
      <h1>Create your account</h1>
      <SignUpCard>
        <div className="signup-icons-wrapper">
          <div className="signup-icon"></div>
          <div className="signup-icon"></div>
          <div className="signup-icon"></div>
        </div>
        <form className="signup-form" onSubmit={creationHandler}>
          <SignUpInput
            type="text"
            placeholder="Create your username"
            onChange={changeHandler}
            onBlur={usernameHandler}
          />
          {state.userUnavailable && userTaken}
          {state.userInvalidFormat && userMsg}
          <SignUpInput
            type="text"
            placeholder="Enter your email"
            onChange={changeEmailHandler}
            onBlur={emailHandler}
          />
          {state.emailUnavailable && emailTaken}
          {state.emailInvalidFormat && emailMsg}
          <SignUpInput
            type="text"
            placeholder="Create your password"
            onChange={changePassHandler}
            onBlur={passHandler}
          />
          {state.passInvalidFormat && passMsg}
          <button className="signup-create-btn" type="submit" onClick={creationHandler}>
            Create account
          </button>
          {state.userUnavailable === false &&
          state.emailUnavailable === false &&
          state.passInvalidFormat === false
            ? submitbtn
            : ''}
        </form>
        
      </SignUpCard>
    </main>
  )
}

export default SignUp
