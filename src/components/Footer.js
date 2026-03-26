import React from 'react';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="social-icons" style={{ marginBottom: "1rem" }}>
        <a href="https://youtube.com/@theproductlab" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="fab fa-youtube"></i></a>
        <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" title="Podcast"><i className="fas fa-podcast"></i></a>
        <a href="https://instagram.com/thosynpax" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <p>&copy; 2015 - {currentYear} Thosyn Pax. All rights reserved. (V7.0.9) </p>
    </footer>
  );
};

export default Footer;
