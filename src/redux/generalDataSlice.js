import { createSlice } from "@reduxjs/toolkit";

const generalDataSlice = createSlice({
  name: "generalDataSlice",
  initialState: {
    categories: [],
    allDatas: [],
    cates: "/",
    searched: [],
    empty: "",
  },
  reducers: {
    category: (state, action) => {
      state.categories = action.payload;
    },
    allData: (state, action) => {
      state.allDatas = action.payload;
    },
    cate: (state, action) => {
      state.cates = action.payload;
    },
    setSearch: (state, action) => {
      state.searched = action.payload;
    },
    setEmpty: (state, action) => {
      state.empty = action.payload;
    },
  },
});

export const { category, allData, cate, setSearch } = generalDataSlice.actions;
export default generalDataSlice.reducer;
