import React, { useState } from "react";
import {
  Car,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
const DrivingSchoolLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const credentials = {
        email: formData.email,
        password: formData.password,
      };

      await login(credentials);
      navigate("/dashboard", { replace: true });
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };
  const features = [
    {
      icon: Shield,
      title: "Safe Learning",
      description: "Professional instructors with safety-first approach",
    },
    {
      icon: Award,
      title: "High Success Rate",
      description: "95% of our students pass on their first attempt",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Certified and experienced driving professionals",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book lessons that fit your busy schedule",
    },
  ];
  return (
    <div
      className="min-vh-100 d-flex"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="col-lg-7 d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5">
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div className="p-3 rounded-circle bg-white bg-opacity-20 me-3">
              <Car size={40} className="text-white" />
            </div>
            <h1 className="display-4 fw-bold mb-0">DriveAcademy</h1>
          </div>
          <p className="lead mb-0">Master the road with confidence</p>
          <p className="fs-5 opacity-75">
            Your journey to becoming a skilled driver starts here
          </p>
        </div>
        <div className="row g-4 w-100" style={{ maxWidth: "600px" }}>
          {features.map((feature, index) => (
            <div key={index} className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="p-2 rounded-circle bg-white bg-opacity-20 me-3 flex-shrink-0">
                  <feature.icon size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="mb-0 opacity-75 small">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="me-4">
              <div className="display-6 fw-bold">10K+</div>
              <small className="opacity-75">Students Trained</small>
            </div>
            <div className="me-4">
              <div className="display-6 fw-bold">95%</div>
              <small className="opacity-75">Success Rate</small>
            </div>
            <div>
              <div className="display-6 fw-bold">50+</div>
              <small className="opacity-75">Expert Instructors</small>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-lg-5 d-flex flex-column justify-content-center p-4 p-lg-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
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
              maxWidth: "400px",
              margin: "0 auto",
              border: "1px solid #ddd",
              borderRadius: "16px",
              backgroundColor: "#ffffff",
            }}
          >
            <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="position-relative">
                  <Mail
                    size={18}
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                  />
                  <input
                    type="email"
                    className="form-control form-control-md ps-5 border-0 shadow-md"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      backgroundColor: "#f8f9fa",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="position-relative">
                  <Lock
                    size={18}
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-md ps-5 pe-5 border-0 shadow-md"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
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
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    style={{ accentColor: "#7450a8" }}
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="rememberMe"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none border-0"
                  style={{ color: "#7450a8" }}
                  onClick={() => navigate("/forgotpassword")}

                >
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="btn btn-sm w-100 text-white fw-semibold d-flex align-items-center justify-content-center mb-2"
                disabled={isLoading}
                style={{
                  backgroundColor: "#7450a8",
                  borderRadius: "12px",
                  border: "none",
                  padding: "8px 12px",
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
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} className="ms-2" />
                  </>
                )}
              </button>
              <div className="text-center mb-2">
                <div className="d-flex align-items-center">
                  <hr className="flex-grow-1" />
                  <span className="px-3 text-muted small">or</span>
                  <hr className="flex-grow-1" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-muted mb-0">
                  Don't have an account?
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none fw-semibold ms-1 border-0"
                    style={{ color: "#7450a8" }}
                    onClick={() => navigate("/register")}
                  >
                    Sign up now
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        .form-control:focus {
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
    </div>
  );
};

export default DrivingSchoolLogin;
