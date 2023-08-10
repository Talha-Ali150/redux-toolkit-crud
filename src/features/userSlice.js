import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", name: "talha", email: "talha@gmail.com" },
  { id: "2", name: "ashar", email: "ashar@gmail.com" },
  { id: "3", name: "ahmed", email: "ahmed@gmail.com" },
  { id: "4", name: "sarmad", email: "sarmad@gmail.com" },
  { id: "5", name: "areeb", email: "areeb@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatedUser = state.find((user) => user.id === id);
      if (updatedUser) {
        updatedUser.name = name;
        updatedUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
