"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RegisterForm from "./forms/register-form";

const courseOptions = [
  "Graphic Designing",
  "Motion Graphics and FX",
  "Video Editing and FX",
  "Content Writing",
  "MernStack Development",
  "Digital Marketing",
  "English Language",
  "German Language",
  "Spanish Language",
  "Arabic Language",
  "Other Enquiry",
];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setShow(false);
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
                {/* <h5 className="mb-0">Course Enquiry</h5> */}
                <button className="btn-close" onClick={() => setShow(false)} />
              </div>

            {/*   <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    className="form-control"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Course *</label>
                  <select
                    className="form-select"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form> */}
              <>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0 align-items-center">
            {/* <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-thumb login-space sky-bg d-flex justify-content-center h-100">
                <img className='h-100' src="/assets/img/contact/login.png" alt="" />
              </div>
            </div> */}
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
