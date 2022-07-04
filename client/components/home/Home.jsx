import React from 'react'
import { useSelector } from 'react-redux'

import { active } from '../../slices/activeUser'

// import components:
import AddPost from './AddPost'
import PostList from './PostList'
// import CommentList from './CommentList'

function Home() {
  const activeUser = useSelector(active)
  // console.log('current active user is :', activeUser)
  return (
    <section className="home-wrapper">
      <AddPost user={activeUser.user} userId={activeUser.user_id} />
      <PostList />
      {/* <CommentList /> */}
    </section>
  )
}

export default Home

