import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost, fetchAllPosts } from '../../slices/posts'

function AddPost(props) {
  const dispatch = useDispatch()
  const [post, setPost] = useState('')
  const [postType, setPostType] = useState('')

  function postHandler(e) {
    setPost(e.target.value)
  }

  function typeHandler(e) {
    setPostType(e.target.value)
    console.log(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log('post :', post, 'postType: ', postType)
    const newPost = {
      post_id: props.userId,
      post_owner: props.user,
      post: post,
      type: postType,
    }
    dispatch(createPost(newPost))
    dispatch(fetchAllPosts())
  }

  return (
    <>
      <section className="home-postbox-wrapper">
        <h2 className="home-postbox-title">{`Welcome, ${props.user}!`}</h2>
        <form className="home-postbox-form">
          <textarea
            className="home-postbox-input"
            type="textarea"
            placeholder="Ask somebody?"
            onChange={postHandler}
          />
          <select
            onClick={typeHandler}
            className="home-postbox-select"
            defaultValue={'default'}
          >
            <option value={'default'} disabled>
              Choose an option
            </option>
            <option value="Git">GIT</option>
            <option value="Html">HTML</option>
            <option value="Css">CSS</option>
            <option value="Javascript">JavaScript</option>
            <option value="React">REACT</option>
            <option value="Redux">REDUX</option>
          </select>
          <button
            className="home-postbox-btn"
            type="submit"
            onClick={submitHandler}
          >
            Post
          </button>
        </form>
      </section>
    </>
  )
}

export default AddPost
