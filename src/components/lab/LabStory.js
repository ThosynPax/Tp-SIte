import React from 'react';

const LabStory = () => {
  return (
    <div className="lab-story-container" style={{ animation: 'fadeIn 0.5s ease', maxWidth: '720px', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.85)' }}>
      <div className="verified-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: '#3b82f6', marginBottom: '1rem' }}>
        <i className="fas fa-check-circle"></i>
        <span>Verified Product Architect</span>
      </div>
      
      <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
        I lead with a "Product Architect" mindset—bridging the gap between deep technical infrastructure and market-ready products. I specialize in scaling operational engines, guiding developer frameworks, and structuring code architectures for speed.
      </p>
      
      <blockquote style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '1.25rem', fontStyle: 'italic', color: '#fff', fontSize: '1.1rem', margin: '1.5rem 0' }}>
        "Theoretical designs are blueprint artifacts. The factory floor is where products are tested, shipped, and scaled. My role is to bridge that chasm."
      </blockquote>
      
      <p style={{ marginBottom: '1.5rem' }}>
        Currently managing product operations at Cre8fast. Running fast execution loops, exploring next-generation AI agent integration layers, and compiling code design blueprints.
      </p>

      <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Rapid Execution</h4>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Building and shipping products in weeks, not months, utilizing AI-assisted developer workflows.</p>
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Architectural Scale</h4>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Designing infrastructure capable of managing millions of users and high volumes of backend jobs.</p>
        </div>
      </div>
    </div>
  );
};

export default LabStory;
