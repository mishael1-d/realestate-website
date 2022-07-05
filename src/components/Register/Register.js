import React, { useState } from "react";
import loginBg from "../../images/login-bg.png";
import icon from "../../images/dp-icon.png";
import "./Register.css";

function Register() {
  const [activeTab, setActiveTab] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
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
            <button>Register</button>
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
