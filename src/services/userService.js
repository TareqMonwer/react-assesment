import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomUsers: [],
};

export const randomUsersSlice = createSlice({
  name: "randomUsers",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.randomUsers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadUsers } = randomUsersSlice.actions;

export default randomUsersSlice.reducer;
