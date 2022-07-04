import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { allPosts, fetchAllPosts } from '../../slices/posts'

// import components:
import Post from './Post'

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
            id={post.id}
          />
        )
      })}
      <h1 className="post-title">$iredeveloper</h1>
    </main>
  )
}

export default PostList
