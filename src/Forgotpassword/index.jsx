import React, { useState } from "react";
import {
  Car,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
  Shield,
  Key,
  CheckCircle,
  AlertCircle,
  Send,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import authService from "../Services/authService";

const DrivingSchoolForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await authService.forgotPasswordRequest(email);
      setSuccess("OTP sent to your email successfully!");
      setTimeout(() => {
        setStep(2);
        setSuccess("");
      }, 1500);
    } catch (err) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await authService.resetPasswordWithOtp({ email, otp, newPassword });
      setSuccess("Password reset successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToStep1 = () => {
    setStep(1);
    setError("");
    setSuccess("");
    setOtp("");
    setNewPassword("");
  };

  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Process",
      description: "Your password reset is protected with multi-layer security",
    },
    {
      icon: Key,
      title: "OTP Verification",
      description: "We use one-time passwords to verify your identity",
    },
    {
      icon: Lock,
      title: "Encrypted Data",
      description: "All your information is encrypted and secure",
    },
    {
      icon: CheckCircle,
      title: "Safe & Reliable",
      description: "Trusted by thousands of users worldwide",
    },
  ];

  return (
    <div
      className="min-vh-100 d-flex"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Left Side - Security Features */}
      <div className="col-lg-7 d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5">
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div className="p-3 rounded-circle bg-white bg-opacity-20 me-3">
              <Car size={40} className="text-white" />
            </div>
            <h1 className="display-4 fw-bold mb-0">DriveAcademy</h1>
          </div>
          <p className="lead mb-0">Secure Password Recovery</p>
          <p className="fs-5 opacity-75">
            We'll help you get back to your driving journey safely
          </p>
        </div>

        <div className="row g-4 w-100" style={{ maxWidth: "600px" }}>
          {securityFeatures.map((feature, index) => (
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

        {/* Security Badge */}
        <div className="mt-5 text-center">
          <div className="d-inline-flex align-items-center bg-white bg-opacity-20 rounded-pill px-4 py-2">
            <Shield size={20} className="me-2" />
            <span className="fw-semibold">Bank-level Security</span>
          </div>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div
        className="col-lg-5 d-flex flex-column justify-content-center p-4 p-lg-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
          {/* Mobile Logo */}
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
            {/* Progress Indicator */}
            <div className="d-flex justify-content-center mb-2">
              <div className="d-flex align-items-center">
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
                    step >= 1 ? "text-white" : "text-muted border"
                  }`}
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: step >= 1 ? "#7450a8" : "transparent",
                    borderColor: "#7450a8",
                  }}
                >
                  1
                </div>
                <div
                  className="mx-2"
                  style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: step >= 2 ? "#7450a8" : "#dee2e6",
                  }}
                ></div>
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center ms-3 ${
                    step >= 2 ? "text-white" : "text-muted border"
                  }`}
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: step >= 2 ? "#7450a8" : "transparent",
                    borderColor: "#7450a8",
                  }}
                >
                  2
                </div>
              </div>
            </div>

            {/* Header Text */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-2" style={{ color: "#2c3e50" }}>
                {step === 1 ? "Reset Password" : "Enter Verification Code"}
              </h3>
              <p className="text-muted mb-0">
                {step === 1
                  ? ""
                  : ""}
              </p>
            </div>

            {/* Success/Error Messages */}
            {error && (
              <div
                className="alert alert-danger d-flex align-items-center mb-4"
                role="alert"
              >
                <AlertCircle size={18} className="me-2" />
                {error}
              </div>
            )}
            {success && (
              <div
                className="alert alert-success d-flex align-items-center mb-4"
                role="alert"
              >
                <CheckCircle size={18} className="me-2" />
                {success}
              </div>
            )}

            {/* Step 1: Email Input */}
            {step === 1 && (
              <div>
                <div className="mb-4">
                  <div className="position-relative">
                    <Mail
                      size={18}
                      className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                    />
                    <input
                      type="email"
                      className="form-control form-control-md ps-5 border-0 shadow-sm"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your registered email"
                      required
                      style={{
                        backgroundColor: "#f8f9fa",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleSendOTP}
                  className="btn btn-md w-100 text-white fw-semibold d-flex align-items-center justify-content-center mb-4"
                  disabled={loading || !email}
                  style={{
                    backgroundColor: "#7450a8",
                    borderRadius: "12px",
                    border: "none",
                    padding: "7px",
                    transition: "all 0.3s ease",
                    transform: loading ? "scale(0.98)" : "scale(1)",
                  }}
                >
                  {loading ? (
                    <>
                      <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="me-2" />
                      Send Verification Code
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Step 2: OTP and New Password */}
            {step === 2 && (
              <div>
                {/* Back Button */}
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={handleBackToStep1}
                    className="btn btn-link p-0 text-decoration-none d-flex align-items-center"
                    style={{ color: "#7450a8" }}
                  >
                    <ArrowLeft size={16} className="me-1" />
                    Back to email
                  </button>
                </div>

                <div className="mb-3">
                  <div className="position-relative">
                    <Key
                      size={18}
                      className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                    />
                    <input
                      type="text"
                      className="form-control form-control-md ps-5 border-0 shadow-sm text-center"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter Otp"
                      maxLength="6"
                      required
                      style={{
                        backgroundColor: "#f8f9fa",
                        transition: "all 0.3s ease",
                        letterSpacing: "0.5em",
                      }}
                    />
                  </div>
                  <small className="text-muted mt-1 d-block text-center">
                    Code sent to: {email}
                  </small>
                </div>

                <div className="mb-3">
                  <div className="position-relative">
                    <Lock
                      size={18}
                      className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control form-control-md ps-5 pe-5 border-0 shadow-sm"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter your new password"
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
                  <small className="text-muted mt-2 d-block">
                    Password should be at least 8 characters long
                  </small>
                </div>

                <button
                  type="submit"
                  onClick={handleResetPassword}
                  className="btn btn-md w-100 text-white fw-semibold d-flex align-items-center justify-content-center mb-3"
                  disabled={loading || !otp || !newPassword}
                  style={{
                    backgroundColor: "#28a745",
                    borderRadius: "12px",
                    border: "none",
                    padding: "7px",
                    transition: "all 0.3s ease",
                    transform: loading ? "scale(0.98)" : "scale(1)",
                  }}
                >
                  {loading ? (
                    <>
                      <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Resetting Password...
                    </>
                  ) : (
                    <>
                      <RefreshCw size={18} className="me-2" />
                      Reset Password
                    </>
                  )}
                </button>

                {/* Resend OTP */}
                <div className="text-center mb-2">
                  <p className="text-muted mb-0 small">
                    Didn't receive the code?
                  </p>
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    className="btn btn-link p-0 text-decoration-none small"
                    style={{ color: "#7450a8" }}
                    disabled={loading}
                  >
                    Resend verification code
                  </button>
                </div>
              </div>
            )}

            {/* Back to Login Link */}
            <div className="text-center">
              <p className="text-muted mb-0">
                Remember your password?
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
        input[type="text"]#otp {
          font-family: "Courier New", monospace;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};
export default DrivingSchoolForgotPassword;
