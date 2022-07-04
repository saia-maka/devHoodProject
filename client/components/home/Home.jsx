import React from 'react'

// import components:
import PostList from './PostList'

function Home() {
  return (
    <section className="home-wrapper">
      {/* <h1>This is home page!</h1> */}
      <section className="home-postbox-wrapper">
        <h2 className="home-postbox-title">Welcome, user!</h2>
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
