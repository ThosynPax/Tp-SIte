import React from 'react';
import '../App.css';
import { BsLinkedin, 
  BsInstagram,
  BsTwitterX,
  BsGithub,
  } from 'react-icons/bs'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrapper">
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/thosyn-pax/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://instagram.com/thosynpax" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/thosynpax" target="_blank" rel="noopener noreferrer">
              <BsTwitterX />
            </a>
            <a href="https://github.com/ThosynPax" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a> 
          </div>
        <p>&copy; {currentYear} Thosyn Pax. All rights reserved. (V6) <br /> </p>
      </div>
    </footer>
  );
};

export default Footer;
