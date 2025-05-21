import React from 'react';
import './Menulinks.css';

function Menulinks() {
  return (
    <nav className="menu-links">
      <a href="#home" className="link">Home</a>
      <a href="#about" className="link">About</a>
      <a href="#contact" className="link">Contact</a>
      <a href="#login" className="link">Login</a>
    </nav>
  );
}

export default Menulinks;
