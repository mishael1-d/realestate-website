import React from "react";
import "../OldRegister/Style.css";

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
    </>
  );
}

export default ContactPage;
