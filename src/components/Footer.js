import React from 'react';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; 2015 - {currentYear} Thosyn Pax. All rights reserved. (V7.0.7) </p>
    </footer>
  );
};

export default Footer;
