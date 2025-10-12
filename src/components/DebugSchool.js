import React from 'react';

const DebugSchool = () => {
  return (
    <main className="debug-school">
      <style>
        {`
          .debug-school {
            background: #000000;
            min-height: 100vh;
            color: #fff;
            font-family: "Montserrat", sans-serif;
          }

          .hero-section {
            background: #000000;
            padding: 4rem 0 2rem 0;
            text-align: center;
          }

          .title {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #F4D4B7;
            font-family: "Noto Serif Display", serif;
          }

          .tagline {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 2rem;
            font-weight: 300;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .listen-label {
            font-size: 1.2rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: 500;
            display: block;
          }

          .platform-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .platform-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: transparent;
            color: #F4D4B7;
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid #F4D4B7;
            font-family: "Montserrat", sans-serif;
            font-size: 0.9rem;
            white-space: nowrap;
          }

          .platform-button:hover {
            background: #F4D4B7;
            color: #000000;
            transform: translateY(-2px);
          }

          .platform-icon {
            font-size: 1.4rem;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .content-section {
            margin-bottom: 4rem;
            padding: 3rem 2rem;
            text-align: center;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: #F4D4B7;
            font-family: "Noto Serif Display", serif;
          }

          .description {
            font-size: 1.2rem;
            color: #fff;
            line-height: 1.8;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            font-family: "Montserrat", sans-serif;
          }

          .description-list {
            font-size: 1.2rem;
            color: #fff;
            line-height: 1.8;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            font-family: "Montserrat", sans-serif;
          }

          .description-list li {
            margin-bottom: 1rem;
            position: relative;
            padding-left: 1.5rem;
          }

          .description-list li::before {
            content: "•";
            color: #F4D4B7;
            font-size: 1.5rem;
            position: absolute;
            left: 0;
            top: -0.2rem;
          }

          .wrapper {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Desktop - all buttons in one row */
          @media (min-width: 769px) {
            .apple-podcast-mobile {
              display: none;
            }
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .title {
              font-size: 2.5rem;
            }

            .tagline {
              font-size: 1.2rem;
            }

            .content-section {
              padding: 2rem 1rem;
            }

            .section-title {
              font-size: 2rem;
            }

            .description,
            .description-list {
              font-size: 1.1rem;
            }

            .platform-buttons {
              gap: 0.8rem;
            }
            
            .platform-button {
              padding: 0.7rem 1rem;
              font-size: 0.8rem;
            }
            
            .platform-icon {
              font-size: 1.2rem;
            }

            /* Hide Apple Podcasts in main row on mobile */
            .platform-buttons .platform-button:nth-child(3) {
              display: none;
            }

            .apple-podcast-mobile {
              display: flex;
              justify-content: center;
              margin-top: 1rem;
            }

            .apple-podcast-mobile .platform-button {
              display: flex;
            }
          }

          @media (max-width: 480px) {
            .platform-buttons {
              gap: 0.5rem;
            }
            
            .platform-button {
              padding: 0.6rem 0.8rem;
              font-size: 0.75rem;
            }
            
            .platform-icon {
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="wrapper">
          <h1 className="title">Debug School</h1>
          <p className="tagline">Where tech learning meets human understanding</p>
          <span className="listen-label">Listen on</span>
          <div className="platform-buttons">
            <a target='_blank' href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB?si=7Kw-5jaKTUSj6ldhFSsGcg" className="platform-button">
              <i className="fab fa-spotify platform-icon"></i>
              SPOTIFY
            </a>
            <a target='_blank' href="https://music.youtube.com/playlist?list=PLMk-yXty7nSn13LhpnE04Xk5g7AivLW0O" className="platform-button">
              <i className="fab fa-youtube platform-icon"></i>
              YOUTUBE MUSIC
            </a>
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
          {/* Apple Podcasts for mobile only */}
          <div className="apple-podcast-mobile">
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
        </div>
      </section>

      <div className="wrapper">
        {/* About Section */}
        <section className="content-section">
          <h2 className="section-title">About Debug School</h2>
          <p className="description">
            Debug School is a creative learning space focused on helping learners, 
            creators, and young professionals understand tech beyond coding. 
            It's where ideas meet clarity, and confusion becomes a lesson.
          </p>
          
          <p className="description">
            Through podcasts, live sessions, and practical mentorship, we explore how real people learn, 
            build, and pivot in their tech journeys. The goal is to make learning feel less like 
            a struggle and more like a discovery.
          </p>

          <ul className="description-list">
            <li>Understanding the real foundations of tech, not just syntax or tools</li>
            <li>Helping learners connect personal skills with relevant tech roles</li>
            <li>Encouraging curiosity, creativity, and clear thinking in problem-solving</li>
            <li>Creating content that teaches practical, honest lessons about tech life</li>
          </ul>

          <p className="description">
            Many learners start tech journeys with excitement, but end up lost in tutorials, trends, and self-doubt. 
            Debug School helps people slow down, find their "why," and build a path that truly fits them.
          </p>
          <span className="listen-label">Listen on</span>
          <div className="platform-buttons">
            <a target='_blank' href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB?si=7Kw-5jaKTUSj6ldhFSsGcg" className="platform-button">
              <i className="fab fa-spotify platform-icon"></i>
              SPOTIFY
            </a>
            <a target='_blank' href="https://music.youtube.com/playlist?list=PLMk-yXty7nSn13LhpnE04Xk5g7AivLW0O" className="platform-button">
              <i className="fab fa-youtube platform-icon"></i>
              YOUTUBE MUSIC
            </a>
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
          {/* Apple Podcasts for mobile only */}
          <div className="apple-podcast-mobile">
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DebugSchool;