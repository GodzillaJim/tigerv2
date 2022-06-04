import { ThemeOptions, colors, createTheme } from "@mui/material";

const options: ThemeOptions = {
  palette: {
    primary: {
      main: colors.blue[800],
    },
    secondary: {
      main: "#f39c12",
    },
    background: {
      default: "#222",
      paper: "#303030",
    },
    divider: `rgba(0,0,0,1)`,
    text: {
      primary: "#adb5bd",
      secondary: "#fff",
    },
    warning: {
      main: "#f39c12",
      light: "#f39c69",
      dark: "##F25811",
    },
  },
  typography: {
    fontFamily: "Lucida Sans",
  },
};

export const theme = createTheme(options);
