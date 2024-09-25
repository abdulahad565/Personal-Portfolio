import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Abdul Ahad Khan</h1>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/projects" onClick={toggleMobileMenu}>Projects</Link></li>
        <li><Link to="/skills" onClick={toggleMobileMenu}>Skills</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
