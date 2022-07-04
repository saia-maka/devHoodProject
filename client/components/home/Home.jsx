import React from 'react'
import { useSelector } from 'react-redux'

import {active} from '../../slices/activeUser'

// import components:
import PostList from './PostList'

function Home() {
  const activeUser = useSelector(active)
  console.log('current active user is :', activeUser)
  return (
    <section className="home-wrapper">
      {/* <h1>This is home page!</h1> */}
      <section className="home-postbox-wrapper">
        <h2 className="home-postbox-title">{`Welcome, ${activeUser[0]}!`}</h2>
        <form className='home-postbox-form'>
          <textarea className="home-postbox-input" type="textarea" placeholder='Ask somebody?' />
          <button className="home-postbox-btn" type="submit">
            Post
          </button>
        </form>
      </section>
      <PostList />
    </section>
  )
}

export default Home
