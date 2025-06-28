import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLock } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <main className="site-body">
      <style>
        {`
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
          padding: 4rem 2rem 8rem 2rem;
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
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #000;
          animation: slideUp 0.6s ease-out;
        }

        .projects-intro {
          font-size: 1.1rem;
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
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
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
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

        .project-tags {
          font-size: 0.9rem;
          color: #66ffcc;
        }

        .link-icon {
          margin-left: 4px;
          font-size: 0.8em;
          color: inherit;
        }

        .view-archive-wrapper {
          margin-top: 2.5rem;
          text-align: center;
          background-color: #000;
          padding-bottom: 4rem;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
        }

        .view-archive-button {
          background-color: #f4d4b7;
          color: #000;
          padding: 0.8rem 2rem;
          border-radius: 24px;
          font-weight: 600;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .view-archive-button:hover {
          background-color: #e2bc9f;
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>

      <div className="projects-container">
        <div className="projects-teal-section">
          <div className="projects-teal-content">
            <h1 className="projects-title">All Projects</h1>
            <p className="projects-intro">
              See the projects I've completed as a UX Unicorn and Software Engineer. Discover how I combine user experience design and full-stack development to create impactful solutions that ship.
            </p>
          </div>
        </div>

        <div className="projects-grid-container">
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <h3 className="project-name">
                Quick Extractor <FontAwesomeIcon icon={faLock} className="link-icon" />
              </h3>
              <p className="project-description">
                Web app that extracts and organizes contact details from emails or web pages.
              </p>
              <p className="project-tags">EJS • MongoDB • Figma</p>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <h3 className="project-name">
                Toplagy.eu <FontAwesomeIcon icon={faLink} className="link-icon" />
              </h3>
              <p className="project-description">
                Custom Shopify store for a fashion brand. Liquid scripting and design optimization included.
              </p>
              <p className="project-tags">Shopify • Liquid • Figma</p>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <h3 className="project-name">
                T20luxury.eu <FontAwesomeIcon icon={faLink} className="link-icon" />
              </h3>
              <p className="project-description">
                Another full Shopify e-commerce platform for a luxury fashion brand.
              </p>
              <p className="project-tags">Shopify • Liquid • Figma</p>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <h3 className="project-name">
                CPD <FontAwesomeIcon icon={faLock} className="link-icon" />
              </h3>
              <p className="project-description">
                Complaint Management System for tracking and resolving customer issues.
              </p>
              <p className="project-tags">PHP • JS • MySQL</p>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <h3 className="project-name">
                Injection Reports <FontAwesomeIcon icon={faLock} className="link-icon" />
              </h3>
              <p className="project-description">
                Internal analytics tool for oil & gas operations.
              </p>
              <p className="project-tags">PHP • JS • MySQL</p>
            </div>
          </div>
        </div>

        <div className="view-archive-wrapper">
          <a href="/archives" className="view-archive-button">
            View All Project Archive
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
