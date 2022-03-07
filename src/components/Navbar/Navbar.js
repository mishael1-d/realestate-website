import React, { useContext, useState } from "react";
import { SearchContext } from "../../App";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const value = useContext(SearchContext);
  const handleLogout = () => {
    value.setIsLoggedIn(false);
  };
  return (
    <div className="navbar">
      <h3>
        <Link to="/" className="logo">
          Real.Estate{" "}
        </Link>
      </h3>

      <ul className="nav-links">
        <Link to="/" className="links">
          home
        </Link>
        <Link to="" className="links">
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
      <div className="action-buttons">
        {value.isLoggedIn ? (
          <>
          <button className="links secondary user-btn" onClick={()=>setShowMenu(!showMenu)}>User</button>
          {showMenu ? <div className="dropdown">
            <button className="links secondary">My Profile</button>
            <button className="links secondary" onClick={handleLogout}>Sign Out</button>
          </div>: undefined}
          </>    
      ) : (
        <>
          <Link to="/register" className="links secondary">
            Login
          </Link>
          <Link to="/register" className="links primary">
            Register
          </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
