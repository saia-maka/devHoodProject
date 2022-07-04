import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/activeUser'
import posts from './slices/posts'
import profiles from './slices/profiles'
import comments from './slices/comments'

const store = configureStore({
  reducer: {
    activeUser,
    posts,
    profiles,
    comments
  },
})

export default store
