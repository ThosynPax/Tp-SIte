import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="header-content">
          <a href='/'> <img src={logo} alt="Logo" className="logo" /> </a>
        </div>
        <nav className="site-nav">
          <ul>
            
          </ul>
        </nav>
      </div>
  </header>
  );
};

export default Header;
