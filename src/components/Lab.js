import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Lab = ({ theme, season }) => {
  return (
    <main className="site-body lab-page" style={{ marginTop: 0, paddingTop: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
        
        .lab-wrapper { 
          padding: 0; 
        }
        .lab-hero {
          margin-bottom: 4rem;
          padding: 3rem 0;
          border-bottom: 1px solid rgba(var(--accent-color), 0.1);
        }
        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          margin-bottom: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          display: block;
        }
        .theme-light .hero-image {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }
        .lab-hero-title {
          font-family: 'Space Mono', monospace;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--header-color);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .lab-hook {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 1.5rem;
        }
        .lab-mission {
          font-size: 1.15rem;
          color: var(--brief-text);
          line-height: 1.7;
          max-width: 800px;
        }
        .lab-section-title {
          font-family: 'Space Mono', monospace;
          font-size: 2rem;
          font-weight: 600;
          color: var(--header-color);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .lab-node-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .lab-node-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }
        .lab-node-card {
          background: var(--card-bg);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
        }
        .theme-light .lab-node-card {
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .lab-node-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .theme-light .lab-node-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .lab-node-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-color);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .lab-node-title {
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--header-color);
        }
        .lab-node-lead {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-color);
          font-size: 1.1rem;
        }
        .lab-node-focus {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--brief-text);
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }
        
        /* Node Links */
        .node-links {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .node-link {
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: var(--text-color);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .theme-light .node-link {
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .node-link:hover {
          background: var(--accent-color);
          color: var(--bg-color);
          border-color: var(--accent-color);
        }
        
        /* The Architect Section */
        .architect-section {
          padding: 2rem 0;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .architect-section::before {
          content: '\\201C';
          position: absolute;
          left: 0;
          top: -2rem;
          font-size: 14rem;
          color: var(--accent-color);
          opacity: 0.15;
          font-family: Georgia, serif;
          line-height: 1;
          z-index: 0;
          pointer-events: none;
        }
        
        .architect-content {
          position: relative;
          z-index: 1;
        }
        
        .architect-copy {
          font-family: 'Architects Daughter', cursive;
          font-size: 1.8rem;
          line-height: 1.6;
          color: var(--text-color);
        }
        
        /* The Production Wing */
        .production-wing {
          margin-bottom: 4rem;
          padding: 3rem;
          border: 1px solid var(--accent-color);
          border-radius: 12px;
          text-align: center;
          background: linear-gradient(135deg, rgba(230, 230, 230, 0.05) 0%, transparent 100%);
        }
        .theme-dark .production-wing {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
        }
        
        .production-wing-title {
          font-family: 'Space Mono', monospace;
          font-size: 2.5rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        
        
        .lab-back-link {
          font-family: 'Space Mono', monospace;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--link-color);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 2rem;
          transition: 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .lab-back-link:hover {
          transform: translateX(-5px);
        }

        @media (max-width: 768px) {
          .lab-hero-title { font-size: 2.5rem; }
          .lab-hook { font-size: 1.25rem; }
          .architect-section { 
            padding: 1.5rem 0; 
            width: 85%;
            margin-left: auto;
            margin-right: auto;
          }
          .architect-section::before { left: -1rem; top: -2rem; font-size: 10rem; opacity: 0.2; }
          .architect-copy { font-size: 1.4rem; text-align: left; }
          .production-wing { padding: 2rem 1.5rem; }
          .production-wing-title { font-size: 2rem; }
        }
      `}</style>

      <div className="wrapper lab-wrapper">
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem 0" }}>
          
          <Link to="/" className="lab-back-link">
            ← RETURNING TO BASE
          </Link>

          {/* 01. The Entrance (Hero) */}
          <section className="lab-hero">
            <img src="/hero.png" alt="The Product Lab Hero" className="hero-image" />
            <h1 className="lab-hero-title">The Lab</h1>
            <div className="lab-hook">Welcome to The Product Lab.</div>
            <p className="lab-mission">
              I am documenting the journey of building high-scale tech systems and global careers. This is where theory meets the factory floor.
            </p>
          </section>

          {/* 02. The Architect (Brief) */}
          <section className="architect-section">
            <div className="architect-content">
              <h2 className="lab-node-tag" style={{ marginBottom: "1rem", color: "var(--brief-text)" }}>02. THE ARCHITECT</h2>
              <h3 className="lab-section-title" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Thosyn Pax</h3>
              <p className="architect-copy">
                I lead with a 'Product Architect' mindset—bridging the gap between deep technical infrastructure and market-ready products. The Lab is my open repository for everything I've learned building across the globe.
              </p>
            </div>
          </section>

          {/* 03. The Ecosystem (Core Nodes) */}
          <section>
            <h2 className="lab-section-title" style={{ marginBottom: "2.5rem" }}>03. The Ecosystem</h2>
            
            <div className="lab-node-grid">
              {/* NODE A */}
              <div className="lab-node-card">
                <div className="lab-node-tag">NODE A: VIDEO CONTENT</div>
                <h3 className="lab-node-title">Product Lab by Thosyn Pax</h3>
                <div className="lab-node-lead">Visualizing the Build.</div>
                <p className="lab-node-focus">
                  Architecture deep dives, AI strategy, and technical breakdowns.
                </p>
                <div className="node-links">
                  <a href="https://www.youtube.com/@thosynpaxlab" target="_blank" rel="noopener noreferrer" className="node-link">
                    <i className="fab fa-youtube" style={{ marginRight: '6px' }}></i> Subscribe on YouTube
                  </a>
                </div>
              </div>

              {/* NODE B */}
              <div className="lab-node-card">
                <div className="lab-node-tag">NODE B: THE PODCAST</div>
                <h3 className="lab-node-title">The Product Lab Conversations</h3>
                <div className="lab-node-lead">Scaling the Narrative.</div>
                <p className="lab-node-focus">
                  Conversations on building for scale, product strategy, and the future of technology.
                </p>
                <div className="node-links">
                  <a href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB" target="_blank" rel="noopener noreferrer" className="node-link">
                    <i className="fab fa-spotify" style={{ marginRight: '6px' }}></i> Spotify
                  </a>
                  <a href="https://music.youtube.com/playlist?list=PLMk-yXty7nSn13LhpnE04Xk5g7AivLW0O" target="_blank" rel="noopener noreferrer" className="node-link">
                    <i className="fab fa-youtube" style={{ marginRight: '6px' }}></i> YT Music
                  </a>
                  <a href="https://podcasts.apple.com/ng/podcast/debug-school-by-paste/id1845675897" target="_blank" rel="noopener noreferrer" className="node-link">
                    <i className="fab fa-apple" style={{ marginRight: '6px' }}></i> Apple
                  </a>
                </div>
              </div>

              {/* NODE C */}
              <div className="lab-node-card">
                <div className="lab-node-tag">NODE C: THE NEWSLETTER</div>
                <h3 className="lab-node-title">The Weekly Architecture Audit</h3>
                <div className="lab-node-lead">Behind-the-Scenes Intelligence.</div>
                <p className="lab-node-focus">
                  Real-world lessons on building products and companies from the ground up.
                </p>
                <div className="node-links">
                  <a href="https://cut.thosynpax.com" target="_blank" rel="noopener noreferrer" className="node-link">
                    <i className="fas fa-pen-nib" style={{ marginRight: '6px' }}></i> Ghost
                  </a>
                  <a href="https://substack.com/@thosynpax" target="_blank" rel="noopener noreferrer" className="node-link">
                    <i className="fas fa-envelope-open-text" style={{ marginRight: '6px' }}></i> Substack
                  </a>
                  <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7325566398129225728" target="_blank" rel="noopener noreferrer" className="node-link">
                    <i className="fab fa-linkedin" style={{ marginRight: '6px' }}></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 04. THE PRODUCTION WING (Cre8fast) */}
          <section className="production-wing">
            <h2 className="lab-node-tag" style={{ marginBottom: "1rem" }}>04. THE PRODUCTION WING</h2>
            <h3 className="production-wing-title">Cre8fast</h3>
            <div className="lab-node-lead" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Rapid Execution.</div>
            <p className="lab-mission" style={{ margin: "0 auto 2rem auto", maxWidth: "600px" }}>
              Turning architectural insights into deployed products. If the Lab is where we research, Cre8fast is where we ship.
            </p>
            <a href="https://cre8fast.thosynpax.com" target="_blank" rel="noopener noreferrer" className="node-link" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
              VISIT CRE8FAST
            </a>
          </section>


        </div>
      </div>
    </main>
  );
};

export default Lab;
