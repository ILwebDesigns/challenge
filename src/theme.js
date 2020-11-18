import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            "linear-gradient(0deg, #1d1c3a 0%, #3f3a85 100%)",
          margin: 0,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiButton: {
      text: {
        color: "white",
      },
    },
  },
  palette: {
    primary: {
      main: "#352d69",
      contrastText: "#fff",
    },
    secondary: {
      main: "#4A3C90",
      contrastText: "#fff",
    },
    text:{
      primary: '#000',
      secondary: '#808080'
    },
    contrastThreshold: 3,
  },
  // Enable typography v2: https://material-ui.com/style/typography/#migration-to-typography-v2
  typography: {
    useNextVariants: true,
  },
  flexColumnCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default theme;
