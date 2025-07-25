import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLabel, setCurrentLabel] = useState('Industrial Design • UX Engineering');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Rotate dynamic label
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Menu items split
  const internalItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Beyond UX",
      href: "/blocks",
      description: "Industrial design explorations, solo product concepts, customizable furniture, and tangible tech thinking."
    }
  ];

  const externalItems = [
    {
      name: "Learn",
      href: "/learn",
      description: "Hands-on design classes, product tutorials, and downloadable resources for self-paced growth."
    },
    {
      name: "Pax Trail",
      href: "https://trail.thosynpax.com/",
      target: "_blank",
      description: "My personal journal; thoughts on creativity, life, growth, and everything beyond the screen."
    }
  ];

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

        {/* Desktop Nav */}
        <nav className="site-nav">
          <ul>
            {internalItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}

            <li className="dropdown" ref={dropdownRef}>
             <button 
                className="dropdown-label" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                More&nbsp;
                <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} />
              </button>

              {dropdownOpen && (
                <ul className="dropdown-menu">
                  {externalItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        target={item.target}
                        rel="noopener noreferrer"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
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
              {[...internalItems, ...externalItems].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    target={item.target} 
                    onClick={toggleMenu}
                    className="menu-item"
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
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
