import React, { useState } from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="header-content">
          <a href='/'>
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <button 
            className="hamburger-icon" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>

        </div>

        {/* Web 
        <nav className="site-nav">
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/works">Works</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/bytes">Billion Bytes</a></li>
            <li><a href="https://thosynpax.com/prodsculpt/" rel="noreferrer" target="_blank">ProdSculpt</a></li>
            <li><a href="https://afribreath.com/community/mentorship/" rel="noreferrer" target="_blank">TPM Mentoring</a></li>
            <li><a href="/media-kits">Media Kits</a></li>
          </ul>
        </nav>
        Menu */}

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="close-icon" 
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav>
            <ul>
              <li><a href="/works" onClick={toggleMenu}>My Story</a></li>
              <li><a href="/projects" onClick={toggleMenu}>Works</a></li>
              <li><a href="/bytes" onClick={toggleMenu}>Billion Bytes</a></li>
              <li><a href="/media-kits" onClick={toggleMenu}>Media Kits</a></li>
             
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
