import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="site-nav">
          <ul>
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/bytes'>Billion-Bytes</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://calendar.app.google/i8s7Mao11AY28HVH6" className="menu-link">Meeting</a></li>
          </ul>
        </nav>
      </div>
  </header>
  );
};

export default Header;
