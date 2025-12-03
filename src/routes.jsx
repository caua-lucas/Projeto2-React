import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Users from "./Containers/Users";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/usuarios" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
