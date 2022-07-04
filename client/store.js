import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/activeUser'

const store = configureStore({
  reducer: {
    activeUser,
  },
})

export default store
