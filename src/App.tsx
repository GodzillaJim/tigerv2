import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { HomeScreen } from "./screens/HomeScreen";
import React from "react";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
