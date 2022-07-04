import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPosts, addNewPost } from '../apis/posts'

export const fetchAllPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async () => {
    return await getAllPosts()
  }
)

export const createPost = createAsyncThunk(
  'posts/createPost/fulfilled',
  async (newPost) => {
    return await addNewPost(newPost)
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchAllPosts.fulfilled]: (state, { payload }) => payload,
    [createPost.fulfilled]: (state, { payload }) => [...state, payload],
  },
})

export const allPosts = (state) => state.posts
export default postsSlice.reducer
