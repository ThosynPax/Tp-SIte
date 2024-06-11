import React from 'react';
import '../App.css';
import { BsLinkedin, 
         BsInstagram,
         BsTwitterX,
         BsGithub,
         BsMedium
         } from 'react-icons/bs'; 
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
              <p>I am a Software Engineer, Product Designer and Business Development Expert. </p>
              <p>I founded <a href='https://afribreath.com' target="_blank" rel="noopener noreferrer" className='com-1'>Afribreath</a> , a tech company in Lagos, Nigeria. And we offer a virtual internship program aimed at bridging the gap <br /> between talented individuals and career opportunities across Africa.</p>
              <p>Additionally, I created <a href='https://afriheals.afribreath.com/' target="_blank" rel="noopener noreferrer" className='com-2'>Afriheals Careers</a>, a thriving tech community aimed at nurturing careers <br /> and fostering collaboration.</p>
              <p>Recently, I established <a href='https://paxschool.africa/' target="_blank" rel="noopener noreferrer" className='com-2'>Pax School of Tech</a>, a groundbreaking initiative dedicated to empowering the next <br /> generation of tech leaders.</p> 
              <p>Through Pax School of Tech, we're reshaping education, providing hands-on learning experiences that prepare individuals for success in the ever-evolving tech landscape.</p>
              <p>I'm dedicated to fostering talent and innovation in Africa's tech ecosystem</p>
            </div>
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
            </a> <a href="https://medium.com/@Thosynpax" target="_blank" rel="noopener noreferrer">
              <BsMedium />
            </a>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
