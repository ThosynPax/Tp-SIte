import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import useSEO from '../hooks/useSEO';

const Lab = ({ theme }) => {
  useSEO({
    title: 'The Product Lab | Thosyn Pax',
    description: 'Welcome to The Product Lab. I am documenting the journey of building high-scale tech systems and global careers. This is where theory meets the factory floor.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lab-page-layout">
      <style>{`
        body { margin: 0; padding: 0; background: #000; }
        
        .lab-page-layout {
          display: flex;
          padding: 1rem;
          box-sizing: border-box;
          gap: 1rem;
          background-color: transparent;
          font-family: 'Inter', sans-serif;
          align-items: stretch;
          height: calc(100vh - 160px);
          min-height: 550px;
        }

        @media (max-width: 900px) {
          .lab-page-layout {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
          }
        }

        /* --- Left Panel --- */
        .lab-left {
          flex: 0 0 35%;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background-color: #111;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 900px) {
          .lab-left {
            flex: none;
            height: 70vh;
          }
        }

        .lab-left-bg {
          position: absolute;
          inset: 0;
          background-image: url('/Podcast.png');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .lab-left-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%);
          z-index: 1;
        }

        .lab-left-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 2.5rem;
          color: #fff;
        }

        .lab-title {
          font-family: 'Space Mono', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -1px;
        }

        .lab-intro {
          margin-top: auto;
        }

        .lab-intro h2 {
          font-size: 1.25rem;
          margin: 0 0 0.8rem 0;
          font-weight: 600;
        }

        .lab-intro p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 1rem 0;
          max-width: 95%;
        }

        /* --- Right Panel --- */
        .lab-right {
          flex: 1;
          border-radius: 20px;
          background-color: #0b0b0b;
          background-image: linear-gradient(rgba(11, 11, 11, 0.88), rgba(11, 11, 11, 0.96)), url('/hero.png');
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2.5rem 3rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-y: auto;
        }

        @media (max-width: 900px) {
          .lab-right {
            padding: 2rem 1.5rem;
            overflow-y: visible;
          }
        }

        /* Hide Scrollbar */
        .lab-right::-webkit-scrollbar { display: none; }
        .lab-right { -ms-overflow-style: none; scrollbar-width: none; }

        .project-list {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
        }
        .project-row {
          display: grid;
          grid-template-columns: 6.5rem 4.5rem 10rem 20px;
          justify-content: start;
          gap: 1.5rem;
          padding: 0.6rem 0;
          text-decoration: none;
          color: #a0a0a0;
          transition: color 0.2s;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .project-row:last-child { border-bottom: none; }
        .project-row:hover { color: #fff; }
        .header-row { color: #888; padding-bottom: 0.4rem; border-bottom: none; pointer-events: none; }
        .p-name { color: #d0d0d0; transition: color 0.2s; font-weight: 500; }
        .project-row:hover .p-name { color: #fff; }
        .p-status, .p-domain { color: #666; transition: color 0.2s; }
        .project-row:hover .p-status, .project-row:hover .p-domain { color: #aaa; }
        .p-link { color: #444; transition: color 0.2s; text-align: right; font-weight: 600; }
        .project-row:hover .p-link { color: #fff; }

        .lab-projects-wrapper {
          margin-top: 4rem;
        }

        @media (max-width: 900px) {
          .lab-projects-wrapper { order: 4; margin-top: 2rem; margin-bottom: 2rem; }
          .lab-bottom { order: 3; padding-top: 3rem; }
        }

        @media (max-width: 650px) {
          .project-row { grid-template-columns: 2fr 1.2fr 2.5fr 15px; justify-content: stretch; font-size: 0.8rem; gap: 0.5rem; }
        }

        /* Top Nav inside Right Panel */
        .lab-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .lab-top-right {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(255,255,255,0.3);
          font-size: 0.85rem;
          flex-wrap: wrap;
        }
        
        @media (max-width: 650px) {
          .lab-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .lab-top-right {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
          }
        }
        
        .top-link {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .top-link:hover { color: #fff; }

        .lab-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem 1.5rem;
        }

        @media (max-width: 1100px) {
          .lab-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 650px) {
          .lab-grid { grid-template-columns: 1fr; }
        }

        .col-header {
          font-family: 'Space Mono', monospace;
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
        }

        .grid-item {
          margin-bottom: 1.5rem;
        }

        .item-title {
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0 0.4rem 0;
        }

        .item-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0 0 0.8rem 0;
        }

        .item-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .item-link {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .item-link:hover { color: #fff; }
        
        /* Bottom Area */
        .lab-bottom {
          margin-top: auto;
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }

        @media (max-width: 650px) {
          .lab-bottom { flex-direction: column; align-items: stretch; padding-top: 3rem; }
        }

        .cta-button {
          background-color: #071b34;
          color: #fff;
          padding: 1rem 2rem;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.2s;
          display: inline-block;
          text-align: center;
        }
        .cta-button:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* --- Left Panel --- */}
      <div className="lab-left">
        <div className="lab-left-bg" />
        <div className="lab-left-overlay" />
        
        <div className="lab-left-content">
          <h1 className="lab-title">THE PRODUCT LAB</h1>
          
          <div className="lab-intro">
            <h2>Thosyn Pax</h2>
            <p>Welcome to The Product Lab. I am documenting the journey of building high-scale tech systems and global careers.</p>
            <p>"I lead with a 'Product Architect' mindset—bridging the gap between deep technical infrastructure and market-ready products."</p>
          </div>
        </div>
      </div>

      {/* --- Right Panel --- */}
      <div className="lab-right">
        
        <div className="lab-top">
          <Link to="/" className="top-link">← Return to Base</Link>
          <div className="lab-top-right">
            <span>Theory meets the factory floor</span>
          </div>
        </div>

        <div className="lab-grid">
          
          {/* Column 1 */}
          <div>
            <div className="col-header">Video Content</div>
            
            <div className="grid-item">
              <h3 className="item-title">Product Lab by Thosyn Pax</h3>
              <p className="item-desc">Architecture deep dives, AI strategy, and technical breakdowns.</p>
              <div className="item-links">
                <a href="https://www.youtube.com/@thosynpaxlab" target="_blank" rel="noopener noreferrer" className="item-link"><i className="fab fa-youtube" style={{ marginRight: '6px' }}></i> Subscribe on YouTube ↗</a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <div className="col-header">The Podcast</div>
            
            <div className="grid-item">
              <h3 className="item-title">The Product Lab Conversations</h3>
              <p className="item-desc">Conversations on building for scale, product strategy, and the future of technology.</p>
              <div className="item-links" style={{ flexDirection: 'column', gap: '0.6rem' }}>
                <a href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB" target="_blank" rel="noopener noreferrer" className="item-link"><i className="fab fa-spotify" style={{ marginRight: '6px' }}></i> Spotify ↗</a>
                <a href="https://music.youtube.com/playlist?list=PLMk-yXty7nSn13LhpnE04Xk5g7AivLW0O" target="_blank" rel="noopener noreferrer" className="item-link"><i className="fab fa-youtube" style={{ marginRight: '6px' }}></i> YouTube Music ↗</a>
                <a href="https://podcasts.apple.com/ng/podcast/debug-school-by-paste/id1845675897" target="_blank" rel="noopener noreferrer" className="item-link"><i className="fab fa-apple" style={{ marginRight: '6px' }}></i> Apple Podcasts ↗</a>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <div className="col-header">The Newsletter</div>
            
            <div className="grid-item">
              <h3 className="item-title">The Weekly Architecture Audit</h3>
              <p className="item-desc">Behind-the-scenes lessons on building products and companies.</p>
              <div className="item-links" style={{ flexDirection: 'column', gap: '0.6rem' }}>
                <a href="https://cut.thosynpax.com" target="_blank" rel="noopener noreferrer" className="item-link"><i className="fas fa-pen-nib" style={{ marginRight: '6px' }}></i> Ghost ↗</a>
                <a href="https://substack.com/@thosynpax" target="_blank" rel="noopener noreferrer" className="item-link"><i className="fas fa-envelope-open-text" style={{ marginRight: '6px' }}></i> Substack ↗</a>
                <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7325566398129225728" target="_blank" rel="noopener noreferrer" className="item-link"><i className="fab fa-linkedin" style={{ marginRight: '6px' }}></i> LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-projects-wrapper">
          <div className="col-header" style={{ marginBottom: '1.2rem' }}>Lab Projects</div>
          <div className="project-list">
            <div className="project-row header-row">
              <span>Project</span>
              <span>Status</span>
              <span>Domain</span>
              <span></span>
            </div>
            
            <div className="project-row">
              <span className="p-name">PaxVTO</span>
              <span className="p-status">In-Dev</span>
              <span className="p-domain">AR Commerce</span>
              <span className="p-link"></span>
            </div>

            <div className="project-row">
              <span className="p-name">Karpture</span>
              <span className="p-status">BETA</span>
              <span className="p-domain">Chrome Extension</span>
              <span className="p-link"></span>
            </div>
          </div>
        </div>

        <div className="lab-bottom">
          
          <div>
            <div className="col-header">The Production Wing</div>
            <div className="grid-item" style={{ marginBottom: 0 }}>
              <h3 className="item-title">Cre8fast</h3>
              <p className="item-desc" style={{ maxWidth: '300px' }}>Rapid Execution. Turning architectural insights into deployed products.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <a href="mailto:me@thosynpax.com?subject=Partnership / Sponsorship Inquiry" className="cta-button" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
              Get In Touch
            </a>
            <a href="https://cre8fast.thosynpax.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Visit Cre8fast
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Lab;
