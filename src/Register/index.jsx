import React, { useState } from 'react';
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
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';

const DrivingSchoolRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    location: '',
    gender: 'Female',
    accountType: 'User',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setIsLoading(true);

  try {
    await authService.register(formData);
    setSuccess('Registration successful!');
    navigate('/login');
  } catch (err) {
    setError(err.message || 'Something went wrong');
    setIsLoading(false);

  }
};

  const benefits = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data is protected with industry-standard encryption"
    },
    {
      icon: Award,
      title: "Certified Instructors",
      description: "Learn from the best with our certified professionals"
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Customized lessons tailored to your learning pace"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Book lessons that fit perfectly with your routine"
    }
  ];

  return (
    <div className="min-vh-100 d-flex" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
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
          <p className="fs-5 opacity-75">Start your driving journey with confidence</p>
        </div>
        
        <div className="row g-4 w-100" style={{ maxWidth: '600px' }}>
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
      <div className="col-lg-6 d-flex flex-column justify-content-center p-4 p-lg-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="w-100" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="d-lg-none text-center mb-4">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <Car size={32} style={{ color: '#7450a8' }} className="me-2" />
              <h2 className="fw-bold mb-0" style={{ color: '#7450a8' }}>DriveAcademy</h2>
            </div>
          </div>
          <div className="text-center mb-4">
            <h3 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Create Your Account</h3>
            <p className="text-muted mb-0">Join our community and start your driving journey</p>
          </div>
          {error && (
            <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
              <AlertCircle size={18} className="me-2" />
              {error}
            </div>
          )}
          {success && (
            <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
              <CheckCircle size={18} className="me-2" />
              {success}
            </div>
          )}
          <div>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                  First Name
                </label>
                <div className="position-relative">
                  <User 
                    size={18} 
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted" 
                  />
                  <input
                    type="text"
                    className="form-control form-control-lg ps-5 border-0 shadow-sm"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                  Last Name
                </label>
                <div className="position-relative">
                  <User 
                    size={18} 
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted" 
                  />
                  <input
                    type="text"
                    className="form-control form-control-lg ps-5 border-0 shadow-sm"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                Email Address
              </label>
              <div className="position-relative">
                <Mail 
                  size={18} 
                  className="position-absolute top-50 translate-middle-y ms-3 text-muted" 
                />
                <input
                  type="email"
                  className="form-control form-control-lg ps-5 border-0 shadow-sm"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                Password
              </label>
              <div className="position-relative">
                <Lock 
                  size={18} 
                  className="position-absolute top-50 translate-middle-y ms-3 text-muted" 
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control form-control-lg ps-5 pe-5 border-0 shadow-sm"
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                />
                <button
                  type="button"
                  className="btn btn-link position-absolute top-50 translate-middle-y end-0 me-2 p-0 border-0"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ color: '#7450a8' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                  Phone Number
                </label>
                <div className="position-relative">
                  <Phone 
                    size={18} 
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted" 
                  />
                  <input
                    type="tel"
                    className="form-control form-control-lg ps-5 border-0 shadow-sm"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="location" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                  Location
                </label>
                <div className="position-relative">
                  <MapPin 
                    size={18} 
                    className="position-absolute top-50 translate-middle-y ms-3 text-muted" 
                  />
                  <input
                    type="text"
                    className="form-control form-control-lg ps-5 border-0 shadow-sm"
                    id="location"
                    name="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    style={{ 
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="gender" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                  Gender
                </label>
                <select
                  className="form-select form-select-lg border-0 shadow-sm"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="accountType" className="form-label fw-semibold" style={{ color: '#2c3e50' }}>
                  Account Type
                </label>
                <select
                  className="form-select form-select-lg border-0 shadow-sm"
                  id="accountType"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <option value="User">Student</option>
                  <option value="Instructor">Instructor</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-lg w-100 text-white fw-semibold d-flex align-items-center justify-content-center mb-4"
              disabled={isLoading}
              onClick={handleSubmit}
              style={{ 
                backgroundColor: '#7450a8',
                borderRadius: '12px',
                border: 'none',
                padding: '12px',
                transition: 'all 0.3s ease',
                transform: isLoading ? 'scale(0.98)' : 'scale(1)'
              }}
            >
              {isLoading ? (
                <>
                  <div className="spinner-border spinner-border-sm me-2" role="status">
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
            <div className="text-center mb-4">
              <small className="text-muted">
                By creating an account, you agree to our{' '}
                <button 
                  type="button"
                  className="btn btn-link p-0 text-decoration-none border-0" 
                  style={{ color: '#7450a8', fontSize: 'inherit' }}
                  onClick={() => console.log('Terms clicked')}
                >
                  Terms of Service
                </button>
                {' '}and{' '}
                <button 
                  type="button"
                  className="btn btn-link p-0 text-decoration-none border-0" 
                  style={{ color: '#7450a8', fontSize: 'inherit' }}
                  onClick={() => console.log('Privacy clicked')}
                >
                  Privacy Policy
                </button>
              </small>
            </div>
            <div className="text-center">
              <p className="text-muted mb-0">
                Already have an account? 
                <button 
                  type="button"
                  className="btn btn-link p-0 text-decoration-none fw-semibold ms-1 border-0" 
                  style={{ color: '#7450a8' }}
                  onClick={() => navigate('/login')}
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
        .form-control:focus, .form-select:focus {
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f8f9fa 50%, #f8f9fa 100%);
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

export default DrivingSchoolRegistration;