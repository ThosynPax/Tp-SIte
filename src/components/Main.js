import { useState } from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Recommended font: "Inter" or "Space Grotesk"
// Add this to index.html or global CSS:
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const addRef = (url) => {
    return url.includes("?")
      ? `${url}&ref=thosynpax.com`
      : `${url}?ref=thosynpax.com`;
  };

  return (
    <main className="site-body" style={{ marginTop: 0, paddingTop: 0 }}>
      <style>{`
        .wrapper { padding: 0; }
        .content-section { margin-bottom: 3rem; }
        h2.roles-grid { font-size: 1.9rem; margin-bottom: 1.5rem; font-weight: 600; }
        .intro-title { font-size: 2rem; font-weight: 600; margin-bottom: 1rem; }
        ul li { margin-bottom: 1.2rem; line-height: 1.7; font-size: 1.05rem; }
        @media (max-width: 768px) {
          h2.roles-grid { font-size: 1.6rem; }
          .intro-title { font-size: 1.6rem; }
          ul li { font-size: 1.1rem; }
          .wrapper { padding: 1rem; }
        }
      `}</style>

      <div className="wrapper">
        <div className="full-width-black">
          <div className="black-section">
            <section className="content-section container" style={{ maxWidth: "760px", margin: "0 auto", textAlign: "left" }}>

              {/* INTRO */}
              <div className="brief-content">
                <header className="intro">
                  <h3 className="intro-title">Hey 👋 I'm Thosyn Pax</h3>
                </header>
                <p>I build simple, helpful tools that solve real problems for people and help businesses grow.</p>
              </div>


              {/* RECENT ROLES */}
              <div className="brief-content">
                <h2 className="roles-grid">Recent Roles & Impact</h2>
                <ul>
                  <li>
                    I run <a href={addRef("https://www.thepaxcompany.xyz")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}>TPCo</a>,
                    where I help founders turn ideas into usable products.
                  </li>

                  <li>
                    I built <a href={addRef("https://karpture.vercel.app")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}>Karpture</a>,
                    a Chrome extension that lets you save, copy, and reuse anytime.
                  </li>

                  <li>
                    As a tech educator, I founded
                    <a href={addRef("https://www.paxschool.xyz/")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> PASTE</a>,
                    where I teach beginners through podcasts, newsletters, YouTube, community resources, workshops, and mentorship.
                  </li>

                  <li>
                    Co-founded
                    <a href={addRef("https://www.inmail.ng/")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> InFlect Innovations</a>,
                    supporting ideas that push technology forward.
                  </li>

                  <li>
                    Currently building an
                    <a href={addRef("https://www.thepaxcompany.xyz/ai-directory")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> AI Directory</a>
                    to help people find useful AI tools faster.
                  </li>

                  <li>
                    Created an
                    <a href={addRef("https://www.thepaxcompany.xyz/qell")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> Equity Calculator</a>
                    that helps founders understand equity splits.
                  </li>
                </ul>
              </div>


              {/* WRITING */}
              <div className="brief-content">
                <h2 className="roles-grid">Writing</h2>
                <p>I share my lessons and experiences in different places:</p>
                <ul>
                  <li>
                    I keep an online journal called
                    <a href={addRef("https://trail.thosynpax.com/")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> Pax Trail</a>,
                    where I document my growth and tell personal stories.
                  </li>

                  <li>
                    On
                    <a href={addRef("https://www.linkedin.com/in/thosyn-pax")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> LinkedIn</a>,
                    I write about startups, product strategy, learning tech, and building ideas.
                  </li>

                  <li>
                    On
                    <a href={addRef("https://x.com/thosynpax")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> X (Twitter)</a>,
                    I share my thoughts and what I’m learning along the way.
                  </li>

                  <li>
                    On
                    <a href={addRef("https://instagram.com/thosynpax")} target="_blank" rel="noopener noreferrer" style={{ color: "#F4D4B7", fontWeight: 500 }}> Instagram</a>,
                    I post <strong>Muse</strong> — short reflections on life, faith, and creativity.
                  </li>
                </ul>
              </div>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;