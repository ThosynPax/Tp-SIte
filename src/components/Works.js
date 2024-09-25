import React from 'react';
import '../App.css';
import TP from '../assets/tp.png';

const Works = () => {
  return (
    <main className="site-body">
      <style>
        {`
        .project-tags {
          display: flex;
          gap: 10px;
        }

        .project-tags span.tag {
          padding: 5px 15px;
          background-color: #ffe666;
          border-radius: 10px;
          color: #000; /* Light blue text */
          font-size: 16px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .project-tags span.tag:hover {
          background-color: #123e65; /* Slightly lighter on hover */
        }
        `}
      </style>

      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="main-grid">
          <div className="main-content">
            <header className="intro">
              <h1 className="intro-title" style={{ lineHeight: '0.8' }}>Works</h1>
              <h4 className="intro-current-job">
                Here, you’ll find my portfolio of projects, 
                where I've led product development and successfully 
                executed projects as both a Product Manager and Technical Project Manager.
                See how I've turned ideas into successful outcomes across various areas.
              </h4> 
              <hr />
            </header>

            {/* MonieClips Section */}
            <div className="brief-content">
              <h1 className='intro-title' style={{ fontSize: 30 }}>MonieClips</h1>
              <p>
                I’m passionate about turning innovative ideas into real-world products. With over 9
                years of experience in the tech sector, I’ve had the privilege of working across UX
                design, product management, and software engineering.
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
            <div className="project-tags">
              <span className="tag">PHP</span>
              <span className="tag">JavaScript</span>
              <span className="tag">MySQL</span>
            </div>
          </div>

          {/* TecPay Section */}
          <div className="main-content"><hr />
            <div className="brief-content">
              <h1 className='intro-title' style={{ fontSize: 30 }}>TecPay</h1>
              <p>
                I’m passionate about turning innovative ideas into real-world products. With over 9
                years of experience in the tech sector, I’ve had the privilege of working across UX
                design, product management, and software engineering.
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
            <div className="project-tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Node.js</span>
            </div>
          </div>

          {/* Shape.LOL Section */}
          <div className="main-content"><hr />
            <div className="brief-content">
              <h1 className='intro-title' style={{ fontSize: 30 }}>Shape.LOL</h1>
              <p>
                I’m passionate about turning innovative ideas into real-world products. With over 9
                years of experience in the tech sector, I’ve had the privilege of working across UX
                design, product management, and software engineering.
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
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Redux</span>
              <span className="tag">CSS</span>
              <span className="tag">API</span>
            </div>
          </div>

          {/* Quickinbox Section */}
          <div className="main-content"><hr />
            <div className="brief-content">
              <h1 className='intro-title' style={{ fontSize: 30 }}>Quickinbox</h1>
              <p>
                I’m passionate about turning innovative ideas into real-world products. With over 9
                years of experience in the tech sector, I’ve had the privilege of working across UX
                design, product management, and software engineering.
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
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">Flask</span>
              <span className="tag">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Works;
