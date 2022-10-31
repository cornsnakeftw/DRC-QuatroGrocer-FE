import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";

function LoginPage() {
  return (
    <div className="sign-in-container">
      <form className="sign-in-form">
        <div className="sign-in-form-content">
          <h3 className="sign-in-form-title">Welcome Back!</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
          </div>
          <div>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
          </div>
          <div>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#">Forgot password?</a>
          </p>
        </div>
        <div className="text-center">
          I'm new here!
          <a>
            <Link to="/signup"> Create a new account</Link>
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
