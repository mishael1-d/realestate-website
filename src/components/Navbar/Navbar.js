import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <div className='navbar'>
            <h3 className="logo">real.estate</h3>
            <ul className="nav-links">
                <li className="links">home</li>
                <li className="links">about</li>
                <li className="links">service</li>
                <li className="links">contact</li>
            </ul>
            <div className="action-buttons">
                <button className="secondary">login</button>
                <button className="primary">SignUp</button>
            </div>
        </div>
    )
}

export default Navbar
