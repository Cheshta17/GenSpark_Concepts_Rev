import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUsers: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.selectedUsers.push(action.payload);
    },
    removeUser: (state, action) => {
      state.selectedUsers = state.selectedUsers.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
