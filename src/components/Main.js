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
      I'm a Software Engineer & UI/UX Creator, exploring new ways to build products.
    </h4>
  </header>
  <div className="brief-content">
    <p>
      I love experimenting with creative ideas and turning them into real, working products.
      With over 9 years in tech, I’ve dabbled in UX design, software engineering, and product management.
    </p>
    <p>
      <span className='inner-brief-content'>My goal is simple:</span> I want to help you build products that are not just useful, but also unique and innovative in the tech world.
    </p>
    <p>
      I’ve worked with all kinds of clients, from startups to established companies, helping them solve problems with user experience and product development.
      I focus on understanding your needs, so each project feels custom-made.
    </p>
    <p>
      Outside of work, I lead a community where I mentor and support the next wave of African innovators. This isn't just a job for me—it's my passion to shape a brighter future through creativity and tech.
    </p>
    <p>
      Let’s connect and explore how we can make your ideas come to life. <span className='inner-brief-content'><a target="_blank" href='https://thosynpax.mainstackbookings.com/p/678c40e929cc2436245a5b22'>Book a Consultation</a></span>
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
