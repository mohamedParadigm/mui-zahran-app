// Externals
import { setCookie, deleteCookie } from "cookies-next";
// Actions
import { updateLocation, clearLocation } from "./locationSlice";

const locationMiddleware = (store) => (next) => (action) => {
  if (action.type.match(updateLocation)) {
    setCookie("location", JSON.stringify(action.payload));
  }
  if (action.type.match(clearLocation)) {
    deleteCookie("location");
  }
  return next(action);
};

export default locationMiddleware;
