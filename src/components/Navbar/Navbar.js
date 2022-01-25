import React, {useContext} from "react";
import { SearchContext } from "../../App";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const value = useContext(SearchContext);
  const handleLogout=()=>{
    value.setIsLoggedIn(false)
  }
  return (
    <div className="navbar">
      <h3>
        <Link to="/" className="logo">
          real.estate{" "}
        </Link>
      </h3>

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
        {value.isLoggedIn?<Link to="/user"className="links secondary">
          User
        </Link>:
        <Link to="/login" className="links secondary">
          login
        </Link>}
        {value.isLoggedIn?<button className="links primary" onClick={handleLogout}>
          Log Out
        </button>:
        <Link to="/register" className="links primary">
          SignUp
        </Link>}
      </div>
    </div>
  );
}

export default Navbar;
