import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { allPosts, fetchAllPosts } from '../../slices/posts'

// import components:
import Post from './Post'

// const postsData = [
//   { id: 1, title: 'How can I use flexbox?', author: 'David', type: ['css'] },
//   {
//     id: 2,
//     title: 'Whats are some useful terminal git command shortcuts?',
//     author: 'Tony',
//     type: ['git'],
//   },
//   {
//     id: 3,
//     title: 'When is the best time to use redux in your app?',
//     author: 'Rakim',
//     type: ['redux'],
//   },
// ]

function PostList() {
  const posts = useSelector(allPosts)
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(fetchAllPosts())
  }, [])

  console.log('THESE ARE ALL POSTS :', posts)

  return (
    <main className="home-postlist-wrapper">
      <h1 className="post-title">$iredeveloper</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.post}
            author={post.post_owner}
            type={post.type}
          />
        )
      })}
      <h1 className="post-title">$iredeveloper</h1>
    </main>
  )
}

export default PostList
