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
          {/** Afribreath */}
          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://standardtimesng.com/" className="project-link">
                Standard Times NG <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              I created a news website using WordPress, designed to fit the needs of a newspaper company.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          {/** Chrome Extension */}
          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://hagitalconsulting.com//" className="project-link">
                Hagital Consulting  <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Created a dynamic Content Management System (CMS) website catering to the distinct demands of a technology training company.
              </div>
              <div className="project-tags">WP</div>
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

           {/** Chrome Extension */}
           <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://roaddaysconsults.com/" className="project-link">
                Roaddays Consults  <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Crafted a fundamental website catering to the needs of a travel agency company, focusing on design and functionality.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://soderuandsoderu.com.ng/" className="project-link">
                Soderu and Soderu  <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Crafted a fundamental website catering to the needs of a travel agency company, focusing on design and functionality.
              </div>
              <div className="project-tags">WP</div>
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
                <a target="_blank" href="https://confiinitiative.com/" className="project-link">
                Confi Initiative <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Crafted a website for a non-governmental organization (NGO) while also designing numerous graphic flyers to support their cause.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://kingdasilvafoundation.com/" className="project-link">
                King Da Silva Foundation <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Designed and built an online presence for an NGO to keeping track of the work progress.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://argentstoragebv.com/" className="project-link">
                Argent Storage <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Created a website for a business specializing in the sales, delivery, and maintenance of oil and gas tanks.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://tjongershippingbv.nl/" className="project-link">
                tjonger Shipping <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Created a website for a business specializing in the sales, delivery, and maintenance of oil and gas tanks.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://shalomwomenfoundation.com/" className="project-link">
                Shalom Women Foundation <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Created a website for a business specializing in the sales, delivery, and maintenance of oil and gas tanks.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://tmpalmersolicitors.com/" className="project-link">
                TM Palmer Solicitor <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Developed a website for a law firm, providing comprehensive legal services and resources.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>

          <div className="project">
            <div className="project-details">
              <div className="project-title">
                <a target="_blank" href="https://hubwrightgroup.com/" className="project-link">
               HubWright Groups <FontAwesomeIcon icon={faLink} className="link-icon" />
                </a>
              </div>
              <div className="project-description">
              Developed a website for a law firm, providing comprehensive legal services and resources.
              </div>
              <div className="project-tags">WP</div>
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
              Developed a website for a law firm, providing comprehensive legal services and resources.
              </div>
              <div className="project-tags">WP</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
