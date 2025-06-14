import React, { useState } from "react";
import { Link } from "react-router-dom";
function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    parentName: "",
    userType: "Student",
    preferredTime: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation could be improved
    setSubmitted(true);
    console.log("Form Submitted:", formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">
              Driving School Registration Form
            </h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Parent/Guardian Name</label>
                  <input
                    type="text"
                    name="parentName"
                    className="form-control"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">User Type</label>
                  <select
                    className="form-select"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                  >
                    <option value="Student">Student</option>
                    <option value="Parent">Parent</option>
                  </select>
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Preferred Training Time</label>
                  <input
                    type="text"
                    name="preferredTime"
                    className="form-control"
                    placeholder="e.g. Weekends, Evenings"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Submit Registration
                </button>
              </div>

              <div className="text-center">
                <small>
                  Already you have account?{" "}
                  <Link to="/register" className="text-decoration-none">
                    Register
                  </Link>
                </small>
              </div>
            </form>

            {submitted && (
              <div className="alert alert-success mt-4" role="alert">
                Thank you! Your registration was successful.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
