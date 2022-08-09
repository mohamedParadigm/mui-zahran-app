// Externals
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import locationReducer from "./features/location/locationSlice";
// Middlewares
import locationMiddleware from "./features/location/locationMiddleware";

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationMiddleware),
});

export default store;
