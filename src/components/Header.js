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

        <nav className="site-nav">
          <ul>
        {/* <li><a href="/story">Story</a></li> */}
         {/* <li><a href="/blocks">Beyond UX</a></li> */}
            <li><a href="/learn">Learn</a></li>
            <li><a href="https://trail.thosynpax.com/"  target='_blank'>Pax Trail</a></li>
            <li><a href="https://www.thosynpax.store/"  target='_blank'>Store</a></li>
          </ul>
        </nav>

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
           {/*    <li><a href="/works" onClick={toggleMenu}>My Story</a></li> */}
           {/*   <li><a href="/projects" onClick={toggleMenu}>Works</a></li>  */}
           <li><a href="/learn" target='_blank' onClick={toggleMenu}>Learn</a></li>
              <li><a href="https://trail.thosynpax.com/" target='_blank' onClick={toggleMenu}>Pax Trail</a></li>
              <li><a href="https://www.thosynpax.store/" target='_blank' onClick={toggleMenu}>Store</a></li>
             
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
