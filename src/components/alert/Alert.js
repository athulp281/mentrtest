// components/SuccessAlert.js
"use client";

import { useEffect } from "react";

const SuccessAlert = ({
  show,
  setShow,
  setOpen,
  message = "successfully submitted..! Our team will get back to you soon.",
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setOpen(false);
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  if (!show) return null;

  return (
    <div
      className="alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3 w-auto px-4 py-2 shadow rounded"
      role="alert"
      style={{ zIndex: 1050 }}
    >
      {message}
    </div>
  );
};

export default SuccessAlert;
