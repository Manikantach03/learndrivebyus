import React, { useState, useEffect } from "react";
import { Modal, Container, Row, Col, Form, Button, Nav,} from "react-bootstrap";
import { X, User, Mail, Phone, CreditCard, MapPin, FileText, Calendar, Award, Shield } from "lucide-react";
import "./InstructorProfileModal.css"; // Import the CSS file

const InstructorProfileModal = ({ isOpen, onClose, onSave }) => {
 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  pan: "",
  address: "",
  aadhar: "",
  rtoLicence: "",
  rc: "",          // fixed
  insurance: "",   // fixed
  selfie: "",      // fixed
  gst: "",
  age: "",
  experience: "",
  voterId: "",
  licenceNumber: "",
  licenceType: "",
  issueDate: "",
  expiryDate: "",
  dob: "",
});


  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Validation Rules
  const validators = {
    name: (v) => v.trim().length > 0,
    email: (v) => /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(v),
    phone: (v) => /^[0-9]{10}$/.test(v),
    pan: (v) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v),
    aadhar: (v) => /^[0-9]{12}$/.test(v),
    age: (v) => Number(v) >= 18,
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid = Object.entries(validators).every(([key, fn]) =>
    form[key] ? fn(form[key]) : true
  );

  const handleSave = async () => {
    if (!isFormValid) return;
    setLoading(true);
    try {
      await onSave(form);
      onClose();
    } catch (err) {
      console.error("Save failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const FormField = ({ icon: Icon, label, error, children, required = false }) => (
    <div className="form-field-container">
      <Form.Label className="form-field-label">
        <Icon size={16} className="field-icon" />
        {label}
        {required && <span className="text-danger">*</span>}
      </Form.Label>
      {children}
      {error && <div className="field-error">{error}</div>}
    </div>
  );

  const CustomInput = ({ type = "text", value, onChange, placeholder, maxLength, ...props }) => (
    <Form.Control
      type={type}
      value={value || ""} 
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className="custom-input"
      {...props}
    />
  );

  const CustomTextArea = ({ value, onChange, placeholder, rows = 3 }) => (
    <Form.Control
      as="textarea"
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="custom-textarea"
    />
  );

  const TabNavigation = () => (
    <Nav variant="tabs" className="modal-tabs">
      {[
        { id: "personal", label: "Personal Info", icon: User },
        { id: "documents", label: "Documents", icon: FileText },
        { id: "licence", label: "Licence Details", icon: Award },
      ].map((tab) => (
        <Nav.Item key={tab.id}>
          <Nav.Link
            eventKey={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-link ${activeTab === tab.id ? 'active' : ''}`}
          >
            <tab.icon size={16} />
            {tab.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="xl"
      centered
      className="instructor-modal"
      backdrop="static"
    >
      <div className="modal-custom-header">
        <div className="header-content">
          <div className="header-icon">
            <User size={20} />
          </div>
          <div className="header-text">
            <h2>Instructor Profile</h2>
            <p>Complete your professional details</p>
          </div>
        </div>
        <Button
          variant="link"
          onClick={onClose}
          className="close-button"
        >
          <X size={18} />
        </Button>
      </div>

      <div className="modal-tabs-container">
        <TabNavigation />
      </div>

      <Modal.Body className="modal-custom-body">
        <Container fluid>
          {/* Personal Information Tab */}
          {activeTab === "personal" && (
            <Row>
              <Col md={6}>
                <FormField
                  icon={User}
                  label="Full Name"
                  required
                  error={!validators.name(form.name) && form.name && "Name is required"}
                >
                  <CustomInput
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Mail}
                  label="Email Address"
                  error={form.email && !validators.email(form.email) && "Please enter a valid email"}
                >
                  <CustomInput
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Phone}
                  label="Phone Number"
                  error={form.phone && !validators.phone(form.phone) && "Must be 10 digits"}
                >
                  <CustomInput
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="9876543210"
                    maxLength="10"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Calendar}
                  label="Age"
                  error={form.age && !validators.age(form.age) && "Must be 18 or older"}
                >
                  <CustomInput
                    type="number"
                    value={form.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    placeholder="25"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Calendar}
                  label="Date of Birth"
                >
                  <CustomInput
                    type="date"
                    value={form.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Award}
                  label="Experience (Years)"
                >
                  <CustomInput
                    type="number"
                    value={form.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                    placeholder="5"
                  />
                </FormField>
              </Col>
              <Col md={12}>
                <FormField
                  icon={MapPin}
                  label="Address"
                >
                  <CustomTextArea
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Enter your complete address"
                  />
                </FormField>
              </Col>
            </Row>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <Row>
              <Col md={6}>
                <FormField
                  icon={CreditCard}
                  label="PAN Number"
                  error={form.pan && !validators.pan(form.pan) && "Invalid PAN format (e.g., ABCDE1234F)"}
                >
                  <CustomInput
                    value={form.pan}
                    onChange={(e) => handleChange("pan", e.target.value.toUpperCase())}
                    placeholder="ABCDE1234F"
                    maxLength="10"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Shield}
                  label="Aadhar Number"
                  error={form.aadhar && !validators.aadhar(form.aadhar) && "Must be 12 digits"}
                >
                  <CustomInput
                    value={form.aadhar}
                    onChange={(e) => handleChange("aadhar", e.target.value)}
                    placeholder="123456789012"
                    maxLength="12"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Shield}
                  label="Voter ID"
                >
                  <CustomInput
                    value={form.voterId}
                    onChange={(e) => handleChange("voterId", e.target.value)}
                    placeholder="ABC1234567"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={FileText}
                  label="GST Number"
                >
                  <CustomInput
                    value={form.gst}
                    onChange={(e) => handleChange("gst", e.target.value)}
                    placeholder="22AAAAA0000A1Z5"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Award}
                  label="RTO Licence Number"
                >
                  <CustomInput
                    value={form.rtoLicence}
                    onChange={(e) => handleChange("rtoLicence", e.target.value)}
                    placeholder="RTO123456"
                  />
                </FormField>
              </Col>
            </Row>
          )}

          {/* Licence Details Tab */}
          {activeTab === "licence" && (
            <Row>
              <Col md={6}>
                <FormField
                  icon={Award}
                  label="Driving Licence Number"
                >
                  <CustomInput
                    value={form.licenceNumber}
                    onChange={(e) => handleChange("licenceNumber", e.target.value)}
                    placeholder="DL1420110012345"
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={FileText}
                  label="Licence Type"
                >
                  <CustomInput
                    value={form.licenceType}
                    onChange={(e) => handleChange("licenceType", e.target.value)}
                    placeholder="LMV, HMV, etc."
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Calendar}
                  label="Issue Date"
                >
                  <CustomInput
                    type="date"
                    value={form.issueDate}
                    onChange={(e) => handleChange("issueDate", e.target.value)}
                  />
                </FormField>
              </Col>
              <Col md={6}>
                <FormField
                  icon={Calendar}
                  label="Expiry Date"
                >
                  <CustomInput
                    type="date"
                    value={form.expiryDate}
                    onChange={(e) => handleChange("expiryDate", e.target.value)}
                  />
                </FormField>
              </Col>
            </Row>
          )}
        </Container>
      </Modal.Body>

      <div className="modal-custom-footer">
        <div className="footer-step-indicator">
          Step {activeTab === "personal" ? "1" : activeTab === "documents" ? "2" : "3"} of 3
        </div>
        <div className="footer-buttons">
          <Button
            variant="outline-secondary"
            onClick={onClose}
            className="cancel-button"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!isFormValid || loading}
            className="save-button"
          >
            {loading ? (
              <>
                <div className="loading-spinner" />
                Saving...
              </>
            ) : (
              "Save Profile"
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default InstructorProfileModal;