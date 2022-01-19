import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section container">
        <h3 id="logo">real.estate</h3>
        <ul className="nav-links">
          <li className="links">about us</li>
          <li className="links">FAQ</li>
          <li className="links">Contact Us</li>
          <li className="links">Privacy Policy</li>
        </ul>
      </div>
      <p>&copy; 2022 All Rights Reserved</p>
    </div>
  );
}

export default Footer;
