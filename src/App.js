import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./router";
import { AuthProvider } from "./Context/AuthContext";
import "./App.css";
import CustomToast from "./CustomToast/CustomToast";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
        <CustomToast />
      </Router>
    </AuthProvider>
  );
}

export default App;
