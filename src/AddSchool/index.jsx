import React, { useState } from "react";
import authService from "../Services/authService";
const AddSchoolScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolAddress: "",
    contactNumber: "",
    typeOfDriving: [],
    forWhom: [],
    slotTimings: [],
    timetable: {
      numberOfDays: 5,
      days: [
        { day: "Monday", timing: "10:00 AM - 5:00 PM" },
        { day: "Tuesday", timing: "10:00 AM - 5:00 PM" },
        { day: "Wednesday", timing: "10:00 AM - 5:00 PM" },
        { day: "Thursday", timing: "10:00 AM - 5:00 PM" },
        { day: "Friday", timing: "10:00 AM - 5:00 PM" },
      ],
    },
    isActive: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate required fields
      if (
        !formData.schoolName ||
        !formData.schoolAddress ||
        !formData.contactNumber
      ) {
        alert(
          "Please fill in all required fields (School Name, Address, and Contact Number)"
        );
        return;
      }

      // Additional validation
      if (formData.typeOfDriving.length === 0) {
        alert("Please select at least one type of driving");
        return;
      }

      if (formData.forWhom.length === 0) {
        alert('Please select at least one category for "For Whom"');
        return;
      }

      if (formData.slotTimings.length === 0) {
        alert("Please select at least one slot timing");
        return;
      }
      const response = await authService.addschool(formData);
      alert(response.message || "School added successfully!");
      setShowModal(false);
      setFormData({
        schoolName: "",
        schoolAddress: "",
        contactNumber: "",
        typeOfDriving: [],
        forWhom: [],
        slotTimings: [],
        timetable: {
          numberOfDays: 5,
          days: [
            { day: "Monday", timing: "10:00 AM - 5:00 PM" },
            { day: "Tuesday", timing: "10:00 AM - 5:00 PM" },
            { day: "Wednesday", timing: "10:00 AM - 5:00 PM" },
            { day: "Thursday", timing: "10:00 AM - 5:00 PM" },
            { day: "Friday", timing: "10:00 AM - 5:00 PM" },
          ],
        },
        isActive: true,
      });
    } catch (error) {
      console.error("Error adding school:", error);
      alert(error.message || "Failed to add school. Please try again.");
    }
  };
  const handleCancel = () => {
    setShowModal(false);
    setFormData({
      schoolName: "",
      schoolAddress: "",
      contactNumber: "",
      typeOfDriving: [],
      forWhom: [],
      slotTimings: [],
      timetable: {
        numberOfDays: 5,
        days: [
          { day: "Monday", timing: "10:00 AM - 5:00 PM" },
          { day: "Tuesday", timing: "10:00 AM - 5:00 PM" },
          { day: "Wednesday", timing: "10:00 AM - 5:00 PM" },
          { day: "Thursday", timing: "10:00 AM - 5:00 PM" },
          { day: "Friday", timing: "10:00 AM - 5:00 PM" },
        ],
      },
      isActive: true,
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
        <div className="row bg-primary-custom text-white py-2 shadow-md">
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
            <div className="text-center mt-5">
              <div
                className="card border-0 shadow-sm mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <div className="card-body py-5">
                  <i className="fas fa-school display-1 text-muted mb-4"></i>
                  <h3 className="text-muted mb-3">School Management</h3>
                  <p className="text-muted mb-4">
                    Manage your driving schools from this dashboard. Click "Add
                    School" to register a new driving school.
                  </p>
                  <button
                    className="btn bg-primary-custom btn-md"
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
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
        >
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
                  className="btn-close btn-close-white"
                  onClick={handleCancel}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <div>
                  {/* Basic School Information */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-info-circle me-2"></i>
                        Basic Information
                      </h6>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="schoolName"
                        className="form-label fw-bold"
                      >
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
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="contactNumber"
                        className="form-label fw-bold"
                      >
                        Contact Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Enter contact number"
                        required
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label
                        htmlFor="schoolAddress"
                        className="form-label fw-bold"
                      >
                        School Address <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="schoolAddress"
                        name="schoolAddress"
                        rows="2"
                        value={formData.schoolAddress}
                        onChange={handleInputChange}
                        placeholder="Enter complete school address"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">
                        <input
                          type="checkbox"
                          name="isActive"
                          checked={formData.isActive}
                          onChange={handleInputChange}
                          className="form-check-input me-2"
                        />
                        School is Active
                      </label>
                    </div>
                  </div>

                  {/* Type of Driving */}

                  <div className="row mb-4">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-car me-2"></i>
                        Type of Driving
                      </h6>
                    </div>

                    <div className="col-12">
                      <div className="row">
                        {["Car", "Bike", "Truck", "Bus"].map((type) => (
                          <div key={type} className="col-md-3 col-6 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="typeOfDriving"
                                value={type}
                                checked={formData.typeOfDriving.includes(type)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      typeOfDriving: [
                                        ...prev.typeOfDriving,
                                        type,
                                      ],
                                    }));
                                  } else {
                                    setFormData((prev) => ({
                                      ...prev,
                                      typeOfDriving: prev.typeOfDriving.filter(
                                        (t) => t !== type
                                      ),
                                    }));
                                  }
                                }}
                                id={`driving-${type}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`driving-${type}`}
                              >
                                {type}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* For Whom */}

                  <div className="row mb-4">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-users me-2"></i>
                        For Whom
                      </h6>
                    </div>

                    <div className="col-12">
                      <div className="row">
                        {[
                          "Beginners",
                          "Women",
                          "Students",
                          "Professionals",
                          "Seniors",
                        ].map((category) => (
                          <div key={category} className="col-md-3 col-6 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="forWhom"
                                value={category}
                                checked={formData.forWhom.includes(category)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      forWhom: [...prev.forWhom, category],
                                    }));
                                  } else {
                                    setFormData((prev) => ({
                                      ...prev,
                                      forWhom: prev.forWhom.filter(
                                        (c) => c !== category
                                      ),
                                    }));
                                  }
                                }}
                                id={`forWhom-${category}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`forWhom-${category}`}
                              >
                                {category}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-clock me-2"></i>
                        Available Slot Timings
                      </h6>
                    </div>

                    <div className="col-12">
                      <div className="row">
                        {[
                          "9AM-11AM",
                          "11AM-1PM",
                          "1PM-3PM",
                          "2PM-4PM",
                          "4PM-6PM",
                          "6PM-8PM",
                        ].map((slot) => (
                          <div key={slot} className="col-md-4 col-6 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="slotTimings"
                                value={slot}
                                checked={formData.slotTimings.includes(slot)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      slotTimings: [...prev.slotTimings, slot],
                                    }));
                                  } else {
                                    setFormData((prev) => ({
                                      ...prev,
                                      slotTimings: prev.slotTimings.filter(
                                        (s) => s !== slot
                                      ),
                                    }));
                                  }
                                }}
                                id={`slot-${slot}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`slot-${slot}`}
                              >
                                {slot}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timetable */}
                  <div className="row mb-3">
                    <div className="col-12">
                      <h6 className="text-primary border-bottom pb-2 mb-3">
                        <i className="fas fa-calendar-alt me-2"></i>
                        Weekly Timetable
                      </h6>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="numberOfDays"
                        className="form-label fw-bold"
                      >
                        Number of Working Days
                      </label>
                      <select
                        className="form-select"
                        id="numberOfDays"
                        name="numberOfDays"
                        value={formData.timetable.numberOfDays}
                        onChange={handleInputChange}
                      >
                        <option value="1">1 Day</option>
                        <option value="2">2 Days</option>
                        <option value="3">3 Days</option>
                        <option value="4">4 Days</option>
                        <option value="5">5 Days</option>
                        <option value="6">6 Days</option>
                        <option value="7">7 Days</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <div className="row">
                        {formData.timetable.days.map((dayData, index) => (
                          <div key={dayData.day} className="col-md-6 mb-3">
                            <label className="form-label fw-bold">
                              {dayData.day}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name={`dayTiming-${index}`}
                              value={dayData.timing}
                              onChange={handleInputChange}
                              placeholder="e.g., 10:00 AM - 5:00 PM"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="row mb-3">
  <div className="col-12">
    <h6 className="text-primary border-bottom pb-2 mb-3">
      <i className="fas fa-calendar-alt me-2"></i>
      Weekly Timetable
    </h6>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="numberOfDays" className="form-label fw-bold">
      Number of Working Days
    </label>
    <select
      className="form-select"
      id="numberOfDays"
      name="numberOfDays"
      value={formData.timetable.numberOfDays}
      onChange={(e) => {
        const number = parseInt(e.target.value, 10);
        setFormData((prev) => ({
          ...prev,
          timetable: {
            ...prev.timetable,
            numberOfDays: number,
            days: Array(number).fill().map((_, i) => ({
              day: "",
              timing: "",
            })),
          },
        }));
      }}
    >
      <option value="1">1 Day</option>
      <option value="2">2 Days</option>
      <option value="3">3 Days</option>
      <option value="4">4 Days</option>
      <option value="5">5 Days</option>
      <option value="6">6 Days</option>
      <option value="7">7 Days</option>
    </select>
  </div>
  <div className="col-12">
    <div className="row">
      {formData.timetable.days.map((dayData, index) => (
        <div key={index} className="col-md-6 mb-3">
          <label className="form-label fw-bold">Select Day</label>
          <select
            className="form-select mb-2"
            value={dayData.day}
            onChange={(e) => {
              const newDays = [...formData.timetable.days];
              newDays[index].day = e.target.value;
              setFormData((prev) => ({
                ...prev,
                timetable: { ...prev.timetable, days: newDays },
              }));
            }}
          >
            <option value="">-- Choose Day --</option>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
              (d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              )
            )}
          </select>
          <label className="form-label fw-bold">Timing</label>
          <input
            type="text"
            className="form-control"
            value={dayData.timing}
            onChange={(e) => {
              const newDays = [...formData.timetable.days];
              newDays[index].timing = e.target.value;
              setFormData((prev) => ({
                ...prev,
                timetable: { ...prev.timetable, days: newDays },
              }));
            }}
            placeholder="e.g., 10:00 AM - 5:00 PM"
          />
        </div>
      ))}
    </div>
  </div>
</div> */}

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

          .form-control:focus,
          .form-select:focus {
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
