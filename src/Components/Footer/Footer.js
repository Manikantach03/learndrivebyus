// src/Components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              We are a trusted driving school committed to making you a confident and responsible driver. Learn with certified instructors.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/dashboard">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: support@drivingschool.com</li>
              <li>Phone: +91 8106651649</li>
              <li>Address: 123 Main Road, Hyderabad, India</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
