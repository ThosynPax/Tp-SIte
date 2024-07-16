import React from 'react';
import '../App.css';
import '../assets/bytes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Bytes = () => {
  return (
    <main className="site-body">
      <div className="wrapper">
        <div className="main-grid">
            <header className="intro">
              <h1 className="intro-title">Billion Bytes</h1>
              <h4 className="intro-current-job">My Projects and Startups </h4>
            </header> 
            
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
                <div className="project-tags">
                  Startup
                </div>
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
                <div className="project-tags">
                  Tech Community
                </div>
              </div>
            </div>

             {/** Chrome Extention */}
            <div className="project">
              <div className="year">2024</div>
              <div className="project-details">
                <div className="project-title">
                  <a target="_blank" href="https://afriheals.afribreath.com/" className="project-link">
                    Chrome Extension {/**  <FontAwesomeIcon icon={faLink} className="link-icon" /> */}
                  </a>
                </div>
                <div className="project-description">
                An Extension to jot down and reuse ideas
                </div>
                <div className="project-tags">
                  Javascript • Express • Mongo db
                </div>
              </div>
            </div>


        </div>
      </div>
    </main>
  );
}


export default Bytes;
