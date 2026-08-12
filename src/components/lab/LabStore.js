import React from 'react';

const LabStore = () => {
  return (
    <div className="lab-store-container" style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="new-release-layout">
        <img src="/ebook2.jpg" alt="The Vibecoder's Playbook Cover" className="release-book-cover" />
        <div className="release-info">
          <span className="sleeve-category-tag" style={{ color: '#ec4899' }}>EBOOK RELEASE</span>
          <h3 className="release-title">The Vibecoder's Playbook</h3>
          <p className="release-desc">
            Build high-performance tech products with AI assistant orchestration without losing your mind. Full framework logs, code generation strategies, and development velocity tools.
          </p>
          <a href="/vibecoding-playbook/?v=2.1" target="_blank" rel="noopener noreferrer" className="release-btn">
            <i className="fas fa-shopping-cart"></i>
            <span>Buy Playbook →</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LabStore;
