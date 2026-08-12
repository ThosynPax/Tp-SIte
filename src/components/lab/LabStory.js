import React from 'react';
import { Link } from 'react-router-dom';

const LabStory = () => {
  return (
    <div className="lab-subpage-wrapper">
      <div className="lab-subpage-container">
        <Link to="/lab" className="lab-back-link">
          <i className="fas fa-arrow-left"></i> Back to Product Lab
        </Link>
        
        <h1 className="lab-subpage-title">Story</h1>
        
        <div style={{ animation: 'fadeIn 0.5s ease', lineHeight: '1.7', color: 'var(--text-color)' }}>
          <div className="verified-badge">
            <i className="fas fa-check-circle"></i>
            <span>Verified Product Architect</span>
          </div>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            I lead with a "Product Architect" mindset—bridging the chasm between deep technical infrastructure and market-ready products. I specialize in scaling operational engines, guiding developer frameworks, and structuring code architectures for speed.
          </p>
          
          <blockquote style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '1.25rem', fontStyle: 'italic', color: 'var(--text-color)', fontSize: '1.15rem', margin: '2rem 0' }}>
            "Theoretical designs are blueprint artifacts. The factory floor is where products are tested, shipped, and scaled. My role is to bridge that chasm."
          </blockquote>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Currently managing product operations at Cre8fast. Running fast execution loops, exploring next-generation AI agent integration layers, and compiling code design blueprints.
          </p>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px' }}>
              <h4 style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Rapid Execution</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)', margin: 0 }}>Building and shipping products in weeks, not months, utilizing AI-assisted developer workflows.</p>
            </div>
            <div style={{ flex: '1 1 250px' }}>
              <h4 style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Architectural Scale</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)', margin: 0 }}>Designing infrastructure capable of managing millions of users and high volumes of backend jobs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabStory;
