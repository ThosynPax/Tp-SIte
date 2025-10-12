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
            border-bottom: 2px solid #F4D4B7;
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

          .cta-button {
            background: transparent;
            color: #F4D4B7;
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-block;
            border: 2px solid #F4D4B7;
            font-family: "Montserrat", sans-serif;
          }

          .cta-button:hover {
            background: #F4D4B7;
            color: #000000;
            transform: translateY(-2px);
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
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="wrapper">
          <h1 className="title">Debug School</h1>
          <p className="tagline">Where tech learning meets human understanding</p>
          <a href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB?si=7Kw-5jaKTUSj6ldhFSsGcg" className="cta-button">LISTEN ON SPOTIFY</a>
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

          <a href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB?si=7Kw-5jaKTUSj6ldhFSsGcg" className="cta-button">Start Listening on SPOTIFY</a>
        </section>
      </div>
    </main>
  );
};

export default DebugSchool;