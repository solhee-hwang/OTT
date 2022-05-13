import "./App.css";
import React from "react";
import Login from "./Pages/Login";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./sytle/Theme";
import SignUp from "./Pages/SignUp";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
};

export default App;
