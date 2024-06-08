// Menubar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './MenuBar.css';

const Menubar = () => {
  return (
    <nav className="menubar">
      <ul className='menu-items'>
        <li className='menu-item'><Link to="/">Home</Link></li>
        <li className='menu-item'><Link to="/projects">Projects</Link></li>
        <li className='menu-item'><Link to="/links">Links</Link></li>
        <li className='menu-item'><Link to="/experience">Experience</Link></li>
      </ul>
    </nav>
  );
};

export default Menubar;
