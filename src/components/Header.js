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
          </ul>
        </nav>
      </div>
  </header>
  );
};

export default Header;
