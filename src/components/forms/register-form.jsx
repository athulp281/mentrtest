import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from './error-msg';
import useFirebase from '../../hooks/use-firebase';

const courseOptions = [
  'Graphic Designing',
  'Motion Graphics and FX',
  'Video Editing and FX',
  'Content Writing',
  'MERN Stack Development',
  'Digital Marketing',
  'English Language',
  'German Language',
  'Spanish Language',
  'Arabic Language',
  'Other Enquiry',
];

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required'),
  whatsapp: Yup.string(),
  email: Yup.string().email('Invalid email'),
  course: Yup.string().required('Please select a course'),
});

const RegisterForm = () => {
  const { registerWithEmailPassword } = useFirebase();

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      whatsapp: '',
      email: '',
      course: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form Submitted:', values);
      // You can use your Firebase logic here if needed
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-number">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>

      <div className="tp-number">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.phone && <ErrorMsg error={errors.phone} />}
      </div>

      <div className="tp-number">
        <label htmlFor="whatsapp">WhatsApp Number (Optional)</label>
        <input
          id="whatsapp"
          type="text"
          placeholder="Enter your WhatsApp number"
          value={values.whatsapp}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.whatsapp && <ErrorMsg error={errors.whatsapp} />}
      </div>

      <div className="tp-number">
        <label htmlFor="email">Email (Optional)</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>

      <div className="tp-number">
        <label htmlFor="course">Select Course</label>
        <select
          id="course"
          value={values.course}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">-- Select a Course --</option>
          {courseOptions.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
        {touched.course && <ErrorMsg error={errors.course} />}
      </div>

      <div className="tp-login-button">
        <button className="tp-btn-yellow w-100" type="submit">
          Submit Details
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
