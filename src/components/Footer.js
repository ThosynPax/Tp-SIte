import React from 'react';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="social-icons" style={{ marginBottom: "1rem" }}>
        <a href="https://youtube.com/@theproductlab" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="fab fa-youtube"></i></a>
        <a href="https://instagram.com/thosynpax" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://www.threads.com/@thosynpax" target="_blank" rel="noopener noreferrer" title="Threads"><i className="fab fa-threads"></i></a>
        <a href="https://linkedin.com/in/thosyn-pax" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <p>&copy; 2015 - {currentYear} Thosyn Pax. All rights reserved. (V7.0.12) </p>
    </footer>
  );
};

export default Footer;
