import { createSlice } from "@reduxjs/toolkit";

const generalDataSlice = createSlice({
  name: 'generalDataSlice',
  initialState: {
    users: []
  },
  reducers: {
    category: (state, action) => {
      state.users = action.payload
    },
    allPosts: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { category, allPosts } = generalDataSlice.actions
export default generalDataSlice.reducer