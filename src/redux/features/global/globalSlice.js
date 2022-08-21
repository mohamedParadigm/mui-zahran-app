// Externals
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleSubmitLoading: (state, action) => {
      state.submitLoading = action.payload;
    },
  },
});

export const { toggleSubmitLoading } = globalSlice.actions;

export default globalSlice.reducer;
