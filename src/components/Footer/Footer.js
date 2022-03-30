import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section container">
        <div className="title">
          <h3 id="logo">real . estate</h3>
          <p>
            This platform also helps real estate managers in placing good
            tenants in their real estate property so as not to loss in business.
          </p>
        </div>
        <div className="q-links">
          <h3>Quick Link</h3>
          <ul className="nav-links">
          <Link to="/" className="links">
          home
        </Link> 
        <Link to="/about" className="links">
          about Us
        </Link>
        <Link to="" className="links">
          buy
        </Link>
        <Link to="" className="links">
          rent
        </Link>
        <Link to="." className="links">
          services
        </Link>
        <Link to="../contact-us" className="links">
          contact
        </Link>
          </ul>
        </div>
        <div className="l-links">
          <h3>Links</h3>
          <ul className="nav-links">
            <li className="links">FAQ</li>
            <li className="links">Terms and Conditions</li>
            <li className="links">Privacy Policy</li>
          </ul>
        </div>
        <div className="sm-links">
          <div className="sm-link">
            <h3>Social Media</h3>
            <ul>
              <li className="links">Facebook</li>
              <li className="links">Twitter</li>
              <li className="links">Instagram</li>
              <li className="links">LinkedIn</li>
            </ul>
            <div className="sm-icon">
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <hr />
      <p className="copyright"><span>&copy;</span> | All Rights Reserved</p>
    </div>
  );
}

export default Footer;
