import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./router";
import { AuthProvider } from "./Context/AuthContext"; // ✅ Import your AuthContext
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
