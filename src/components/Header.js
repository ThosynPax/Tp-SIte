import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="header-content">
          <a href='/'> <img src={logo} alt="Logo" className="logo" /> </a>
        </div>
        <nav className="site-nav">
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/works">Works</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/tech-blog">Tech Blog</a></li>
            <li><a href="https://thosynpax.com/community">Afriheals Careers</a></li>
            <li><a href="">Pax Trail</a></li>
            <li><a href="/media-kits">Media Kits</a></li>
          </ul>
        </nav>

      </div>
  </header>
  );
};

export default Header;
