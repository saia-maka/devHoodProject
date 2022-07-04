import { createSlice } from '@reduxjs/toolkit'

const userState = {
  user: '',
  user_id: null,
}

const activeSlice = createSlice({
  name: 'activeUser',
  initialState: userState,
  reducers: {
    activeUser: (state, action) => {
      return {
        user: action.payload.user,
        user_id: action.payload.userId,
      }
    },
  },
  extraReducers: {},
})

export const active = (state) => state.activeUser
export const { activeUser } = activeSlice.actions
export default activeSlice.reducer
