<<<<<<< HEAD
import React, { useState } from "react";
import loginBg from "../../images/login-bg.png";
import icon from "../../images/dp-icon.png";
import "./Register.css";

function Register() {
  const [activeTab, setActiveTab] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
=======
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import DialogBox from "../DialogBox/DialogBox";
import "./Style.css";

const Register = () => {
  //GENERAL STATE
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [success, setSuccess] = useState(false);

  //LOGIN STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setSwitchPage, setIsLoggedIn, switchPage } = useContext(AppContext);

  //REGISTER STATE
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [person, setPerson] = useState([]);

  //REGISTER FUNCTION
  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
>>>>>>> fd376675cd074bd88ea9b69de22ebd967556b0ac

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
<<<<<<< HEAD
=======
  let navigate = useNavigate();

  //REGISTER ONSUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      if (user.password.length >= 8) {
        if (user.password === user.confirmPassword) {
          if (localStorage.getItem("username") === user.email) {
            showAlert(true, "User already exists", "danger");
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
            showAlert(true, "Account Created Successfully", "success");
            setTimeout(() => {
              setSwitchPage(!switchPage);
            }, 2000);
            // setTimeout(() => {
            //   navigate(-1);
            // }, 5000);
          }
        } else {
          showAlert(true, "Password does not match", "danger");
        }
      } else {
        showAlert(true, "Password must be 8 characters", "danger");
      }
    } else if (!/\$+@\s+\.\$+/.test(user.email)) {
      showAlert(true, "Email is invalid", "danger");
    } else {
      showAlert(true, "Please fill in required input field", "danger");
    }
  };
  //LOGIN ONSUBMIT FUNCTION
  const handleLogin = () => {
    if (
      localStorage.getItem("username") === email &&
      localStorage.getItem("password") === password
    ) {
      setEmail("");
      setPassword("");
      showAlert(true, "Login Successful", "success");
      setTimeout(() => {
        setSuccess(true);
      }, 2000);
      setTimeout(() => {
        navigate(-1);
      }, 5000);
      setIsLoggedIn(true);
    } else {
      showAlert(true, "Email/Password is incorrect", "danger");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

>>>>>>> fd376675cd074bd88ea9b69de22ebd967556b0ac
  return (
    <div className="container">
      <div className="register-section-wrapper">
        <div className="register-section-text__container">
          <div className="register-header-title">
            <h5>
              Register with <span>Real . Estate</span>
            </h5>
            <p>
              Join Real Estate today to get the best recommendation for
              properties near you.
            </p>
          </div>
          <div className="register-text-nav">
            <span className="tab tab1 active">Register</span>
            <span className="tab tab2">Login</span>
          </div>
          <div className="divider"></div>
          <div className="register-inputFields__container">
            <div className="input__container">
              <label htmlFor="name">
                Enter your name<sup>*</sup>
              </label>
              <input type="text" placeholder="Dada Mishael" />
            </div>
            <div className="input__container">
              <label htmlFor="email">
                Enter your email<sup>*</sup>
              </label>
              <input type="text" placeholder="mishaeldada@gmail.com" />
            </div>
            <div className="input__container">
              <label htmlFor="name">
                Enter your password<sup>*</sup>
              </label>
              <input type="password" placeholder="* * * * *" />
            </div>
            <div className="input-dropdown__container">
              <p>Account Type</p>
              <div className="dropdown-box" onClick={handleShowDropdown}>
                <div className="box">Individual [Searching for property]</div>
                <img src={icon} alt="" />
              </div>
              {showDropdown ? (
                <ul className="dropdown-items__container">
                  <li className="item-active">
                    Individual [Searching for property]
                  </li>
                  <li>Property Developers</li>
                  <li>Property Owner</li>
                  <li>Real Estate Agent</li>
                </ul>
              ):undefined}
            </div>
<<<<<<< HEAD
            <button>Register</button>
=======
            <div className="right-box">
              <h2>Hello, Friend!</h2>
              <p>
                Enter your personal details <br /> and start your journey with
                us
              </p>
              <button
                className="login-text-btn"
                onClick={() => setSwitchPage(!switchPage)}
              >
                SIGN UP
              </button>
            </div>
          </div>
        )
      ) : success ? (
        <DialogBox />
      ) : (
        <div className="account-container container register-container">
          <div className="left-box">
            <h2>Welcome Back!</h2>
            <p>
              To stay connected with us <br />
              Please login with your personal info
            </p>
            <button onClick={() => setSwitchPage(!switchPage)}>SIGN IN</button>
          </div>
          <div className="right-box">
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
            <h2>Create Account</h2>
            <p>
              Please fill in the required input<sup>*</sup>
            </p>
            <form className="form-container">
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Name"
                onChange={onValueChange}
                required
              />
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={onValueChange}
                required
              />
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={onValueChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                placeholder="Confirm Password"
                onChange={onValueChange}
                required
              />
              <button type="submit" onClick={handleSubmit}>
                SIGN UP
              </button>
            </form>
>>>>>>> fd376675cd074bd88ea9b69de22ebd967556b0ac
          </div>
        </div>
        <div className="register-section-image__container">
          <img src={loginBg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
