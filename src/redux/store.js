// Externals
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import locationReducer from "./features/location/locationSlice";
import cartReducer from "./features/cart/cartSlice"
// Middlewares
import locationMiddleware from "./features/location/locationMiddleware";

const store = configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationMiddleware)
});

export default store;
