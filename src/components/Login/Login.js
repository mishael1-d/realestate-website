import React, { useContext, useState } from "react";
import { SearchContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(SearchContext);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleLogin = () => {
    if (
      localStorage.getItem("username") === email &&
      localStorage.getItem("password") === password
    ) {
      showAlert(true, "Login Successful", "success");
      setTimeout(() => {
        navigate("../");
      }, 3000);
      value.setIsLoggedIn(true);
    } else {
      showAlert(true, "Email/Password is incorrect", "danger");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  return (
    <div className="login container">
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
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
