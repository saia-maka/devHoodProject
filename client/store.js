import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/activeUser'
import posts from './slices/posts'
import profiles from './slices/profiles'

const store = configureStore({
  reducer: {
    activeUser,
    posts,
    profiles,
  },
})

export default store
