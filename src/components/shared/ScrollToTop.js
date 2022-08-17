// Internals
import { useState, useEffect } from "react";
// MUI
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

const ScrollToTop = ({ scrollOffset, children }) => {
  const [windowHeight, setWindowHeight] = useState(100);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: windowHeight,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", left: 16, zIndex: 20, ...scrollOffset }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
