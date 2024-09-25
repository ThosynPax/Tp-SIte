import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <main className="site-body">
      <style>
        {`  
          /* Desktop Table Styles */
          .project-table {
            width: 100%;
            border-spacing: 0 15px;
          }
          .project-table th,
          .project-table td {
            padding: 1rem;
            text-align: left;
          }
          .project-table th {
            font-size: 1rem;
            text-transform: uppercase;
            color: #8892b0;
            font-weight: 600;
          }
          .project-table td {
            background-color: #112240;
            border-radius: 8px;
            color: #fff;
          }
          .project-table a {
            color: #64ffda;
            text-decoration: none;
            display: flex;
            align-items: center;
          }
          .project-table a:hover {
            text-decoration: underline;
          }
          .year {
            color: #8892b0;
          }
          .project-table td a span {
            margin-left: 0.5rem;
            font-size: 0.75rem;
          }

          /* Mobile-first styles */
          @media (max-width: 768px) {
            .project-table {
              display: none; /* Hide table on mobile */
            }
            .project-list {
              display: block; /* Show the project list on mobile */
              width: 100%;
            }
            .project-row {
              display: flex;
              justify-content: space-between;
              padding: 1rem;
              background-color: #112240;
              border-radius: 8px;
              margin-bottom: 1rem;
            }
            .project-year {
              font-weight: bold;
              color: #8892b0;
            }
            .project-name {
              text-align: right;
            }
            .project-name a {
              color: #64ffda;
              text-decoration: none;
              display: flex;
              align-items: center;
            }
            .project-name a:hover {
              text-decoration: underline;
            }
          }
        `}
      </style>

      <div className="wrapper">
        <h1 className="intro-title">All Projects</h1>

        {/* Desktop Table View */}
        <table className="project-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="year">2023</td>
              <td>
                <a target="_blank" href="https://standardtimesng.com/">
                  Standard Times NG
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2023</td>
              <td>
                <a target="_blank" href="https://hagitalconsulting.com/">
                  Hagital Consulting
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2022</td>
              <td>
                <a href="#">
                  Quick Extractor
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2023</td>
              <td>
                <a target="_blank" href="https://toplagy.eu/">
                  Toplagy.eu
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </td>
            </tr>
            {/* Add more projects as necessary */}
          </tbody>
        </table>

        {/* Mobile List View */}
        <div className="project-list">
          <div className="project-row">
            <span className="project-year">2023</span>
            <span className="project-name">
              <a target="_blank" href="https://standardtimesng.com/">
                Standard Times NG
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2023</span>
            <span className="project-name">
              <a target="_blank" href="https://hagitalconsulting.com/">
                Hagital Consulting
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2022</span>
            <span className="project-name">
              <a href="#">
                Quick Extractor
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2023</span>
            <span className="project-name">
              <a target="_blank" href="https://toplagy.eu/">
                Toplagy.eu
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          {/* Add more projects as necessary */}
        </div>
      </div>
    </main>
  );
};

export default Projects;
