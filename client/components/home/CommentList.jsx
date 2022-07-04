import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { allComments, fetchAllComments } from '../../slices/comments'

import Comment from './Comment'

function CommentList() {
  const allcomments = useSelector(allComments)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchAllComments())
  }, [])

  console.log('COMPONENT: ', allcomments)
  console.log('commentlist :', id)

  // const commentsData = [
  //   {
  //     id: 1,
  //     comment_owner: 'apple',
  //     comment: 'Might need to check with a facilitator bro',
  //   },
  //   {
  //     id: 2,
  //     comment_owner: 'orange',
  //     comment: 'Just google it',
  //   },
  //   {
  //     id: 3,
  //     comment_owner: 'apple',
  //     comment: 'Dont listen to orange',
  //   },
  // ]

  const activeComments = allcomments.filter(comment => comment.comment_id == id)

  return (
    <>
      <section className="comments-wrapper">
        <h2 className="comment-title">..POST QUESTION..</h2>
        {/* {allcomments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              owner={comment.comment_owner}
              title={comment.comment}
            />
          )
        })} */}
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
