import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaIdCard } from 'react-icons/fa'; // for input icon
import NavBarHead from './Nav-Bar/Nav';
import HeroBanner from './Home-Pages/HeroBanner';

function SchoolDrivingHome() {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a pick-up location or student ID');
      return;
    }
    // Implement search logic here (e.g. API call or navigation)
    alert(`Searching for: ${inputValue}`);
  };

  return (
    <>
      {/* Header */}
    <NavBarHead/>
    <HeroBanner/>
      {/* Hero Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">
              Safe & Reliable School Driving — Your Child’s Journey Starts Here
            </h1>
            <p className="lead">Enter your pick-up location or student ID to get started.</p>

            <InputGroup className="mb-2">
              <InputGroup.Text>
                {/* Show icon based on input hint, you can switch icons dynamically if you want */}
                <FaMapMarkerAlt />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Pick-Up Location or Student ID"
                aria-label="Pick-Up Location or Student ID"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                style={{ borderRadius: '50px' }}
              />
            </InputGroup>

            <Button
              variant="primary"
              size="lg"
              onClick={handleSearch}
              style={{ borderRadius: '50px', minWidth: '150px' }}
            >
              Get Schedule
            </Button>

            <p className="text-muted mt-3" style={{ fontSize: '0.9rem' }}>
              We’ll find your child’s driving schedule and route.
            </p>
          </Col>

          <Col md={6} className="text-center">
            {/* Placeholder for illustration or map */}
            <img
              src="/school-bus-illustration.png" // Replace with your image path
              alt="School Bus Illustration"
              className="img-fluid"
              style={{ maxHeight: '300px' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-light text-center text-md-start py-4 mt-auto shadow-sm">
        <Container>
          <Row>
            <Col md={6} className="mb-3 mb-md-0">
              <h6>Contact Us</h6>
              <p className="mb-1">School Driving Services</p>
              <p className="mb-1">1234 School St, Your City</p>
              <p>Email: info@schooldriving.com | Phone: (123) 456-7890</p>
            </Col>
            <Col md={6} className="d-flex justify-content-md-end align-items-center gap-3">
              <a href="#" className="text-decoration-none text-secondary">
                Privacy Policy
              </a>
              <a href="#" className="text-decoration-none text-secondary">
                Terms of Service
              </a>
              {/* Add social icons if needed */}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default SchoolDrivingHome;
