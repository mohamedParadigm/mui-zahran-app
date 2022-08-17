// Externals
import { setCookie, deleteCookie, hasCookie } from "cookies-next";
// Actions
import { addToCart } from "./cartSlice";

const cartMiddleware = (store) => (next) => (action) => {
  if (action.type.match(addToCart)) {
    if (hasCookie("cartItems")) {
      console.log("yes");
    } else {
      // setCookie("cartItems")
    }
  }
  return next(action);
};

export default cartMiddleware;
