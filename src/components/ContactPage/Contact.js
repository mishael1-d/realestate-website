import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="container contact-section">
        <h2>
          Need a Consultation? <br />
          Contact us and we will <br />
          Help you!
        </h2>
        <div className="contact-form">
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="email" name="email" placeholder="Email Address" />
            <button type="submit" className="primary">Send Now</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
