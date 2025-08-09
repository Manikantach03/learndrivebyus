import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

let toastHandler;
export const showToast = (message, type = "success", duration = 3000) => {
  if (toastHandler) {
    toastHandler({ message, type, duration });
  }
};
const CustomToast = () => {
  const [toast, setToast] = useState({ message: "", type: "", show: false });
  useEffect(() => {
    toastHandler = ({ message, type, duration }) => {
      setToast({ message, type, show: true });
      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, duration);
    };
  }, []);
  return (
    <div
      className={`toast-container position-fixed top-0 end-0 p-3`}
      style={{ zIndex: 2000 }}
    >
      <div
        className={`toast align-items-center text-bg-${
          toast.type === "error" ? "danger" : toast.type
        } border-0 ${toast.show ? "show" : "hide"}`}
        role="alert"
      >
        <div className="d-flex">
          <div className="toast-body">{toast.message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={() => setToast((prev) => ({ ...prev, show: false }))}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CustomToast;
