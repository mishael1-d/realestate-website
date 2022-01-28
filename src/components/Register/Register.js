import React, { useContext, useState } from "react";
import { SearchContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import DialogBox from "../DialogBox/DialogBox";
import "./Style.css";

const Register = () => {
  //GENERAL STATE
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [switchPage, setSwitchPage] = useState(false);
  const [success, setSuccess] = useState(false);
  //LOGIN STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(SearchContext);
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

    setUser({ ...user, [name]: value });
  };
  let navigate = useNavigate();
  //REGISTER ONSUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      if (user.password.length === 8) {
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
            showAlert(true, "Account Created Successfully", "success");setTimeout(() => {
              setSuccess(true);
            }, 2000);
            setTimeout(() => {
              navigate(-1);
            }, 5000);
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
      showAlert(true, "Login Successful", "success");
      setTimeout(() => {
        setSuccess(true);
      }, 2000);
      setTimeout(() => {
        navigate(-1);
      }, 5000);
      value.setIsLoggedIn(true);
    } else {
      showAlert(true, "Email/Password is incorrect", "danger");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  return (
    <>
      {switchPage ? (
        success ? (
          <DialogBox />
        ) : (
          <div className="account-container login-container container">
            <div className="left-box">
              <div className="form-container">
                {alert.show && <Alert {...alert} removeAlert={showAlert} />}
                <h2>Sign In to Real.Estate</h2>
                <p>
                  Fill in the required input<sup>*</sup>{" "}
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Forgot your password?</p>
                <button type="submit" onClick={handleLogin}>
                  SIGN IN
                </button>
              </div>
            </div>
            <div className="right-box">
              <h2>Hello, Friend!</h2>
              <p>
                Enter your personal details <br /> and start your journey with
                us
              </p>
              <button
                className="login-text-btn"
                onClick={() => setSwitchPage(false)}
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
            <button onClick={() => setSwitchPage(true)}>SIGN IN</button>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
