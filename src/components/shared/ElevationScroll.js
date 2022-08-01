// Internals
import { cloneElement } from "react";
// MUI
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    position: trigger ? "fixed" : "static",
  });
};

export default ElevationScroll;
