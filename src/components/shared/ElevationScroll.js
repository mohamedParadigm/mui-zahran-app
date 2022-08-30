// Internals
import { cloneElement } from "react";
// MUI
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const ElevationScroll = ({ children }) => {

  const trigger = useScrollTrigger();
  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 0,
  // });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {cloneElement(children, {
        position: "sticky",
      })}
    </Slide>
  );
  // return cloneElement(children, {
  //   elevation: trigger ? 4 : 0,
  //   position: trigger ? "fixed" : "static",
  // });
};

export default ElevationScroll;
