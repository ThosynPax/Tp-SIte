import React from 'react';
import { Link } from 'react-router-dom';

const LabMagazine = () => {
  const issues = [
    {
      id: 'mag-01',
      title: 'Issue #1: Scaling',
      desc: 'Zero to 10 Million Users - Core systems architecture & database sizing.',
      cover: '/hero.jpg'
    },
    {
      id: 'mag-02',
      title: 'Issue #2: AI Agents',
      desc: 'Designing robust AI agent feedback loops and LLM parsing pipelines.',
      cover: '/hero.jpg'
    },
    {
      id: 'mag-03',
      title: 'Issue #3: Dev Speed',
      desc: 'The Vibecoder\'s Playbook excerpts: prompt orchestration & fast loops.',
      cover: '/hero.jpg'
    }
  ];

  return (
    <div className="lab-subpage-wrapper">
      <div className="lab-subpage-container">
        <Link to="/lab" className="lab-back-link">
          <i className="fas fa-arrow-left"></i> Back to Product Lab
        </Link>
        
        <h1 className="lab-subpage-title">Magazine</h1>

        <div className="lab-magazine-container" style={{ animation: 'fadeIn 0.5s ease' }}>
          <div className="album-grid">
            {issues.map((issue) => (
              <div key={issue.id} className="album-card">
                <div className="album-cover-wrapper">
                  <img src={issue.cover} alt={issue.title} className="album-cover" />
                  <button className="card-play-btn"><i className="fas fa-book-open"></i></button>
                </div>
                <div className="album-info">
                  <h4 className="album-title">{issue.title}</h4>
                  <p className="album-subtext">{issue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabMagazine;
