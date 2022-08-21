// Externals
import { setCookie, deleteCookie } from "cookies-next";
// Actions
import { createUser, userLogout } from "./userSlice";

const userMiddleware = (store) => (next) => (action) => {
  if (action.type.match(createUser)) {
    setCookie("user", JSON.stringify(action.payload));
  }
  if (action.type.match(userLogout)) {
    deleteCookie("user");
  }
  return next(action);
};

export default userMiddleware;
