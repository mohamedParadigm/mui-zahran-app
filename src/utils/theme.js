// MUI
import { createTheme } from "@mui/material/styles";

const en_font = "'Josefin Sans', sans-serif";
const ar_font = "'Tajawal', sans-serif";

// const theme = createTheme({
//   shape: {
//     borderRadius: 5,
//   },
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#ce1717",
//     },
//     secondary: {
//       main: "#212529",
//     },
//     alt: {
//       main: "#707070",
//     },
//   },
//   typography: {
//     h1: {
//       textTransform: "capitalize",
//     },
//     h2: {
//       textTransform: "capitalize",
//     },
//     h3: {
//       textTransform: "capitalize",
//     },
//     h4: {
//       fontSize: "1.5rem",
//       fontWeight: "700",
//       textTransform: "capitalize",
//     },
//     h5: {
//       fontSize: "1.25rem",
//       fontWeight: "700",
//       textTransform: "capitalize",
//       marginBottom: "0.5rem",
//     },
//     h6: {
//       fontSize: "1rem",
//       fontWeight: "600",
//       textTransform: "capitalize",
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: "capitalize",
//           height: "40px",
//           transition: "0.3s ease-in-out",
//         },
//       },
//     },
//     MuiDrawer: {
//       styleOverrides: {
//         paper: {
//           width: 400,
//           maxWidth: "100%",
//         },
//       },
//     },
//   },
// });

// export default theme;

export const themeEN = createTheme({
  direction: "ltr",
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
    alt: {
      main: "#707070",
    },
  },
  typography: {
    fontFamily: en_font,
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
      fontWeight: "700",
      textTransform: "capitalize",
      marginBottom: "0.5rem",
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
          height: "40px",
          transition: "0.3s ease-in-out",
          fontFamily: en_font,
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
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: en_font,
      },
    },
  },
});
export const themeAR = createTheme({
  direction: "rtl",
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
    alt: {
      main: "#707070",
    },
  },
  typography: {
    fontFamily: ar_font,
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
      fontWeight: "700",
      textTransform: "capitalize",
      marginBottom: "0.5rem",
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
          height: "40px",
          transition: "0.3s ease-in-out",
          fontFamily: ar_font,
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
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: ar_font,
      },
    },
  },
});
