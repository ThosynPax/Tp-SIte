import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const LabHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/lab' },
    { name: 'Story', path: '/lab/story' },
    { name: 'Podcast', path: '/lab/podcast' },
    { name: 'Products', path: '/lab/products' },
    // { name: 'Magazine', path: '/lab/magazine' },
    { name: 'Store', path: '/lab/store' },
  ];

  const isOverlayLight = location.pathname === '/lab/magazine';

  return (
    <header className={`lab-header ${isOverlayLight ? 'lab-header-overlay-light' : ''}`}>
      <div className="lab-header-inner">
        <div className="lab-logo-wrapper">
          <Link to="/lab" className="lab-logo">
            <img loading="lazy" src="/logo-tpl.png" alt="The Product Lab" className="lab-logo-img" />
          </Link>
        </div>
        
        <nav className="lab-nav-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`lab-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
              {link.submenu && <i className="fas fa-chevron-down"></i>}
            </Link>
          ))}
        </nav>

        <div className="lab-header-actions">
          <a href="mailto:lab@thosynpax.com,thosynpax@gmail.com" className="lab-btn-talk">Collaborate</a>
          <button className="lab-mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lab-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`lab-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default LabHeader;
