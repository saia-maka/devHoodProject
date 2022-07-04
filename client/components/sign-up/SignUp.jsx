import React, { useState, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// data imports:
// import profilesData from '../../../data/profiles'

// function imports:
import { fetchProfiles, createProfile } from '../../apis/profiles'
import { activeUser } from '../../slices/activeUser'

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
  switch (action.type) {
    case 'USER_INPUT':
      return {
        ...state,
        userInput: action.payload,
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
        userInvalidFormat: action.payload,
      }
    case 'USER_VALID':
      return {
        ...state,
        userInvalidFormat: action.payload,
      }
    case 'EMAIL_INPUT':
      return {
        ...state,
        emailInput: action.payload,
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
        emailInvalidFormat: action.payload,
      }
    case 'EMAIL_VALID':
      return {
        ...state,
        emailInvalidFormat: action.payload,
      }
    case 'PASS_INPUT':
      return {
        ...state,
        passInput: action.payload,
      }
    case 'PASS_INVALID':
      return {
        ...state,
        passInvalidFormat: action.payload,
      }
    case 'PASS_VALID':
      return {
        ...state,
        passInvalidFormat: action.payload,
      }
    default:
      return state
  }
}

function SignUp() {
  const dispatcher = useDispatch()
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetchProfiles()
      .then((res) => {
        setProfiles(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function changeHandler(e) {
    dispatch({
      type: 'USER_INPUT',
      payload: e.target.value,
    })
  }

  function usernameHandler() {
    const userExists = profiles.find(
      (profile) => profile.username == state.userInput
    )
    const format = /^\w{4,12}$/i
    if (userExists) {
      dispatch({
        type: 'USER_UNAVAILABLE',
        payload: true,
      })
    }
    if (!userExists) {
      dispatch({
        type: 'USER_AVAILABLE',
        payload: false,
      })
    }
    if (!state.userInput.match(format)) {
      dispatch({
        type: 'USER_INVALID',
        payload: true,
      })
    }
    if (state.userInput.match(format)) {
      dispatch({
        type: 'USER_VALID',
        payload: false,
      })
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
    dispatch({
      type: 'EMAIL_INPUT',
      payload: e.target.value,
    })
  }

  function emailHandler() {
    const emailExists = profiles.find(
      (profile) => profile.email == state.emailInput
    )
    const format = /^\w*[@][a-z|0-9]*[.][a-z]{1,}[a-z]$/i
    const format2 = /^\w*[@][a-z|0-9]*[.][a-z]{1,}[.][a-z]{1,}[a-z]$/i

    if (emailExists) {
      dispatch({
        type: 'EMAIL_UNAVAILABLE',
        payload: true,
      })
    }
    if (!emailExists) {
      dispatch({
        type: 'EMAIL_AVAILABLE',
        payload: false,
      })
    }
    if (!state.emailInput.match(format)) {
      dispatch({
        type: 'EMAIL_INVALID',
        payload: true,
      })
    }
    if (state.emailInput.match(format) || state.emailInput.match(format2)) {
      dispatch({
        type: 'EMAIL_VALID',
        payload: false,
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
    dispatch({
      type: 'PASS_INPUT',
      payload: e.target.value,
    })
  }

  function passHandler() {
    const format = /^\w{6,16}$/i
    if (!state.passInput.match(format)) {
      dispatch({
        type: 'PASS_INVALID',
        payload: true,
      })
    }
    if (state.passInput.match(format)) {
      dispatch({
        type: 'PASS_VALID',
        payload: false,
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
        dispatcher(
          activeUser({
            user: state.userInput,
            userId: profiles.length + 1,
          })
        )
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
