import React, { useState } from "react";
import "./Contact.css";
import Alert from "../Alert/Alert";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      showAlert(true, "Thank you for contacting us", "success");
      setName("");
      setEmail("");
      console.log(name, email);
    } else {
      showAlert(true, "Please fill in required input field", "danger");
    }
    console.log(name, email);
  };

  return (
    <div className="contact-wrapper">
      <div className="container contact-section">
        <h2>
          Need a Consultation? <br />
          Contact us and we will <br />
          Help you!
        </h2>
        <div className="contact-form">
          <h2>Your Details</h2>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          {name && email ? (
            <button type="submit" className="primary" onClick={handleSubmit}>
              <a href="mailto:mishaeldada@gmail.com">Send Now</a>
            </button>
          ) : (
            <button type="submit" className="primary" onClick={handleSubmit}>
              {" "}
              Send Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
