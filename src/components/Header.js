import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLabel, setCurrentLabel] = useState('Industrial Design • UX Engineering');

  // Rotate through professional descriptors
  useEffect(() => {
    const labels = [
      'Technical Product Designer',
      'Human-Centered Design',
      'UX Engineering',
      'Industrial Design',
      'Product Architect'
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % labels.length;
      setCurrentLabel(labels[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Menu items with descriptions
const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Learn",
    href: "/learn",
    description: "Hands-on design classes, product tutorials, and downloadable resources for self-paced growth."
  },
  {
    name: "Beyond UX",
    href: "/blocks",
    description: "Industrial design explorations, solo product concepts, customizable furniture, and tangible tech thinking."
  },
  {
    name: "Pax Trail",
    href: "https://trail.thosynpax.com/",
    target: "_blank",
    description: "My personal journal; thoughts on creativity, life, growth, and everything beyond the screen."
  }
];


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="header-content">
          <a href='/'>
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <button className="hamburger-icon" onClick={toggleMenu} aria-label="Menu">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <nav className="site-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} target={item.target}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Enhanced Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button className="close-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          {/* Dynamic Label */}
          <div className="dynamic-label">
            {currentLabel}
          </div>

          <nav>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    target={item.target} 
                    onClick={toggleMenu}
                    className="menu-item"
                  >
                    <span className="menu-title">{item.name}</span>
                    <span className="menu-description">{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;