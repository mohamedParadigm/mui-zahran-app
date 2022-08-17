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
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import theme from "../utils/theme";
import store from "../redux/store";
import SubmitLoading from "../components/SubmitLoading";
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
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={themeWithDirection}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer
            autoClose={3000}
            position="top-center"
            rtl={locale === "ar"}
          />
          <SubmitLoading />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
