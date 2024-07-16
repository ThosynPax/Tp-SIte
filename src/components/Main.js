import React from 'react';
import '../App.css';

const Main = () => {
  return (
    <main className="site-body">
      <div className="wrapper">
        <div className="main-grid">
            <header className="intro">
              <h1 className="intro-title">Hey! I'm Thosyn Pax</h1>
              <h4 className="intro-current-job">Team Lead at Afribreath </h4>
            </header>
            <div className="brief-content">
              <p>I am a Software Engineer, and a UX unicorn 🦄 </p>
              <p>My journey in tech began in 2013 when I wrote my first line of code, and since then, I have been dedicated to fostering talent and pushing the boundaries of technology.</p>
              <p>I have trained tech newbies in several tech skills, continually sharing my expertise and knowledge. </p>
              <p>As an indie hacker, I relentlessly build amazing products and startups, driven by a passion for innovation and creativity. </p>
              
              <p>I write about tech on 
                <a target="_blank" className='com-2' href="https://medium.com/@Thosynpax"> Medium </a> and 
                <a target="_blank" className='com-2' href="https://www.linkedin.com/newsletters/thosyn-pax-digest-7051836831897673731/"> Linkedin </a>  </p>
            </div>

          
            <nav className="other-site-nav">
              <ul>
                <li><a href='/bytes'>Billion-Bytes</a></li>
                <li><a href='https://pax-trail.netlify.app/'>Blog</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://calendar.app.google/i8s7Mao11AY28HVH6" className="menu-link">Meeting</a></li>
              </ul>
           </nav>

            
        </div>
      </div>
    </main>
  );
};

export default Main;
