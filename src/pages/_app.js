// Internals
import { useEffect, useState } from "react";
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
import { themeEN, themeAR } from "../utils/theme";
import store from "../redux/store";
import SubmitLoading from "../components/SubmitLoading";
import Loading from "../components/Loading";
// Styles
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    document.querySelector("html").dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  useEffect(() => {
    const handleRouteChangeStart = () => setShowLoading(true);
    const handleRouteChangeEnd = () => setShowLoading(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router]);

  // const updatedTheme = {
  //   ...theme,
  //   direction: locale === "en" ? "ltr" : "rtl",
  // };

  const updatedTheme = locale === "ar" ? themeAR : themeEN;

  const cacheRtl = createCache({
    key: locale === "en" ? "muiltr" : "muirtl",
    stylisPlugins: locale === "ar" && [prefixer, rtlPlugin],
  });

  return (
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={updatedTheme}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer
            autoClose={3000}
            position="top-center"
            rtl={locale === "ar"}
          />
          <Loading open={showLoading} />
          <SubmitLoading />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
