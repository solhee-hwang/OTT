import React from "react";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Sytles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
