import { createSlice } from "@reduxjs/toolkit";

// const userState = {
//   user: '',
//   user_id: null,
// }

const activePostSlice = createSlice({
  name: 'activePost',
  initialState: '',
  reducers: {
    activePost: (state, action) => {
      return `${action.payload.post}`
    },
  },
  extraReducers: {},
})

export const selectActivePost = (state) => state.activePost
export const { activePost } = activePostSlice.actions
export default activePostSlice.reducer