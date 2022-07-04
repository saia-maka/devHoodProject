import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { allComments, fetchAllComments } from '../../slices/comments'
import {selectActivePost} from '../../slices/activePost'

import Comment from './Comment'

function CommentList() {
  const allcomments = useSelector(allComments)
  const activepost = useSelector(selectActivePost)
  const [post, setPost] = useState(activepost)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    setPost(activepost)
    dispatch(fetchAllComments())
  }, [])

  console.log(activepost, ' this is active post!!!!!!!!!')
  console.log(post, ' this is active post!!!!!!!!!')
  console.log('commentlist :', id)


  const activeComments = allcomments.filter(comment => comment.comment_id == id)

  return (
    <>
      <section className="comments-wrapper">
        <h2 className="comment-title">..POST QUESTION..</h2>
                {activeComments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              owner={comment.comment_owner}
              title={comment.comment}
            />
          )
        })}
      </section>
    </>
  )
}

export default CommentList
