import React from 'react'

import Comment from './Comment'

function CommentList() {
  const commentsData = [
    {
      id: 1,
      comment_owner: 'apple',
      comment: 'Might need to check with a facilitator bro',
    },
    {
      id: 2,
      comment_owner: 'orange',
      comment: 'Just google it',
    },
    {
      id: 3,
      comment_owner: 'apple',
      comment: 'Dont listen to orange',
    },
  ]

  return (
    <>
      <section className="comments-wrapper">
        <h2 className="comment-title">..POST QUESTION..</h2>
        {commentsData.map((comment) => {
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
