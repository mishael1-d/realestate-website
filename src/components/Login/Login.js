import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const handleLogin = ()=>{
  if(localStorage.getItem("username")===email&&localStorage.getItem("password")===password) {
    console.log("Login Successful");
  }
  else {
    console.log("Email/Password is incorrect");
  }
}

  return (
    <div className="login container">
      <h3>Login</h3>
      <div className="underline"></div>
      <div className="form-container">
        <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" onClick={handleLogin}>Login</button>
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
