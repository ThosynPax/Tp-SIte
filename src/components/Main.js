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
                I am a Software Engineer & UI/UX Engineer, aspiring Product Manager
              </h4>
            </header>
            <div className="brief-content">
              <p>
                I love bringing creative ideas to life as real products. 
                With more than 9 years of experience in the tech industry, 
                I've worked in UX design, product management, and software engineering.
              </p>
              <p>
                <span className='inner-brief-content'>My goal is simple:</span> To help you create products that not only meet user needs but also stand out in the tech industry and in the market.
              </p>
              <p>
                Throughout my career, I’ve worked with all kinds of clients, 
                from new startups to well-known companies,
                helping them tackle challenges in product development and user experience. I believe in working closely with my clients, making sure every project fits their specific needs.
              </p>
              <p>
                Outside of my professional work, I lead a community focused on mentoring and supporting the next generation of African innovators. It’s not just a job for me, it's a passion to help build a better future through technology and creativity.
              </p>
              <p>
                Let’s connect and see how we can bring your vision to life. <span className='inner-brief-content'><a target="_blank" href='https://cal.com/thosyn-pax/60min'>Book a Consultation</a> </span>
              </p>
            </div>

           


          </div>
          <div className="image-content">
            <img src={TP} alt="Thosyn Pax" />
          </div>
           {/* New section added for your partnerships */}
           <div className="partnerships">
              <h2 className="partnerships-heading">Building the Future with Strong Partnerships</h2>
              <ul className="partnerships-list">
                <li>
                  Co-Founder of  <strong>
                     <a href="#" target="_blank" rel="noopener noreferrer" className="partnership-link">
                        Inflect Innovations
                    </a>
                  </strong>
                </li>
                <li>
                  A partner at <strong>
                     <a href="https://axiomaffiliate.com" target="_blank" rel="noopener noreferrer" className="partnership-link">
                        Axiom Affiliate
                     </a>
                  </strong>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
