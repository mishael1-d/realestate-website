import React from "react";
import "../Register/Style.css";

function ContactPage() {
  return (
    <>
      <div className="banner">
        <h3>Get in Touch</h3>
      </div>
      <div className="cards container">
        <div className="card">
          <h4>Talk to sales</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus inventore autem minima nisi, rerum ex assumenda enim
            aspernatur sed laborum excepturi suscipit quibusdam, cumque sapiente
            iste dolore commodi facilis eius.
          </p>
          <a href="tel:+1 1234 2342 231">+1 1234 2342 231</a>
          <a href="!">View all global numbers</a>
        </div>
        <div className="card">
          <h4>Contact Customer Support</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus inventore autem minima nisi, rerum ex assumenda enim
            aspernatur sed laborum excepturi suscipit quibusdam, cumque sapiente
            iste dolore commodi facilis eius.
          </p>
          <button className="primary">Contact Support</button>
        </div>
      </div>
      {/* <div className="account-container container contact-container">
        <div className="left-box">
          <h2>Contact Info</h2>
          <p>
            To stay connected with us <br />
            Please login with your personal info
          </p>
          <button>SIGN IN</button>
        </div>
        <div className="right-box">
          <h2>Create Account</h2>
          <p>
            Please fill in the required input<sup>*</sup>
          </p>
          <form className="form-container">
            <input
              type="text"
              name="name"
              placeholder="Name"
            //   onChange={onValueChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
            //   onChange={onValueChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
            //   onChange={onValueChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            //   onChange={onValueChange}
              required
            />
            <button type="submit">
              SIGN UP
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default ContactPage;
