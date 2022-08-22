// Externals
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import locationReducer from "./features/location/locationSlice";
import cartReducer from "./features/cart/cartSlice";
import globalReducer from "./features/global/globalSlice";
import userReducer from "./features/user/userSlice";
import userAddressesReducer from "./features/userAddresses/userAddressesSlice";
// Middlewares
import locationMiddleware from "./features/location/locationMiddleware";

const store = configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
    user: userReducer,
    userAddresses: userAddressesReducer,
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationMiddleware),
});

export default store;
