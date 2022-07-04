import React from 'react'

function Comment(props) {
  return (
    <section className="comment-wrapper">
      <h4 className="comment-owner">{props.owner}</h4>
      <h3 className="comment-title">{props.title}</h3>
    </section>
  )
}

export default Comment
