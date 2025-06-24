"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RegisterForm from "./forms/register-form";

const PopupForm = ({show,setShow}) => {
 
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
     
      <AnimatePresence>
        {show && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 9999 }}
            onClick={() => setShow(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-4 rounded shadow w-100"
              style={{ maxWidth: "600px" }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="d-flex justify-content-end align-items-center mb-3">
                <button className="btn-close" onClick={() => setShow(false)} />
              </div>

           
              <>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0 align-items-center">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className="tp-login-wrapper d-flex justify-content-center">
                <div className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title">Let's Grow with us</h3>
                  </div>
                  <div className="tplogin__form">
                    <RegisterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopupForm;
