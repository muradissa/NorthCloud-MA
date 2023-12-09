import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src='./logo2/northcloud.png'/>
      </div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
        <li className='nav-item'>Drop down langange Heb / Eng</li>
      </ul>
    </nav>
  );
};

export default Navbar;
