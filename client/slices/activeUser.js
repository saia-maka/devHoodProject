import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const userState = {
//   activeUser: '',
// }

const activeSlice = createSlice({
  name: 'activeUser',
  initialState: [],
  reducers: {
    activeUser: (state, action) => {
      return [action.payload.user]
    },
  },
  extraReducers: {},
})

export const active = (state) => state.activeUser
export const { activeUser } = activeSlice.actions
export default activeSlice.reducer
