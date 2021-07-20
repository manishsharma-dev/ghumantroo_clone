import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png"
const Header = () => {
    return (
        <nav className="navbar">
        <img src={logo} alt="/" />
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Hotel">Hotel</Link>
            <Link to="/Holiday">Holiday</Link>
        </div>
    </nav>
    )
}

export default Header;
