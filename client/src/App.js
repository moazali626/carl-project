import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/confirmation" element={<ConfirmationPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/" element={<RegisterPage />} />
        <Route exact path="/*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
