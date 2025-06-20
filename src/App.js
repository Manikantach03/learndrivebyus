import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./router";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
