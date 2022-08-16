// Externals
import { setCookie, deleteCookie } from "cookies-next";
// Actions
import { updateLocation, clearLocation } from "./locationSlice";
// Data
import data from "../../../utils/data";

const locationMiddleware = (store) => (next) => (action) => {
  if (action.type.match(updateLocation)) {
    setCookie("location", JSON.stringify(action.payload));
    const branch = data.branches.find(el => el.area === action.payload.area);

    setCookie("branch", JSON.stringify(branch));
  }
  if (action.type.match(clearLocation)) {
    deleteCookie("location");
    deleteCookie("branch");
  }
  return next(action);
};

export default locationMiddleware;
