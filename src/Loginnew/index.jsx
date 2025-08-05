import React, { useState } from 'react';
import { 
  Car, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight,
  Shield,
  Award,
  Users,
  Clock
} from 'lucide-react';
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 
const DrivingSchoolLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    navigate('/dashboard', { replace: true });
  } catch (err) {
  } finally {
    setIsLoading(false);
  }
};
  const features = [
    {
      icon: Shield,
      title: "Safe Learning",
      description: "Professional instructors with safety-first approach"
    },
    {
      icon: Award,
      title: "High Success Rate",
      description: "95% of our students pass on their first attempt"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Certified and experienced driving professionals"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book lessons that fit your busy schedule"
    }
  ];
  return (
    <div className="min-vh-100 d-flex" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="col-lg-7 d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5">
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div className="p-3 rounded-circle bg-white bg-opacity-20 me-3">
              <Car size={40} className="text-white" />
            </div>
            <h1 className="display-4 fw-bold mb-0">DriveAcademy</h1>
          </div>
          <p className="lead mb-0">Master the road with confidence</p>
          <p className="fs-5 opacity-75">Your journey to becoming a skilled driver starts here</p>
        </div>
        <div className="row g-4 w-100" style={{ maxWidth: '600px' }}>
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

      <div className="col-lg-5 d-flex flex-column justify-content-center p-4 p-lg-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="w-100" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="d-lg-none text-center mb-4">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <Car size={32} style={{ color: '#7450a8' }} className="me-2" />
              <h2 className="fw-bold mb-0" style={{ color: '#7450a8' }}>DriveAcademy</h2>
            </div>
          </div>
          <div className="text-center mb-4">
            <h3 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Welcome Back!</h3>
            <p className="text-muted mb-0">Sign in to continue your driving journey</p>
          </div>
          <div className="d-flex mb-4 p-1 rounded-pill" style={{ backgroundColor: '#f8f9fa' }}>
            <button
              className={`btn flex-fill rounded-pill transition-all ${
                userType === 'student' 
                  ? 'text-white shadow-sm' 
                  : 'text-muted bg-transparent border-0'
              }`}
              style={userType === 'student' ? { backgroundColor: '#7450a8' } : {}}
              onClick={() => setUserType('student')}
            >
              <User size={16} className="me-2" />
              Student
            </button>
            <button
              className={`btn flex-fill rounded-pill transition-all ${
                userType === 'instructor' 
                  ? 'text-white shadow-sm' 
                  : 'text-muted bg-transparent border-0'
              }`}
              style={userType === 'instructor' ? { backgroundColor: '#7450a8' } : {}}
              onClick={() => setUserType('instructor')}
            >
              <Award size={16} className="me-2" />
              Instructor
            </button>
          </div>
<form onSubmit={handleSubmit}>
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
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
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
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  style={{ accentColor: '#7450a8' }}
                />
                <label className="form-check-label text-muted" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <button 
                type="button"
                className="btn btn-link p-0 text-decoration-none border-0" 
                style={{ color: '#7450a8' }}
                onClick={() => console.log('Forgot password clicked')}
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-lg w-100 text-white fw-semibold d-flex align-items-center justify-content-center mb-4"
              disabled={isLoading}
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
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} className="ms-2" />
                </>
              )}
            </button>
            <div className="text-center mb-4">
              <div className="d-flex align-items-center">
                <hr className="flex-grow-1" />
                <span className="px-3 text-muted small">or</span>
                <hr className="flex-grow-1" />
              </div>
            </div>
            <div className="d-grid gap-2 mb-4">
              <button
                type="button"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                style={{ borderRadius: '12px', padding: '10px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="me-2">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>
            <div className="text-center">
              <p className="text-muted mb-0">
                Don't have an account? 
                <button 
                  type="button"
                  className="btn btn-link p-0 text-decoration-none fw-semibold ms-1 border-0" 
                  style={{ color: '#7450a8' }}
                  onClick={() => console.log('Sign up clicked')}
                >
                  Sign up now
                </button>
              </p>
            </div>
          </form>
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

export default DrivingSchoolLogin;