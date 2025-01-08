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
          .project-list {
              display: none;
              width: 100%;
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
            background-color: #1a1a1a;
            border-radius: 8px;
            color: #f0f5f8;
            font-family: 'Montserrat';
            font-weight: 300;
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
              display: none; 
            }
            .project-list {
              display: block;
              width: 100%;
            }
            .project-row {
              display: flex;
              justify-content: space-between;
              padding: 1rem;
              background-color: #1a1a1a;
              border-radius: 8px;
              margin-bottom: 1rem;
              font-family: 'Montserrat';
            }
            .project-year {
              font-weight: bold;
              color: #8892b0;
            }
            .project-name {
              text-align: right;
            }
            .project-name a {
              color: #6c6d70;
              text-decoration: none;
              display: flex;
              align-items: center;
            }
            .project-name a:hover {
              text-decoration: underline;
            }
          }
             .project-tags {
          display: flex;
          gap: 10px;
        }

        .project-tags span.tag {
          padding: 2px 5px;
          background-color: #ffe666;
          border-radius: 10px;
          color: #000; /* Light blue text */
          font-size: 12px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }
        `}
      </style>

      <div className="wrapper">
        <h1 className="intro-title">All Projects Archives</h1>

        {/* Desktop Table View */}
        <table className="project-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th>Stack & Tools</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="year">2025</td>
              <td>
             Tope Olajide
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://topeolajide.com/">
              https://topeolajide.com/
                </a>
              </td>
            </tr>
          <tr>
              <td className="year">2024</td>
              <td>
             TekLearn
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://teklearn.org/">
              https://teklearn.org/
                </a>
              </td>
            </tr>
          <tr>
              <td className="year">2024</td>
              <td>
             De-OrganicMaster
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://deorganicmaster.com/">
              https://deorganicmaster.com
                </a>
              </td>
            </tr>
          <tr>
              <td className="year">2024</td>
              <td>
              Argent Storage
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://argentstoragebv.com/">
              https://argentstoragebv.com/
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2024</td>
              <td>
              tjonger Shipping
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://tjongershippingbv.com/">
              https://tjongershippingbv.com/
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2024</td>
              <td>
              Shalom Women Foundation
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://shalomwomenfoundation.com/">
              https://shalomwomenfoundation.com/
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2024</td>
              <td>
              TM Palmer Solicitor
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://tmpalmersolicitors.com/">
              https://tmpalmersolicitors.com/
                </a>
              </td>
            </tr>

            <tr>
              <td className="year">2024</td>
              <td>
              HubWright Groups
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://hubwrightgroup.com/">
              https://hubwrightgroup.com/
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2023</td>
              <td>
              King Da Silva Foundation
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://kingdasilvafoundation.com/">
              https://kingdasilvafoundation.com/
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2021</td>
              <td>Hagital Consulting</td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://hagitalconsulting.com">
              https://hagitalconsulting.com
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2020</td>
              <td>
              Confi Initiative 
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                  <span className="tag">Figma</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://confiinitiative.com/">
              https://confiinitiative.com/
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2019</td>
              <td>
               Roaddays Consults 
              </td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                  <span className="tag">Logo</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://roaddaysconsults.com/">
              https://roaddaysconsults.com/
                </a>
              </td>
            </tr>
            <tr>
              <td className="year">2018</td>
              <td>Standard Times NG</td>
              <td>
                <div className="project-tags">
                  <span className="tag">WP</span>
                  <span className="tag">Photoshop</span>
                  <span className="tag">Logo</span>
                </div>
              </td>
              <td>
              <a target="_blank" href="https://standardtimesng.com/">
                  https://standardtimesng.com/
                </a>
              </td>
            </tr>
            {/* Add more projects as necessary */}
          </tbody>
        </table>

        {/* Mobile List View */}
        <div className="project-list">
          <div className="project-row">
            <span className="project-year">2025</span>
            <span className="project-name">
              <a target="_blank" href="https://topeolajide.com/">
              Tope Olajide
                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>
          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://deorganicmaster.com">
              De-OrganicMaster
                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>
          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://deorganicmaster.com">
              De-OrganicMaster
                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://teklearn.org/">
              TekLearn
                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>
          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://argentstoragebv.com/">
              Argent Storage
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://tjongershippingbv.nl/">
              tjonger Shipping
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://shalomwomenfoundation.com/">
              Shalom Women Foundation
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://tmpalmersolicitors.com/">
              TM Palmer Solicitor
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2024</span>
            <span className="project-name">
              <a target="_blank" href="https://hubwrightgroup.com/">
              HubWright Groups
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>
          <div className="project-row">
            <span className="project-year">2023</span>
            <span className="project-name">
              <a target="_blank" href="https://kingdasilvafoundation.com/">
              King Da Silva Foundation
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2021</span>
            <span className="project-name">
              <a target="_blank" href="https://hagitalconsulting.com/">
              Hagital Consulting
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2020</span>
            <span className="project-name">
              <a target="_blank" href="https://confiinitiative.com/">
              Confi Initiative
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>

          <div className="project-row">
            <span className="project-year">2019</span>
            <span className="project-name">
              <a target="_blank" href="https://roaddaysconsults.com/">
              Roaddays Consults
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>
          
          <div className="project-row">
            <span className="project-year">2018</span>
            <span className="project-name">
              <a target="_blank" href="https://standardtimesng.com/">
              Standard Times NG
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
