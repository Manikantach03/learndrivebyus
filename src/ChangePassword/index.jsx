import React, { useState } from "react";
import authService from "../Services/authService";
import { showToast } from "../CustomToast/CustomToast";
const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;
  const isStrongPassword = (password) => {
    const strongRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
  };
  const isFormValid =
    currentPassword.trim() &&
    isStrongPassword(newPassword) &&
    newPassword === confirmPassword;

  const handleChangePassword = async () => {
    try {
      setLoading(true);
      await authService.changeOldPassword({
        currentPassword,
        newPassword,
      });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      onClose();
      showToast("Password changed successfully", "success", 3000);
    } catch (error) {
      console.error("Password change failed:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ borderRadius: "10px" }}>
          <div className="modal-header">
            <h5 className="modal-title">Change Password</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                className="form-control"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {!isStrongPassword(newPassword) && newPassword.length > 0 && (
                <small className="text-danger">
                  Must be at least 8 characters, include an uppercase letter, a
                  number, and a special character.
                </small>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPassword && confirmPassword !== newPassword && (
                <small className="text-danger">Passwords do not match.</small>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#7450a8", border: "none" }}
              onClick={handleChangePassword}
              disabled={!isFormValid || loading}
            >
              {loading ? "Saving..." : "Change Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
