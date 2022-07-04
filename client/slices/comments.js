import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllComments, addNewComment } from '../apis/comments'

export const fetchAllComments = createAsyncThunk(
  'comments/fetchAllComments',
  async () => {
    return await getAllComments()
  }
)

export const postNewComment = createAsyncThunk(
  'comments/addNewComment',
  async (comment) => {
    return await addNewComment(comment)
  }
)

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchAllComments.fulfilled]: (state, { payload }) => payload,
    [postNewComment.fulfilled]: (state, { payload }) => payload,
  },
})

export const allComments = (state) => state.comments
export default commentsSlice.reducer
