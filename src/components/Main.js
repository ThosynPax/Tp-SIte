import { useState } from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        .content-section { margin-bottom: 2rem; }
        .brief-content { margin-bottom: 2.5rem; }
        h2.roles-grid { 
          font-size: 1.8rem; 
          margin-bottom: 1rem; 
          font-weight: 600; 
          line-height: 1.3;
        }
        .intro-title { 
          font-size: 2rem; 
          font-weight: 600; 
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .intro p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 0;
        }
        ul { 
          margin: 0.5rem 0 0 0;
          padding-left: 1rem;
        }
        ul li { 
          margin-bottom: 0.8rem; 
          line-height: 1.6; 
          font-size: 1.05rem;
          padding: 0;
        }
        .teal-link {
          color: #f3d4b7;
          font-weight: 500;
          text-decoration: none;
        }
        .teal-link:hover {
          color: #f3d4b7;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          h2.roles-grid { 
            font-size: 1.5rem; 
            margin-bottom: 0.8rem;
          }
          .intro-title { 
            font-size: 1.7rem; 
            margin-bottom: 0.6rem;
          }
          .intro p {
            font-size: 1.05rem;
          }
          ul li { 
            font-size: 1rem;
            margin-bottom: 0.7rem;
            line-height: 1.5;
          }
          .wrapper { 
            padding: 0.8rem; 
          }
          .brief-content { 
            margin-bottom: 2rem; 
          }
          .full-width-black {
            margin-top: -80px;
          }
          ul {
            padding-left: 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .intro-title { 
            font-size: 1.5rem; 
          }
          h2.roles-grid { 
            font-size: 1.3rem; 
          }
          .wrapper { 
            padding: 0.6rem; 
          }
          .brief-content { 
            margin-bottom: 1.8rem; 
          }
          ul li { 
            margin-bottom: 0.6rem;
          }
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
                    I run <a href={addRef("https://www.thepaxcompany.xyz")} target="_blank" rel="noopener noreferrer" className="teal-link">TPCo</a>,
                    where I once helped founders turn ideas into usable products. Now building
                    my own ideas and products.
                  </li>

                  <li>
                    I built <a href={addRef("https://karpture.vercel.app")} target="_blank" rel="noopener noreferrer" className="teal-link">Karpture</a>,
                    a Chrome extension that lets you save, copy, and reuse anytime.
                  </li>

                  <li>
                    As a tech educator, I founded
                    <a href={addRef("https://www.paxschool.xyz/")} target="_blank" rel="noopener noreferrer" className="teal-link"> PASTE</a>,
                    where I teach beginners through podcasts, newsletters, YouTube, community resources, workshops, and mentorship.
                  </li>

                  <li>
                    Co-founded
                    <a href={addRef("https://www.inmail.ng/")} target="_blank" rel="noopener noreferrer" className="teal-link"> InFlect Innovations</a>,
                    supporting ideas that push technology forward.
                  </li>

                  <li>
                    Currently building an
                    <a href={addRef("https://www.thepaxcompany.xyz/ai-directory")} target="_blank" rel="noopener noreferrer" className="teal-link"> AI Directory</a> to help people find useful AI tools faster.
                  </li>

                  <li>
                    Created an
                    <a href={addRef("https://www.thepaxcompany.xyz/qell")} target="_blank" rel="noopener noreferrer" className="teal-link"> Equity Calculator</a> that helps founders understand equity splits.
                  </li>
                </ul>
              </div>

              {/* WRITING */}
              <div className="brief-content">
                <h2 className="roles-grid">Writing</h2>

                <ul>
                  <li>
                    I keep an online journal called
                    <a href={addRef("https://trail.thosynpax.com/")} target="_blank" rel="noopener noreferrer" className="teal-link"> Pax Trail</a>,
                    where I document my growth and tell personal stories.
                  </li>

                  <li>
                    On
                    <a href={addRef("https://www.linkedin.com/in/thosyn-pax")} target="_blank" rel="noopener noreferrer" className="teal-link"> LinkedIn</a>,
                    I write about startups, product strategy, learning tech, and building ideas.
                  </li>
                </ul>
              </div>

              <div className="brief-content">
                <h2 className="roles-grid">Misc</h2>

                <ul>
                  <li>
                    I enjoy watching sitcoms. Some of my favorites include The Marvelous Mrs. Maisel,
                    The Fresh Prince of Bel-Air, Two and a Half Men, The Upshaws, and Abbott Elementary.
                  </li>

                  <li>
                    Not much of a gamer, but I occasionally play small adventure games. Uncharted has
                    been my favorite so far.
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