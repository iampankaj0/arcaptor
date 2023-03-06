import React from "react";
import "./assets/styles/main.scss";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
