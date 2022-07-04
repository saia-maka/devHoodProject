import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllComments } from '../apis/comments'

export const fetchAllComments = createAsyncThunk(
  'comments/fetchAllComments',
  async () => {
    return await getAllComments()
  }
)

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchAllComments.fulfilled]: (state, { payload }) => payload,
  },
})

export const allComments = (state) => state.comments
export default commentsSlice.reducer
