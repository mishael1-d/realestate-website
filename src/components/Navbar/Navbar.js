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
        <Link to="../#about" className="links">
          about
        </Link>
        <Link to="../houses" className="links">
          properties
        </Link>
        <Link to="" className="links">
          contact
        </Link>
      </ul>
      <div className="action-buttons">
      <Link to="/login" className="links secondary">
          login
        </Link>
        <Link to="/register" className="links primary">
          SignUp
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
