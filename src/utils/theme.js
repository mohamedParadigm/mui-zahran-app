// MUI
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    borderRadius: 5,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ce1717",
    },
    secondary: {
      main: "#212529",
    },
  },
  typography: {
    h1: {
      textTransform: "capitalize",
    },
    h2: {
      textTransform: "capitalize",
    },
    h3: {
      textTransform: "capitalize",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "700",
      textTransform: "capitalize",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "600",
      textTransform: "capitalize",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "600",
      textTransform: "capitalize",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 400,
          maxWidth: "100%",
        },
      },
    },
  },
});

export default theme;
