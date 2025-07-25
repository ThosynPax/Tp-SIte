import { useState } from "react";
import '../App.css';
import TP from '../assets/thosyn-pax.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="site-body">
       <style>
        {`
          .content-section {
            margin-bottom: 3rem;
          }

          .title {
            font-size: 3.5rem;
            font-weight: bold;
            color: #fff;
            margin-bottom: 1rem;
          }

          .description-list {
            font-size: 1.1rem;
            color: #fff;
            line-height: 1.8rem;
            margin-bottom: 2rem;
            font-family: 'Montserrat';
          }

          .other-part {
             font-size: 1.3rem;
            color: #F4D4B7;
          }

          .links a {
            font-size: 1.1rem;
            color: #F4D4B7;
            text-decoration: none;
            margin-right: 1.5rem;
            position: relative;
            padding-bottom: 2px;
          }

          .links a:hover {
            border-bottom: 2px solid #F4D4B7;
          }

          .section-image img {
            width: 100%;
            max-width: 600px;
            border-radius: 8px;
            margin: 2rem 0;
          }

          .subtitle {
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #fff;
          }

          .links-section {
            margin-bottom: 3rem;
          }

          .photographs img {
            width: 100%;
            max-width: 400px;
            border-radius: 10px;
            margin: 1rem 0;
          }

          @media (max-width: 768px) {
            .wrapper {
              padding: 1rem;
            }

            .title {
              font-size: 2rem;
            }

            .subtitle {
              font-size: 1.5rem;
            }

            .description {
              font-size: 1rem;
            }
          }
        `}
      </style>
      <div className="wrapper">
        <div className="main-grid">
          <div className="main-content">
            <header className="intro">
              <h1 className="intro-title">Hey 👋 I'm Thosyn Pax</h1>
              <h3 className="intro-current-job">
               A Product Architect and Tech Entrepreneur
              
              </h3>
               <span className="other-part">Basically, I focus on turning ideas into working solutions that people actually want to use.</span>
               
            </header>
            {/* Image shown only on mobile */}
            <div className="image-content2 mobile-only">
              <img src={TP} alt="Thosyn Pax" />
            </div>
          </div>
          
          
          <div className="image-content">
            <img src={TP} alt="Thosyn Pax" />
          </div>

          {/* Styles */}
          <style jsx>{`
            .skills {
              text-align: left;
              padding: 2rem;
              color: white;
            }
          /* Hide the new image by default on larger screens */
          .mobile-only {
            display: none !important;
          }

          /* Show the image below the header only on mobile */
          @media (max-width: 768px) {
            .mobile-only {
              display: block !important;
              text-align: center;
              position: relative;
              top: 40px;
              margin: calc(-50vw + 50%);
            }
              

            .image-content {
            display: none;
            }

              .mobile-only img {
                width: 100%;
                height: auto;
              }
          }


            .skills-heading {
              font-size: 1.8rem;
              margin-bottom: 1rem;
              display: flex;
              justify-content: left;
              align-items: left;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
              gap: 1rem;
              padding: 1rem;
              justify-content: left;
              align-items: left;
            }
            .skill-item {
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: left;
            }
            .skill-image {
              width: 60px;
              height: 60px;
              object-fit: contain;
              display: block;
            }
            .skill-name {
              margin-top: 0.5rem;
              font-size: 1rem;
              font-family: "Inter";
              display: flex;
              justify-content: left;
              align-items: left;
            }
            @media (max-width: 768px) {
              .skills {
                padding: 1rem;
              }
              .skills-heading {
                font-size: 1.4rem;
              }
              .skills-grid {
                grid-template-columns: repeat(3, minmax(90px, 1fr));
                gap: 0.5rem;
              }
              .skill-image {
                width: 45px;
                height: 45px;
              }
              .skill-name {
                font-size: 0.85rem;
              }
            }
              /* Mobile Responsive Styles with Animations */
.projects-container {
  font-family: 'Noto Serif Display', serif;
  color: #000;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
  margin-top: -20px;
}

.projects-teal-section {
  background-color: #f4d4b7;
  padding: 2rem 2rem 9rem 2rem;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  animation: fadeIn 0.8s ease-out;
}

.projects-teal-content {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}

.projects-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
  animation: slideUp 0.6s ease-out;
}

.projects-intro {
  font-size: 1rem;
  line-height: 1.6;
  color: #000;
  margin: 0 auto;
  max-width: 90%;
  animation: fadeIn 1s ease-out;
  font-family: 'Montserrat', sans-serif;
}

.projects-grid-container {
  background-color: #000;
  padding: 2rem 2rem;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 100%;
  margin: 0 auto;
  margin-top: -120px;
}

.project-card {
  background-color: #111;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
  border: none;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.project-content {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
}

.project-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #fff;
}

.project-description {
  color: #aaa;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.project-link {
  color: #008080;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.project-link a {
  color: #008080;
  text-decoration: none;
}

.project-status {
  color: #f4d4b7;
  font-size: 0.9rem;
  font-style: italic;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tablet Styles (min-width: 768px) */
@media (min-width: 768px) {
  .projects-teal-section {
    padding: 9rem 8rem;
  }
  
  .projects-title {
    font-size: 2.2rem;
  }
  
  .projects-intro {
    font-size: 1.1rem;
    max-width: 80%;
  }
  
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 0 2rem;
    margin-top: -120px;
  }
  
  .project-card {
    padding: 2rem;
  }
}

/* Desktop Styles (min-width: 1024px) */
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
  }
}
  .collaboration-section {
  background-color: #000;
  padding: 3rem 1rem;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.collaboration-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.collaboration-title {
  font-size: 1.5rem;
  color: #f4d4b7;
  margin-bottom: 1rem;
  font-family: 'Montserrat';
}

.collaboration-text {
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: 'Montserrat';
}

.collaboration-text strong {
  color: #aaa;
}

.collaboration-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Montserrat';
  border-radius: 20px;
}

.resume-button {
  background-color: #008080;
  color: white;
  border: 2px solid #008080;
}

.email-button {
  background-color: transparent;
  color: #008080;
  border: 2px solid #008080;
}

.resume-button:hover {
  background-color: #006666;
  border-color: #006666;
}

.email-button:hover {
  background-color: rgba(0, 128, 128, 0.1);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .collaboration-section {
    padding: 2rem 1rem;
  }
  
  .collaboration-title {
    font-size: 1.3rem;
  }
  
  .collaboration-text {
    font-size: 0.95rem;
  }
  
  .cta-button {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 200px;
    border-radius: 20px;
  }
  
  .collaboration-buttons {
    flex-direction: column;
    align-items: center;
  }
}
  .collaboration-text {
  font-size: 16px;
  }
  .link-icon {
  margin-left: 4px;
  font-size: 0.8em;
  color: inherit;
}
  .description-list li a {
  color: #f4d4b7;
  text-decoration: none;
  }

/* Or for the SVG version */
.link-icon {
  margin-left: 4px;
  width: 12px;
  height: 12px;
  vertical-align: middle;
}

.view-all-button-wrapper {
  margin-top: 2rem;
  text-align: center;
}

.view-all-button {
  background-color: #f4d4b7;
  color: #000;
  padding: 0.75rem 2rem;
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.view-all-button:hover {
  background-color: #e2bc9f;
}
  em {
  color: #f4d4b7;
  }


          `}</style>
        </div>
         
        <br />
        <br />
        <br />
        <div className="full-width-black">
            <div className="black-section">
                <section className="content-section container">
                  <div className="brief-content">
                          <p>
                            My story isn't just about coding and designing, 
                            I work with founders and early-stage teams to bring their ideas to life, 
                            from the first sketch to a working product. Using my background in UX design,
                             business analysis, and technical product design and development, 
                             I help define what needs to be built, plan the right features, design smooth user experiences, and 
                             guide the technical process until it’s launched. 
                             I focus on making useful tools that people can actually use and businesses can grow with.
                          </p>
                  </div>

                    <h2 className="roles-grid">Current Roles & Impact</h2><br />
                      <ul className="description-list">
                        {/**   <li>
                            <b>Afriheals Careers</b><br />
                            Mentor & Tech Instructor
                          </li>
                        */}
                          <li>
                            <b><a href="https://thepaxcompany.xyz/" target="_blank">The Pax Company</a></b><br />
                            Startup Product Architect<br />
                            UX Engineer, Technical Product Designer <br />
                            <em>Building MVPs for startups in Fintech, Edtech, and Productivity. 3 startups in pipeline.</em>
                          </li>
                          <li>
                            <b><a href="https://www.inmail.ng" target="_blank">Inflect Innovations</a></b><br />
                            Technical Co-Founder <br />
                            <em>Innovating Africa with Advanced Tecnology</em>
                          </li>
                    </ul>
                </section>       
            </div>
        </div>
        
      </div>

      <div className="projects-container">
        {/* Teal-colored header section */}
        <div className="projects-teal-section">
          <div className="projects-teal-content">
            <h1 className="projects-title">My Startup Projects</h1>
            <p className="projects-intro">
             I'm passionate about digital products. Extensive experience using various apps gave me valuable user insights.
             <br /> Now I apply that perspective to design and build my own solutions that people love to use.
            </p>
          </div>
        </div>

        {/* Grid starts immediately after teal section */}
        <div className="projects-grid-container">
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-name">Afriheals Careers</h3>
                <p className="project-description">A Tech Community, connecting tech enthusiasts to job opportunities, bootcamps, webinars, courses, etc.</p>
                <p className="project-link">
                  <a href="/works/afriheals-careers" rel="noopener noreferrer">
                    read more <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
                  </a>
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-name">Afribreath</h3>
                <p className="project-description">A Virtual Internship Startup for tech newbies and mid levels</p>
                 <p className="project-link">
                  <a href="/works/afribreath" rel="noopener noreferrer">
                    read more <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
                  </a>
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-content">
                <h3 className="project-name">Karpture (Formerly ClipKip)</h3>
                <p className="project-description">Chrome Extension to Save copied text to use anytime</p>
                 <p className="project-link">
                  <a href="/works/karpture" rel="noopener noreferrer">
                    read more <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
                  </a>
                </p>
              </div>
            </div>
          </div>
         {/* All projects Button 
          <div className="view-all-button-wrapper">
              <Link to="/projects" className="view-all-button">
                View All Projects
              </Link>
          </div>
                   */}
        </div>
    </div>

    <div className="collaboration-section">
  <div className="collaboration-content">
    <h3 className="collaboration-title">Open for New Opportunities</h3>
    <p className="collaboration-text">
      I collaborate with early-stage founders, investors, and teams to design, architect, and scale digital/physical products. Let’s build something bold together.
    </p>
    <div className="collaboration-buttons">
      <a href="https://www.thepaxcompany.xyz/" className="cta-button resume-button">
       I have an Idea
      </a>
      <a href="mailto:thosynpax@gmail.com" className="cta-button email-button">
        Email Me
      </a>
    </div>
  </div>
</div>
      
  </main>
  );
};

export default Main;