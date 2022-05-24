import { Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import SignUp from "./Pages/SignUp";

const CopyRight = () => {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      fsoftwareengineer, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />}></Route>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
