import React from 'react';
import '../App.css';
import { BsLinkedin, 
  BsInstagram,
  BsTwitterX,
  BsGithub,
  } from 'react-icons/bs'; 

const Footer = () => {
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
        <p>&copy; 2024 Thosyn Pax. All rights reserved. <br />
        Designed in  
        <a target="_blank" rel="noopener noreferrer"  href='https://figma.com/' style={{ color: "#fff", fontWeight: 500}} className='com-3'> Figma</a> and coded in 
        <a target="_blank" rel="noopener noreferrer" href='https://code.visualstudio.com/' style={{ color: "#fff", fontWeight: 500}} className='com-3'> Visual Studio Code </a> 
        by yours truly. Built with 
        <a target="_blank" rel="noopener noreferrer" href='https://react.dev/' style={{ color: "#fff", fontWeight: 500}} className='com-3'> React.js</a> and CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
