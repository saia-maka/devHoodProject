import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { allComments, fetchAllComments } from '../../slices/comments'
import {selectActivePost} from '../../slices/activePost'

import Comment from './Comment'
import AddComment from './AddComment'

function CommentList() {
  const allcomments = useSelector(allComments)
  const activepost = useSelector(selectActivePost)
  const [post, setPost] = useState('')
  const [allPosts, setAllPosts] = useState([])
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    setPost(activepost)
    setAllPosts(allComments)
    dispatch(fetchAllComments())
  }, [])

  console.log(activepost, ' this is active post!!!!!!!!!')
 console.log(allPosts, 'allcomments')


  const activeComments = allcomments.filter(comment => comment.comment_id == id)

  return (
    <>
      <section className="comments-wrapper">
        <h2 className="comment-post-title">{post}</h2>
                {activeComments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              owner={comment.comment_owner}
              title={comment.comment}
            />
          )
        })}
        <AddComment commentId={id} />
      </section>
    </>
  )
}

export default CommentList
