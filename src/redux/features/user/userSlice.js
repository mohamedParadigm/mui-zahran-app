// Externals
import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return (state = action.payload);
    },
    userLogout: (state) => {
      return (state = null);
    },
  },
});

export const { createUser, userLogout } = userSlice.actions;

export default userSlice.reducer;
