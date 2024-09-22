import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Bytes = () => {
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

          .project {
            background-color: #1a1a1a;
            padding: 1.5rem;
            border-radius: 10px;
            transition: transform 0.2s ease;
          }

          .svg-inline--fa {
              display: var(--fa-display, inline-block);
              height: 0.7em;
              overflow: visible;
              vertical-align: -0.125em;
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
            font-size: 1.2rem;
            color: #ffe666;
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
          <h1 className="intro-title">Billion Bytes</h1>
          <h4 className="intro-current-job">Check out my "Billion Bytes" page, where I showcase personal projects<br />
             I've worked on and continue to pursue as an indie hacker and startup founder. <br />
             See how I've been turning ideas into reality and driving innovation in my ventures.</h4>
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
            <div className="year">2023</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://afriheals.afribreath.com/" className="project-link">
                  Shape.lol
                </a>
              </div>
              <div className="project-description">
                An Extension to jot down and reuse ideas
              </div>
              <div className="project-tags">React • Express • Mongo db</div>
            </div>
          </div>

          <div className="project">
            <div className="year">2023</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://afriheals.afribreath.com/" className="project-link">
                 Nerdbox
                </a>
              </div>
              <div className="project-description">
                An Extension to jot down and reuse ideas
              </div>
              <div className="project-tags">React • Express • Mongo db</div>
            </div>
          </div>

          <div className="project">
            <div className="year">2023</div>
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://afriheals.afribreath.com/" className="project-link">
                  Pax School of Africa
                </a>
              </div>
              <div className="project-description">
                An Extension to jot down and reuse ideas
              </div>
              <div className="project-tags">React • Express • Mongo db</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bytes;
