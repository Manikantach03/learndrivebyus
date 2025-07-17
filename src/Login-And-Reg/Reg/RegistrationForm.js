import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../Services/authService';
function RegistrationForm() {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');

  try {
    await authService.register(formData);
    setSuccess('Registration successful!');
    navigate('/login');
  } catch (err) {
    setError(err.message || 'Something went wrong');
  }
};


  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="text-center mb-3">Register</h3>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} required className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange} required className="form-control" />
            </div>
          </div>

          <div className="mb-2">
            <label className="form-label">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="form-control" />
          </div>

          <div className="mb-2">
            <label className="form-label">Phone Number</label>
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="form-control" />
          </div>

          <div className="mb-2">
            <label className="form-label">Location</label>
            <input name="location" value={formData.location} onChange={handleChange} required className="form-control" />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="form-select">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">Account Type</label>
              <select name="accountType" value={formData.accountType} onChange={handleChange} className="form-select">
                <option>User</option>
                <option>Instructor</option>
              </select>
            </div>
          </div>

          <div className="d-grid">
            <button className="btn btn-success" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
