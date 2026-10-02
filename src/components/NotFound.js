import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="hektor-404-container">
      <div className="hektor-404-content">
        <h1 className="hektor-404-title">404</h1>
        <h2 className="hektor-404-subtitle">Page Not Found</h2>
        <p className="hektor-404-desc">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="hektor-404-actions">
          <Link to="/lab" className="hektor-btn hektor-btn-dark">
            Back to The Lab
          </Link>
          <Link to="/" className="hektor-btn hektor-btn-outline">
            Main Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
