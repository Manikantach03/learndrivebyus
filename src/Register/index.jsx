import React, { useState } from "react";
import {
  Car,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import authService from "../Services/authService";

const DrivingSchoolRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    location: "",
    gender: "",
    accountType: "",
  });
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError('');
    // setSuccess('');
    setIsLoading(true);

    try {
      await authService.register(formData);
      // setSuccess('Registration successful!');
      navigate("/login");
    } catch (err) {
      // setError(err.message || 'Something went wrong');
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data is protected with industry-standard encryption",
    },
    {
      icon: Award,
      title: "Certified Instructors",
      description: "Learn from the best with our certified professionals",
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Customized lessons tailored to your learning pace",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Book lessons that fit perfectly with your routine",
    },
  ];

  return (
    <div
      className="min-vh-100 d-flex"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Left Side - Benefits */}
      <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5">
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div className="p-3 rounded-circle bg-white bg-opacity-20 me-3">
              <Car size={40} className="text-white" />
            </div>
            <h1 className="display-4 fw-bold mb-0">DriveAcademy</h1>
          </div>
          <p className="lead mb-0">Join thousands of successful drivers</p>
          <p className="fs-5 opacity-75">
            Start your driving journey with confidence
          </p>
        </div>

        <div className="row g-4 w-100" style={{ maxWidth: "600px" }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="p-2 rounded-circle bg-white bg-opacity-20 me-3 flex-shrink-0">
                  <benefit.icon size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">{benefit.title}</h5>
                  <p className="mb-0 opacity-75 small">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="me-4">
              <div className="display-6 fw-bold">10K+</div>
              <small className="opacity-75">Happy Students</small>
            </div>
            <div className="me-4">
              <div className="display-6 fw-bold">95%</div>
              <small className="opacity-75">Pass Rate</small>
            </div>
            <div>
              <div className="display-6 fw-bold">5★</div>
              <small className="opacity-75">Average Rating</small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-6 d-flex flex-column justify-content-center p-4 p-lg-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="w-100" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div className="d-lg-none text-center mb-4">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <Car size={32} style={{ color: "#7450a8" }} className="me-2" />
              <h2 className="fw-bold mb-0" style={{ color: "#7450a8" }}>
                DriveAcademy
              </h2>
            </div>
          </div>
          <div
            className="w-100 shadow-md p-4"
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              border: "1px solid #ddd",
              borderRadius: "16px",
              backgroundColor: "#ffffff",
            }}
          >
            <h2 className="text-2xl font-bold text-center mb-6 mb-3">
              Create Your Account
            </h2>
            <form onSubmit={handleSubmit}>
              {/* First Name & Last Name */}
              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <div className="position-relative">
                    <User
                      size={18}
                      className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                    />
                    <input
                      type="text"
                      className="form-control form-control-md ps-5 border-0 shadow-sm"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#f8f9fa",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <User
                      size={18}
                      className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                    />
                    <input
                      type="text"
                      className="form-control form-control-md ps-5 border-0 shadow-sm"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#f8f9fa",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <div className="position-relative">
                  <Mail
                    size={18}
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                  />
                  <input
                    type="email"
                    className="form-control form-control-md ps-5 border-0 shadow-sm"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "#f8f9fa",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-3">
                <div className="position-relative">
                  <Lock
                    size={18}
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-md ps-5 pe-5 border-0 shadow-sm"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "#f8f9fa",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-link position-absolute top-50 translate-middle-y end-0 me-2 p-0 border-0"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ color: "#7450a8" }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Phone & Location */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="position-relative">
                    <Phone
                      size={18}
                      className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                    />
                    <input
                      type="tel"
                      className="form-control form-control-md ps-5 border-0 shadow-sm"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#f8f9fa",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <MapPin
                      size={18}
                      className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                    />
                    <input
                      type="text"
                      className="form-control form-control-md ps-5 border-0 shadow-sm"
                      id="location"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#f8f9fa",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Gender & Account Type */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <select
                    className="form-select form-select-md border-0 shadow-sm"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "#f8f9fa",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select form-select-md border-0 shadow-sm"
                    id="accountType"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "#f8f9fa",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <option value="" disabled>
                      Select Account Type
                    </option>
                    <option value="User">Student</option>
                    <option value="Instructor">Instructor</option>
                  </select>
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-md w-100 text-white fw-semibold d-flex align-items-center justify-content-center mb-2"
                disabled={isLoading}
                style={{
                  backgroundColor: "#7450a8",
                  borderRadius: "12px",
                  border: "none",
                  padding: "8px",
                  transition: "all 0.3s ease",
                  transform: isLoading ? "scale(0.98)" : "scale(1)",
                }}
              >
                {isLoading ? (
                  <>
                    <div
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={18} className="ms-2" />
                  </>
                )}
              </button>
              <div className="form-check mb-3 text-start">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree || false}
                  onChange={(e) =>
                    setFormData({ ...formData, agree: e.target.checked })
                  }
                />
                <label className="form-check-label" htmlFor="agree">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none border-0"
                    style={{ color: "#7450a8", fontSize: "inherit" }}
                    data-bs-toggle="modal"
                    data-bs-target="#termsModal"
                  >
                    Terms
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none border-0"
                    style={{ color: "#7450a8", fontSize: "inherit" }}
                    data-bs-toggle="modal"
                    data-bs-target="#privacyModal"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              {/* Redirect to Sign In */}
              <div className="text-center">
                <p className="text-muted mb-0">
                  Already have an account?
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none fw-semibold ms-1 border-0"
                    style={{ color: "#7450a8" }}
                    onClick={() => navigate("/login")}
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Terms Modal */}
      <div className="modal fade" id="termsModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Terms of Service</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Here are the Terms of Service details...</p>
            </div>
            <div className="modal-footer justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      <div className="modal fade" id="privacyModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Privacy Policy</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>This is the Privacy Policy content...</p>
            </div>
            <div className="modal-footer justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        .form-control:focus,
        .form-select:focus {
          border-color: #7450a8;
          box-shadow: 0 0 0 0.2rem rgba(116, 80, 168, 0.25);
          background-color: #fff;
        }
        .btn:hover {
          transform: translateY(-1px);
        }
        .btn:active {
          transform: translateY(0);
        }
        @media (max-width: 991.98px) {
          .min-vh-100 {
            background: linear-gradient(
              135deg,
              #667eea 0%,
              #764ba2 50%,
              #f8f9fa 50%,
              #f8f9fa 100%
            );
          }
        }
        .bg-opacity-20 {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>
      <style>
        {`
      .custom-placeholder::placeholder {
        font-size: 0.85rem;
        font-weight: 400;
        color: lightgray;
      }
    `}
      </style>
    </div>
  );
};

export default DrivingSchoolRegistration;
