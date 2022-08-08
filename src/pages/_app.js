// Internals
import { useEffect } from "react";
import { useRouter } from "next/router";
// MUI
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Externals
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
// Components
import theme from "../utils/theme";
// Styles
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  useEffect(() => {
    document.querySelector("html").dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  const themeWithDirection = {
    ...theme,
    direction: locale === "en" ? "ltr" : "rtl",
  };

  const cacheRtl = createCache({
    key: locale === "en" ? "muiltr" : "muirtl",
    stylisPlugins: locale === "ar" && [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themeWithDirection}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
