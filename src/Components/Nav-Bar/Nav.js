import React from "react";
import "./NavBar.css";
import logo from "../../svg-Images/logo.svg";
import { Link } from "react-router-dom";

const NavBarHead = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center text-white" to="/">
          <img src={logo} alt="Driving School Logo" />
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact Us</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <select className="form-select custom-select">
              <option>Select Location</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Delhi</option>
            </select>

            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-white login-button">
                Login
              </Link>
              <Link to="/register" className="btn btn-white login-button">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarHead;
