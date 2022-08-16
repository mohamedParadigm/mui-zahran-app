// Internals
// import { cloneElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
// MUI
// import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
// Externals
import Marquee from "react-fast-marquee";

// const ControlScroll = ({ children }) => {
//   const [headerHeight, setHeaderHeight] = useState(120);

//   useEffect(() => {
//     const header = document.getElementById("fixedAppBar");

//     if (header) {
//       setHeaderHeight(header.offsetHeight);
//     }
//   }, []);

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return cloneElement(children, {
//     boxShadow: trigger ? 4 : 0,
//     position: trigger ? "fixed" : "static",
//     top: headerHeight,
//     zIndex: 5,
//   });
// };

const CustomMarquee = (props) => {
  const {
    pauseOnHover = true,
    pauseOnClick = true,
    speed = 30,
    children,
    ...other
  } = props;

  const { locale } = useRouter();

  return (
    // <ControlScroll>
      <Box sx={{ backgroundColor: "#f9f8f8" }} py={0.5}>
        <Marquee
          pauseOnHover={pauseOnHover}
          pauseOnClick={pauseOnClick}
          speed={speed}
          direction={locale === "ar" ? "right" : "left"}
          gradient={false}
          {...other}
        >
          {children}
        </Marquee>
      </Box>
    // </ControlScroll>
  );
};

export default CustomMarquee;
