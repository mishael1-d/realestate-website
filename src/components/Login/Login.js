import React, { useContext, useState } from "react";
import { SearchContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(SearchContext);
  const handleLogin = () => {
    if (
      localStorage.getItem("username") === email &&
      localStorage.getItem("password") === password
    ) {
      console.log("Login Successful");
      value.setIsLoggedIn(true);
      navigate(-1);
    } else {
      console.log("Email/Password is incorrect");
    }
  };

  return (
    <div className="login container">
      <h3>Login</h3>
      <div className="underline"></div>
      <div className="form-container">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="register-link">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
