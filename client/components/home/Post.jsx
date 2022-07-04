import React from 'react'

function Post(props) {
  return (
    <section className="post-wrapper">
      <h2 className="post-title">{props.title}</h2>
      <h3 className="post-type">{props.type.map((type) => `#${type}`)}</h3>
      <h3 className="post-author">By {props.author}</h3>
      <h4 className="post-comments-link">View all comments</h4>
    </section>
  )
}

export default Post
