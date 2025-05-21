import React from 'react';
import './HeaderContent.css';
import Menulinks from '../Menulinks/Menulinks';

function HeaderContent() {
  return (
    <header className="navcontent">
      <div className="logo">
        {/* React logo SVG */}
        <svg height="40" viewBox="0 0 40 40" width="40" fill="none">
          <circle cx="20" cy="20" r="3.5" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="2" fill="none">
            <ellipse rx="16" ry="6" cx="20" cy="20" />
            <ellipse rx="16" ry="6" cx="20" cy="20" transform="rotate(60 20 20)" />
            <ellipse rx="16" ry="6" cx="20" cy="20" transform="rotate(120 20 20)" />
          </g>
        </svg>
      </div>
      <Menulinks />
    </header>
  );
}

export default HeaderContent;
