import React from 'react';
import { Link } from 'react-router-dom';

const LabResources = () => {
  return (
    <div className="lab-resources-container" style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="resources-banner">
        <div className="resources-banner-info">
          <h3 className="resources-banner-title">Product Lab Technical Templates</h3>
          <p className="resources-banner-desc">
            Access free technical blueprints, database model templates, and developer utility tools specifically structured to jumpstart your build.
          </p>
        </div>
        <Link to="/resources" className="resources-banner-btn">
          <span>Access Resources</span>
          <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
        </Link>
      </div>
    </div>
  );
};

export default LabResources;
