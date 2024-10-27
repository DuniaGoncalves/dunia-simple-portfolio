import React from 'react';
import './main.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dunia Goncalves</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
