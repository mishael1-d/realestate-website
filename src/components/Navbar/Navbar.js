import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      
        <h3><Link to="/" className="logo">real.estate </Link></h3>
     
      <ul className="nav-links">
        <Link to="/" className="links">
          home
        </Link>
        <li className="links"><a href="#about" className="link">about</a></li>
        <li className="links">service</li>
        <li className="links">contact</li>
      </ul>
      <div className="action-buttons">
        <button className="secondary">login</button>
        <button className="primary">SignUp</button>
      </div>
    </div>
  );
}

export default Navbar;
