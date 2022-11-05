import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setSwitchPage, switchPage } =
    useContext(AppContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="w-full h-auto bg-white shadow-md fixed top-0 left-0 right-0">
      <div className=" container flex justify-between items-center py-5 ">
        <h3 className="cursor-pointer font-['Dancing_Script'] bg-[#263C41] text-white p-2 rounded-tr-xl rounded-bl-xl text-xl font-bold hover:text-[#6898a7]">
          <NavLink to="/" className="">
            Real . Estate{" "}
          </NavLink>
        </h3>

        <ul className="space-x-5 capitalize flex">
          <li className="cursor-pointer text-[#000] rounded-md ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#263C41] py-2 px-4 rounded-md text-white duration-500"
                  : undefined
              }
            >
              home
            </NavLink>
          </li>
          <li className="cursor-pointer text-[#000] rounded-md ">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#263C41] py-2 px-4 rounded-md text-white duration-500"
                  : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer text-[#000] rounded-md ">
            <NavLink
              to="buy"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#263C41] py-2 px-4 rounded-md text-white duration-500"
                  : undefined
              }
            >
              Buy
            </NavLink>
          </li>
          <li className="cursor-pointer text-[#000] rounded-md ">
            <NavLink
              to="rent"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#263C41] py-2 px-4 rounded-md text-white duration-500"
                  : undefined
              }
            >
              Rent
            </NavLink>
          </li>
          <li className="cursor-pointer text-[#000] rounded-md ">
            <NavLink
              to="services"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#263C41] py-2 px-4 rounded-md text-white duration-500"
                  : undefined
              }
            >
              Services
            </NavLink>
          </li>
          <li className="cursor-pointer text-[#000] rounded-md ">
            <NavLink
              to="contact-us"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#263C41] py-2 px-4 rounded-md text-white duration-500"
                  : undefined
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="action-buttons">
          {isLoggedIn ? (
            <>
              <button
                className="Navlinks secondary user-btn"
                onClick={() => setShowMenu(!showMenu)}
              >
                User
              </button>
              {showMenu ? (
                <div className="dropdown">
                  <button className="Navlinks secondary">My Profile</button>
                  <button className="Navlinks secondary" onClick={handleLogout}>
                    Sign Out
                  </button>
                </div>
              ) : undefined}
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="mr-4"
                onClick={() => setSwitchPage(!switchPage)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="bg-[#263C41] py-2 px-4 text-white rounded-md cursor-pointer"
                onClick={() => setSwitchPage(!switchPage)}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
