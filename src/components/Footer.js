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
        <p>&copy; 2015 - {currentYear} Thosyn Pax. All rights reserved. (V7.0.2) <br /> </p>
    </footer>
  );
};

export default Footer;
