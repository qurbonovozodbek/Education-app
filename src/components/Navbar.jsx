// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css'; // Import the CSS for Navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo"> <span>IT</span> Education</h1>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" className="navbar-link" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/courses" className="navbar-link" onClick={toggleMenu}>Courses</Link></li>
        <li><Link to="/contact" className="navbar-link" onClick={toggleMenu}>Contact</Link></li>
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>
    </nav>
  );
};

export default Navbar;
