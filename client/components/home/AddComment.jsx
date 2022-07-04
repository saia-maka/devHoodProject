import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { active } from '../../slices/activeUser'
import { useNavigate } from 'react-router-dom'

import {postNewComment, fetchAllComments} from '../../slices/comments'

function AddComment(props) {
  const [comment, setComment] = useState('')
  const [activeuser, setActiveuser] = useState('')
  const dispatch = useDispatch()
  const activeUser = useSelector(active)
  // const navigate = useNavigate()


  useEffect(()=> {
    dispatch(fetchAllComments())
    setActiveuser(activeUser.user)
  }, [])
  console.log(activeuser, 'ACTIVE USER')
  
  function commentHandler(e) {
    setComment(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    const newComment = {
      comment_id: props.commentId,
      comment_owner: activeuser,
      comment: comment,
    }
    console.log(newComment, 'COMMENT')
    dispatch(postNewComment(newComment))
    dispatch(fetchAllComments())
  }

  return (
    <section className="comments-box-wrapper">
      <textarea
        className="comment-postbox-input"
        type="textarea"
        placeholder="Help somebody?"
        onChange={commentHandler}
      />
      <button
        className="comment-postbox-btn"
        type="submit"
        onClick={submitHandler}
      >
        Post
      </button>
    </section>
  )
}

export default AddComment
