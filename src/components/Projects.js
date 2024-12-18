import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <main className="site-body">
      <style>
        {`

          .main-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 2rem;
          }

          .svg-inline--fa {
            display: var(--fa-display, inline-block);
            height: 0.7em;
            overflow: visible;
            vertical-align: -0.125em;
          }

          .project {
            background-color: #1a1a1a;
            padding: 1.5rem;
            border-radius: 10px;
            transition: transform 0.2s ease;
          }

          .project:hover {
            transform: scale(1.05);
          }

          .year {
            font-size: 1.2rem;
            font-weight: bold;
            color: #999;
            margin-bottom: 0.5rem;
          }

          .project-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }

          .project-title a {
            color: #ffffff;
            text-decoration: none;
          }

          .project-description {
           font-size: 15px;
            line-height: 1.5;
            color: #cccccc;
            margin-bottom: 0.5rem;
            font-family: "Montserrat";
            font-weight: 400;
          }

          .project-tags {
            font-size: 0.9rem;
            color: #66ffcc;
          }

          @media (max-width: 1200px) {
            .main-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .main-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 480px) {
            .main-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="wrapper">
        {/** Moved the header outside the grid */}
        <header className="intro">
          <h1 className="intro-title">Projects</h1>
          <h4 className="intro-current-job"> See the projects I've completed as a UX Unicorn and Software Engineer.<br /> 
            Discover how I’ve combined user experience design and software engineering to create impactful
             solutions and deliver successful results.</h4>
        </header>

        {/** Grid starts below the header */}
        <div className="main-grid">

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="#" className="project-link">
               Quick Extractor <FontAwesomeIcon icon={faLock} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Developed a web application capable of extracting and organizing contact details from various sources, such as emails, or web pages. 
              </div>
              <div className="project-tags">EJS • Mongodb • Figma</div>
            </div>
          </div>

           {/** Chrome Extension */}
           <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://toplagy.eu/" className="project-link">
                Toplagy.eu  <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Designed and crafted a tailor-made Shopify e-commerce website for a clothing brand, including the composition of raw Liquid scripts to enhance the platform's functionality.
              </div>
              <div className="project-tags">Shopify • Liquid • Figma</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://www.t20luxury.eu/" className="project-link">
                T20luxury.eu <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Designed and crafted a tailor-made Shopify e-commerce website for a clothing brand, including the composition of raw Liquid scripts to enhance the platform's functionality.
              </div>
              <div className="project-tags">Shopify • Liquid • Figma</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="#" className="project-link">
               CPD <FontAwesomeIcon icon={faLock} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Developed a Complaint Management System designed to streamline the process of logging, tracking, and resolving customer complaints.
              </div>
              <div className="project-tags">PHP • Javascript • MYSQL</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="#" className="project-link">
              Injection Reports <FontAwesomeIcon icon={faLock} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Oil and Gas report and analytics
              </div>
              <div className="project-tags">PHP • Javascript • MYSQL</div>
            </div>
          </div>
        </div>

        <h2>
           <a style={{ color: "#fff" }} href="/archives" className="project-link">
         View All Project Archive</a>
        </h2>
        
      </div>
    </main>
  );
};

export default Projects;
