import React from 'react';
import { Link } from 'react-router-dom';

const LabStore = () => {
  return (
    <div className="lab-subpage-wrapper">
      <div className="lab-subpage-container">
        <Link to="/lab" className="lab-back-link">
          <i className="fas fa-arrow-left"></i> Back to Product Lab
        </Link>
        
        <h1 className="lab-subpage-title">Store</h1>

        <div className="lab-store-container" style={{ animation: 'fadeIn 0.5s ease' }}>
          <div className="new-release-layout">
            <img src="/ebook2.jpg" alt="The Vibecoder's Playbook Cover" className="release-book-cover" />
            <div className="release-info">
              <span className="sleeve-category-tag" style={{ color: '#ec4899', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>EBOOK RELEASE</span>
              <h3 className="release-title" style={{ fontSize: '1.5rem', margin: '0.2rem 0' }}>The Vibecoder's Playbook</h3>
              <p className="release-desc" style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                Build high-performance tech products with AI assistant orchestration without losing your mind. Full framework logs, code generation strategies, and development velocity tools.
              </p>
              <a href="/vibecoding-playbook/?v=2.1" target="_blank" rel="noopener noreferrer" className="release-btn" style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}>
                <i className="fas fa-shopping-cart"></i>
                <span>Buy Playbook →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabStore;
