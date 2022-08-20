// Externals
import { setCookie, deleteCookie } from "cookies-next";
// Actions
import { updateLocation, clearLocation } from "./locationSlice";
// Components
import { cookieExpireDate } from "../../../utils/utils";
// Data
import data from "../../../utils/data";

const locationMiddleware = (store) => (next) => (action) => {
  if (action.type.match(updateLocation)) {
    setCookie("location", JSON.stringify(action.payload), {
      expires: cookieExpireDate(13),
    });
    const branch = data.branches.find((el) => el.area === action.payload.area);

    setCookie("branch", JSON.stringify(branch), {
      expires: cookieExpireDate(13),
    });
  }
  if (action.type.match(clearLocation)) {
    deleteCookie("location");
    deleteCookie("branch");
  }
  return next(action);
};

export default locationMiddleware;
