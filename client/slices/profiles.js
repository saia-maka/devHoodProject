import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProfiles } from '../apis/profiles'

export const getAllProfiles = createAsyncThunk(
  'fruits/getAllProfiles',
  async () => {
    return await fetchProfiles()
  }
)

const profiles = createSlice({
  name: 'profiles',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAllProfiles.fulfilled]: (state, { payload }) => payload,
  },
})

export const allProfiles = (state) => state.profiles
export default profiles.reducer
