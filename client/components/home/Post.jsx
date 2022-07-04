import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import {activePost} from '../../slices/activePost'

function Post(props) {
  const navigate = useNavigate()
  // const currentPost = useSelector(selectActivePost)
  const dispatch = useDispatch()

  function postLinkHandler() {
    dispatch(activePost({
      post: props.title
    }))
    navigate(`/comments/${props.id}`)
  }

  return (
    <section className="post-wrapper">
      <h2 className="post-title">{props.title}</h2>
      {/* <h3 className="post-type">{props.type.map((type) => `#${type}`)}</h3> */}
      <h3 className="post-type">{`#${props.type}`}</h3>
      <h3 className="post-author">By {props.author}</h3>
      <p onClick={e => postLinkHandler(e, props.id)} className="post-comments-link">View all comments</p>
    </section>
  )
}

export default Post
