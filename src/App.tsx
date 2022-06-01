import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomeScreen } from "./screens/HomeScreen";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
