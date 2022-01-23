import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="register container">
      <h3>Register</h3>
      <div className="underline"></div>
      <div className="form-container">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="password" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </div>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="register-link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
