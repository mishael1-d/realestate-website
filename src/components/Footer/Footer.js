import React from "react";
import "./Footer.css";

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
            <li className="links">Home</li>
            <li className="links">About</li>
            <li className="links">Buy</li>
            <li className="links">Rent</li>
            <li className="links">Services</li>
            <li className="links">Contact</li>
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
              {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
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
