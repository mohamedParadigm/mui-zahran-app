// Externals
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitLoading: false,
  mobileDrawer: false
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleSubmitLoading: (state, action) => {
      state.submitLoading = action.payload;
    },
    toggleMobileDrawer: (state, action) => {
      state.mobileDrawer = action.payload;
    },
  },
});

export const { toggleSubmitLoading , toggleMobileDrawer} = globalSlice.actions;

export default globalSlice.reducer;
