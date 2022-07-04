import { createSlice } from "@reduxjs/toolkit";

// const userState = {
//   user: '',
//   user_id: null,
// }

const activePostSlice = createSlice({
  name: 'activepost',
  initialState: [],
  reducers: {
    activePost: (state, action) => {
      return [...state, action.payload.post]
    },
  },
  extraReducers: {},
})

export const selectActivePost = (state) => state.activepost
export const { activePost } = activePostSlice.actions
export default activePostSlice.reducer