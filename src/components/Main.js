import React from 'react';
import '../App.css';
import TP from '../assets/tp.png';

const Main = () => {
  return (
    <main className="site-body">
      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="main-grid">
          <div className="main-content">
            <header className="intro">
              <h1 className="intro-title">Hey! I'm Thosyn Pax</h1>
              <h4 className="intro-current-job">
                Transforming Ideas into Reality as a Technical Product Manager,
                UX Unicorn, & Software Engineer
              </h4>
           

            </header>
            <div className="brief-content">
              <p>
                I’m passionate about turning innovative ideas into real-world products. With over 9
                years of experience in the tech sector, I’ve had the privilege of working across UX
                design, technical product management, and software engineering.
              </p>
              <p>
                <span className='inner-brief-content'>My goal is simple:</span> To help you create products that not only meet user needs but <br />
                also stand out in the market.
              </p>
              <p>
                Throughout my career, I've worked with a diverse range of clients, from ambitious 
                startups to established companies, helping them navigate the challenges of
                product development and user experience. I believe in a hands-on, collaborative
                approach, ensuring that every project I work on is tailored to the unique needs of
                the client.
              </p>
              <p>
                Beyond my professional work, I’m also the driving force behind AfriHeals Careers, 
                a community focused on mentoring and supporting the next generation of African 
                innovators. This is more than just a job for me, it's a commitment to building a
                better future through technology and creativity.
              </p>
              <p>
                Let’s connect and see how we can bring your vision to life. <span className='inner-brief-content'>Book a Consultation</span>
              </p>
            </div>
          </div>
          <div className="image-content">
            <img src={TP} alt="Thosyn Pax" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
