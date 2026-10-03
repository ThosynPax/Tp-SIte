import React from 'react';
import { Link } from 'react-router-dom';

const LabNewsletter = () => {
  const feeds = [
    {
      id: 'substack',
      title: 'Substack',
      desc: 'The Weekly Architecture Audit',
      url: 'https://substack.com/@thosynpax',
      cover: '/hero.jpg'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      desc: 'Weekly engineering & career posts',
      url: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7325566398129225728',
      cover: '/hero.jpg'
    }
  ];

  return (
    <div className="lab-subpage-wrapper">
      <div className="lab-subpage-container">
        <Link to="/lab" className="lab-back-link">
          <i className="fas fa-arrow-left"></i> Back to Product Lab
        </Link>
        
        <h1 className="lab-subpage-title">Newsletter</h1>

        <div className="lab-newsletter-container" style={{ animation: 'fadeIn 0.5s ease' }}>
          <div className="album-grid">
            {feeds.map((feed) => (
              <a 
                key={feed.id} 
                href={feed.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="album-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="album-cover-wrapper">
                  <img loading="lazy" src={feed.cover} alt={feed.title} className="album-cover" />
                  <button className="card-play-btn"><i className="fas fa-play"></i></button>
                </div>
                <div className="album-info">
                  <h4 className="album-title">{feed.title}</h4>
                  <p className="album-subtext">{feed.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabNewsletter;
