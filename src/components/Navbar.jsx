import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
        <NavLink to="/work" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Work</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
