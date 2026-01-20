import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [currentLabel, setCurrentLabel] = useState('Industrial Design • UX Engineering');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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


  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="header-content">
          <a href='/'>
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;