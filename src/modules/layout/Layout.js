// Internals
import Head from "next/head";
// MUI
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
// Icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// Components
import Header from "./header/Header";
import ScrollToTop from "../../components/shared/ScrollToTop";
import Footer from "./Footer";

const Layout = (props) => {
  const {
    layoutType = "main",
    scrollToTopOption = true,
    elevationOption = true,
    title,
    description,
    children,
  } = props;

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
        <Footer layoutType={layoutType} />

        {scrollToTopOption && (
          <ScrollToTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollToTop>
        )}
      </Stack>
    </>
  );
};

export default Layout;
