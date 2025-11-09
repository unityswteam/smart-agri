// src/components/auth/LoginForm.jsx
import React from 'react';

const LoginForm = ({ onClose }) => {
  return (
    <div className="login-popup login-form contact-form">
      <h4>Login</h4>
      <form action="#">
        <div className="row">
          {/* Email */}
          <div className="col-sm-12">
            <div className="contact-container">
              <input type="email" placeholder=" " required />
              <label>Email Address</label>
              <i className="fa fa-envelope"></i>
            </div>
          </div>

          {/* Password */}
          <div className="col-sm-12">
            <div className="contact-container">
              <input type="password" placeholder=" " required />
              <label>Password</label>
              <i className="fa fa-eye"></i>
            </div>
          </div>

          {/* Remember + Forget */}
          <div className="col-sm-12 mb-15">
            <div className="mb-15">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <div className="popup-light">
                <p>Forget Password ?</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="col-sm-12">
            <button type="submit" className="krishok-btn">
              LOGIN
            </button>
          </div>
        </div>
      </form>

      <div className="popup-close" onClick={onClose}>
        <i className="fa fa-close"></i>
      </div>
    </div>
  );
};

export default LoginForm;