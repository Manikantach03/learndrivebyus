import React, { useState } from 'react';

const AddSchoolScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    licenseNumber: '',
    instructors: '',
    vehicleCount: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('School data:', formData);
    // Here you would typically send the data to your backend
    alert('School added successfully!');
    setShowModal(false);
    setFormData({
      schoolName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: '',
      licenseNumber: '',
      instructors: '',
      vehicleCount: '',
      description: ''
    });
  };

  const handleCancel = () => {
    setShowModal(false);
    setFormData({
      schoolName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: '',
      licenseNumber: '',
      instructors: '',
      vehicleCount: '',
      description: ''
    });
  };

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet" 
      />
      
      <div className="container-fluid min-vh-100 bg-light">
        {/* Header */}
        <div className="row bg-primary-custom text-white py-2 shadow-sm">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">
                <i className="fas fa-car me-2"></i>
                Driving School Management
              </h4>
              <button 
                className="btn btn-light btn-sm"
                onClick={() => setShowModal(true)}
              >
                <i className="fas fa-plus me-1"></i>
                Add School
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row mt-4">
          <div className="col-12">
            {/* Main Dashboard Content */}
            <div className="text-center mt-5">
              <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
                <div className="card-body py-5">
                  <i className="fas fa-school display-1 text-muted mb-4"></i>
                  <h3 className="text-muted mb-3">School Management</h3>
                  <p className="text-muted mb-4">
                    Manage your driving schools from this dashboard. Click "Add School" to register a new driving school.
                  </p>
                  <button 
                    className="btn bg-primary-custom btn-lg"
                    onClick={() => setShowModal(true)}
                  >
                    <i className="fas fa-plus me-2"></i>
                    Add New School
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Modal for Add School */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} 
             style={{ display: showModal ? 'block' : 'none' }} 
             tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header bg-primary-custom text-white">
                <h5 className="modal-title">
                  <i className="fas fa-plus-circle me-2"></i>
                  Add New Driving School
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white " 
                  onClick={handleCancel}
                ></button>
              </div>
              
              {/* Modal Body */}
              <div className="modal-body">
                <div>
                  {/* School Information */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-info-circle me-2"></i>
                        School Information
                      </h6>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="schoolName" className="form-label fw-bold">
                        School Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="schoolName"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleInputChange}
                        placeholder="Enter school name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="licenseNumber" className="form-label fw-bold">
                        License Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="licenseNumber"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        placeholder="Enter license number"
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="description" className="form-label fw-bold">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Brief description of the school"
                      ></textarea>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        Address Information
                      </h6>
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="address" className="form-label fw-bold">
                        Street Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter street address"
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label htmlFor="city" className="form-label fw-bold">
                        City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label htmlFor="state" className="form-label fw-bold">
                        State <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      >
                        <option value="">Select State</option>
                        <option value="AL">Alabama</option>
                        <option value="CA">California</option>
                        <option value="FL">Florida</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <label htmlFor="zipCode" className="form-label fw-bold">
                        ZIP Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Enter ZIP code"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-phone me-2"></i>
                        Contact Information
                      </h6>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="phoneNumber" className="form-label fw-bold">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="school@example.com"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="row mb-3">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-cogs me-2"></i>
                        Additional Information
                      </h6>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="instructors" className="form-label fw-bold">
                        Number of Instructors
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="instructors"
                        name="instructors"
                        value={formData.instructors}
                        onChange={handleInputChange}
                        placeholder="0"
                        min="0"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="vehicleCount" className="form-label fw-bold">
                        Number of Vehicles
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="vehicleCount"
                        name="vehicleCount"
                        value={formData.vehicleCount}
                        onChange={handleInputChange}
                        placeholder="0"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="modal-footer">
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                >
                  <i className="fas fa-times me-1"></i>
                  Cancel
                </button> */}
                <button
                  type="button"
                  className="btn bg-primary-custom"
                  onClick={handleSubmit}
                >
                  <i className="fas fa-save me-1"></i>
                  Add School
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Backdrop */}
        {showModal && <div className="modal-backdrop fade show"></div>}

        <style jsx>{`
          .min-vh-100 {
            min-height: 100vh;
          }
          
          .card {
            border-radius: 10px;
          }
          
          .card-header {
            border-radius: 10px 10px 0 0 !important;
          }
          
          .form-control:focus, .form-select:focus {
            border-color: #0d6efd;
            box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
          }
          
          .btn {
            border-radius: 6px;
          }
          
          .text-danger {
            color: #dc3545 !important;
          }
          
          .border-bottom {
            border-bottom: 2px solid #e9ecef !important;
          }
          
          .shadow-sm {
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
          }
          
          /* Modal Styles */
          .modal {
            z-index: 1050;
          }
          
          .modal-backdrop {
            z-index: 1040;
            background-color: rgba(0, 0, 0, 0.5);
          }
          
          .modal-dialog {
            max-width: 800px;
            margin: 1.75rem auto;
          }
          
          .modal-content {
            border-radius: 10px;
            border: none;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          }
          
          .modal-header {
            border-radius: 10px 10px 0 0;
            border-bottom: 1px solid #dee2e6;
          }
          
          .modal-body {
            max-height: 70vh;
            overflow-y: auto;
          }
          
          .modal-footer {
            border-top: 1px solid #dee2e6;
            border-radius: 0 0 10px 10px;
          }
          
          @media (max-width: 768px) {
            .container-fluid {
              padding-left: 15px;
              padding-right: 15px;
            }
            
            .modal-dialog {
              margin: 0.5rem;
              max-width: calc(100% - 1rem);
            }
            
            .modal-body {
              max-height: 60vh;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default AddSchoolScreen;