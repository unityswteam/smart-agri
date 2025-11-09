// src/components/auth/RegisterForm.jsx
import React from 'react';
import '../../assets/styles/custom.css';   // <-- import the CSS above (or keep it in global file)

const RegisterForm = ({ onSwitchToLogin, onClose }) => {
  return (
    <div className="login-popup registration-form contact-form">
      <h4>Create Account</h4>
      <form action="#">
        <div className="row">

          {/* Username */}
          <div className="col-sm-12">
            <div className="contact-container">
              <input type="text" placeholder=" " required />
              <label className="reg-label">Username</label>
              <i className="fa fa-user"></i>
            </div>
          </div>

          {/* Email */}
          <div className="col-sm-12">
            <div className="contact-container">
              <input type="email" placeholder=" " required />
              <label className="reg-label">Email Address</label>
              <i className="fa fa-envelope"></i>
            </div>
          </div>

          {/* Password */}
          <div className="col-sm-12">
            <div className="contact-container">
              <input type="password" placeholder=" " required />
              <label className="reg-label">Password</label>
              <i className="fa fa-eye"></i>
            </div>
          </div>

          {/* Retype Password */}
          <div className="col-sm-12 mb-15">
            <div className="contact-container">
              <input type="password" placeholder=" " required />
              <label className="reg-label">Retype Password</label>
            </div>
          </div>

          {/* Terms */}
          <div className="col-sm-12 text-left mb-15">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Agree with <span>terms and condition</span>
            </label>
          </div>

          {/* Submit */}
          <div className="col-sm-12 mb-20">
            <button type="submit" className="krishok-btn">
              Create Account
            </button>
          </div>

          {/* Switch to login */}
          <div className="col-sm-12">
            <p>
              Already Have an Account ?{' '}
              <span className="login-form-show" onClick={onSwitchToLogin}>
                Login Now
              </span>
            </p>
          </div>

        </div>
      </form>

      <div className="popup-close" onClick={onClose}>
        <i className="fa fa-close"></i>
      </div>
    </div>
  );
};

export default RegisterForm;