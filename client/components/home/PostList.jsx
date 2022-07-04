import React from 'react'

// import components:
import Post from './Post'


const postsData = [
  {id: 1, title: "How can I use flexbox?", author: 'David', type: ['css']},
  {id: 2, title: "Whats are some useful terminal git command shortcuts?", author: 'Tony', type: ['git']},
  {id: 3, title: "When is the best time to use redux in your app?", author: 'Rakim', type: ['redux']},
]

function PostList() {

  return (
    <main className='home-postlist-wrapper'>
      <h1 className='post-title'>$iredeveloper</h1>
        {postsData.map((post) => {
          return <Post key={post.id} title={post.title} author={post.author} type={post.type} />
        })}
    </main>
  )
}

export default PostList