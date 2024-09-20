import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Media = () => {
  return (
    <main className="site-body">
      <style>
        {`
          .wrapper {
            width: 100%;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .main-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 2rem;
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
            font-size: 1rem;
            color: #cccccc;
            margin-bottom: 0.5rem;
             font-family: "Montserrat";
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
            Discover how I’ve combined user experience design and software engineering<br /> to create impactful
             solutions and deliver successful results.</h4>
        </header>

        {/** Grid starts below the header */}
        <div className="main-grid">
          {/** Afribreath */}
          <div className="project">
            <div className="year">2018</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="http://afribreath.com/" className="project-link">
                  Afribreath <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
                Afribreath is a pioneering tech company committed to transforming the tech landscape in Africa.
              </div>
              <div className="project-tags">Startup</div>
            </div>
          </div>

          {/** Afriheals Careers */}
          <div className="project">
            <div className="year">2024</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="http://afribreath.com/" className="project-link">
                  Afriheals Careers <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
                We are fostering innovation, collaboration, and knowledge-sharing among tech enthusiasts of all levels.
              </div>
              <div className="project-tags">Tech Community</div>
            </div>
          </div>

          {/** Chrome Extension */}
          <div className="project">
            <div className="year">2024</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://afriheals.afribreath.com/" className="project-link">
                  Chrome Extension
                </a>
              </div>
              <div className="project-description">
                An Extension to jot down and reuse ideas
              </div>
              <div className="project-tags">Javascript • Express • Mongo db</div>
            </div>
          </div>

           {/** Chrome Extension */}
           <div className="project">
            <div className="year">2024</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://afriheals.afribreath.com/" className="project-link">
                  Chrome Extension
                </a>
              </div>
              <div className="project-description">
                An Extension to jot down and reuse ideas
              </div>
              <div className="project-tags">Javascript • Express • Mongo db</div>
            </div>
          </div>

           {/** Chrome Extension */}
           <div className="project">
            <div className="year">2024</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://afriheals.afribreath.com/" className="project-link">
                  Chrome Extension
                </a>
              </div>
              <div className="project-description">
                An Extension to jot down and reuse ideas
              </div>
              <div className="project-tags">Javascript • Express • Mongo db</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Media;
