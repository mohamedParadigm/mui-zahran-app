// Externals
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "",
  city: "",
  area: "",
  detailedAddress: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation: (state, action) => (state = action.payload),
    clearLocation: (state) => (state = initialState),
  },
});

export const { updateLocation, clearLocation } = locationSlice.actions;

export default locationSlice.reducer;
