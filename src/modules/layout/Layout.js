// Internals
import Head from "next/head";
// MUI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
// Icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// Components
import Header from "./header/Header";
import ScrollToTop from "../../components/shared/ScrollToTop";
import Footer from "./footer/Footer";
import BottomNavigation from "./BottomNavigation";

const Layout = (props) => {
  const {
    layoutType = "main",
    scrollToTopOption = true,
    elevationOption = true,
    title,
    description,
    children,
    scrollOffset = 16,
    footerOtherStyle,
    showBottomNav = true,
    BottomNavigationValue = null,
  } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <title>{title ? `${title} | Zahran Market` : "Zahran Market"}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <div id="back-to-top-anchor"></div>
      <Stack minHeight="100vh">
        <Header layoutType={layoutType} elevationOption={elevationOption} />
        <Box flexGrow={1}>{children}</Box>
        <Footer layoutType={layoutType} otherStyle={footerOtherStyle} />

        {scrollToTopOption && (
          <ScrollToTop {...props} scrollOffset={scrollOffset}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollToTop>
        )}

        {showBottomNav && matches && (
          <BottomNavigation BottomNavigationValue={BottomNavigationValue} />
        )}
      </Stack>
    </>
  );
};

export default Layout;
