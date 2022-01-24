import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [person, setPerson] = useState([]);

  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      if (user.password === user.confirmPassword) {
        if (localStorage.getItem("username") === user.email) {
          console.log("User already exists");
        } else {
          const newUser = { ...user, id: new Date().getTime().toString() };
          setPerson({ ...person, newUser });
          localStorage.setItem("userId", newUser.id);
          localStorage.setItem("name", user.name);
          localStorage.setItem("username", user.email);
          localStorage.setItem("password", user.password);
          setUser({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          console.log("Account Created Successfully");
          navigate("../login", { replace: true });
        }
      } else {
        console.log("Password does not match");
      }
    }
  };

  return (
    <div className="register container">
      <h3>Register</h3>
      <div className="underline"></div>
      <div className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onValueChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onValueChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onValueChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={onValueChange}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
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
