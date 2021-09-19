import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsPerPage: 20,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    getNextPage: (state) => {
      state.currentPage <= 5
        ? (state.currentPage += 1)
        : (state.currentPage = 6);
    },
    getPrevPage: (state) => {
      state.currentPage > 1
        ? (state.currentPage -= 1)
        : (state.currentPage = 1);
    },
    getToPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setItemsPerPage, getNextPage, getPrevPage, getToPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
