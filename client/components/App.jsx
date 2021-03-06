import React from 'react'
import { Routes, Route } from 'react-router-dom'

// component imports:
import SignIn from './sign-in/SignIn'
import SignUp from './sign-up/SignUp'
import Home from './home/Home'
import CommentList from './home/CommentList'

function App() {
  return (
    <>
      {/* <h1>Lets go DevHood</h1> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/comments/:id" element={<CommentList />} />
      </Routes>
      
    </>
  )
}

export default App
