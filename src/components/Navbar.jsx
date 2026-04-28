import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="logo">AlisaC</a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="btn-call">Book a Call</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
