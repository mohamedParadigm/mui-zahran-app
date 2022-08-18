// Externals
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import locationReducer from "./features/location/locationSlice";
import cartReducer from "./features/cart/cartSlice";
import globalReducer from "./features/global/globalSlice";
import userReducer from "./features/user/userSlice";
// Middlewares
import locationMiddleware from "./features/location/locationMiddleware";
// import userMiddleware from "./features/user/userMiddleware";

const store = configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
    user: userReducer,
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationMiddleware),
});

export default store;
