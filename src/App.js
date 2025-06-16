import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login-And-Reg/Login/Login";
import RegistrationForm from "./Login-And-Reg/Reg/RegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";
import SchoolDrivingHome from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SchoolDrivingHome />} /> {/* Show dashboard as homepage */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        {/* /* <Route path="/dashboard" element={<SchoolDrivingHome />} />* */}
      </Routes>
    </Router>
  );
}

export default App;
