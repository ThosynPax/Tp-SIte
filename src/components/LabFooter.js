import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LabFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lab-footer">
      <div className="footer-top">
        <div className="footer-cta">
          <h2>Ready to build<br/>something that lasts?</h2>
          <a href="mailto:lab@thosynpax.com,thosynpax@gmail.com" className="footer-btn">
            Let's Collaborate <i className="far fa-envelope"></i>
          </a>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Links</h4>
            <Link to="/lab/story">Story</Link>
            <Link to="/lab/products">Products</Link>
            <Link to="/lab/store">Store</Link>
            <Link to="/lab/research">Research</Link>
          </div>
          
          <div className="footer-col">
            <h4>Sitemap</h4>
            <Link to="/">Home</Link>
            <Link to="/lab">The Lab</Link>
            <Link to="/about">About Us</Link>
          </div>
          
          <div className="footer-col contact-col">
            <h4>Contact</h4>
            <p>lab@thosynpax.com</p>
            <p>thosynpax@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; {currentYear} The Product Lab, a Product of Afribreath LTD.<br/>
          All rights reserved.
        </div>
        
        <div className="footer-made-with">
          Made with &hearts;
        </div>

        <div className="footer-socials">
          <a href="https://youtube.com/@theproductlab" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="https://instagram.com/thosynpax" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://www.threads.net/@thosynpax" target="_blank" rel="noopener noreferrer" title="Threads"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/in/thosyn-pax" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default LabFooter;
