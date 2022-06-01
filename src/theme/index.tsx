import { ThemeOptions, colors, createTheme } from "@mui/material";

const options: ThemeOptions = {
  palette: {
    primary: {
      main: colors.blue[800],
    },
    secondary: {
      main: colors.red[600],
    },
  },
};

export const theme = createTheme(options);
