import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container hover-target">
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#about" className="nav-link">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
