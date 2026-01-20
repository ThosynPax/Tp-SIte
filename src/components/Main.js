import { useState } from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Main = ({ theme, season }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getSeasonEmoji = (s) => {
    switch (s) {
      case 'Spring': return '🌸';
      case 'Summer': return '☀️';
      case 'Autumn': return '🍂';
      case 'Winter': return '❄️';
      default: return '';
    }
  };

  const addRef = (url) => {
    return url.includes("?")
      ? `${url}&ref=thosynpax.com`
      : `${url}?ref=thosynpax.com`;
  };

  return (
    <main className="site-body" style={{ marginTop: 0, paddingTop: 0 }}>
      <style>{`
        .wrapper { 
          padding: 0; 
          font-family: 'Space Mono', monospace;
        }
        .content-section { margin-bottom: 2rem; }
        .brief-content { margin-bottom: 2.5rem; }
        h2.roles-grid { 
          font-family: 'Space Mono', monospace;
          font-size: 1.8rem; 
          margin-bottom: 1rem; 
          font-weight: 600; 
          line-height: 1.3;
          color: var(--header-color);
        }
        .intro-title { 
          font-family: 'Space Mono', monospace;
          font-size: 2rem; 
          font-weight: 600; 
          margin-bottom: 0.75rem;
          line-height: 1.3;
          color: var(--header-color);
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
          color: var(--text-color);
        }
        .teal-link {
          color: var(--link-color);
          font-weight: 500;
          text-decoration: none;
        }
        .teal-link:hover {
          color: var(--link-color);
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
          <div className="black-section" style={{ background: 'transparent' }}>
            <section className="content-section container" style={{ maxWidth: "760px", margin: "0 auto", textAlign: "left" }}>

              {/* INTRO */}
              <div className="brief-content">
                <header className="intro">
                  <h3 className="intro-title">Hey, I'm Thosyn Pax {getSeasonEmoji(season)}</h3>
                </header>
                <p>I build simple tools that solve real problems and help businesses grow.</p>
              </div>

              {/* RECENT ROLES */}
              <div className="brief-content">
                <h2 className="roles-grid">Recent Roles & Impact</h2>
                <ul>
                  <li>
                    I started <a href={addRef("https://thepaxcompany.xyz")} target="_blank" rel="noopener noreferrer" className="teal-link">TPCo</a> as a product development agency, and it has since evolved into my parent studio for product, design, and venture work.
                  </li>
                  <li>
                    I later launched <a href={addRef("https://cre8fast.thosynpax.com")} target="_blank" rel="noopener noreferrer" className="teal-link">Cre8fast</a>, a product lab where I build practical tools and internal products for myself and other founders.
                  </li>

                  <li>
                    I founded <a href={addRef("https://www.withpaste.com/")} target="_blank" rel="noopener noreferrer" className="teal-link">PASTE (Pax School of Technology)</a>,
                    an applied tech education ecosystem where people learn by building, collaborating, and shipping real-world products.
                  </li>




                  <li>
                    I co-founded <a href={addRef("https://www.inmail.ng/")} target="_blank" rel="noopener noreferrer" className="teal-link">InFlect Innovations</a> to support new tech ideas.
                  </li>
                </ul>
              </div>

              {/* WRITING */}
              <div className="brief-content">
                <h2 className="roles-grid">Writing</h2>

                <ul>
                  <li>
                    <a href={addRef("https://cut.thosynpax.com")} target="_blank" rel="noopener noreferrer" className="teal-link">Builder's Cut</a> is a newsletter where I share behind-the-scenes lessons on building products and companies.
                  </li>
                  <li>
                    My Personal Journal is here on <a href={addRef("https://trail.thosynpax.com/")} target="_blank" rel="noopener noreferrer" className="teal-link">Pax Trail</a>.
                  </li>

                  <li>
                    I post jobs and learning resources on <a href={addRef("https://www.threads.net/@thosynpax")} target="_blank" rel="noopener noreferrer" className="teal-link">Threads</a>.
                  </li>
                  <li>
                    I post on <a href={addRef("https://www.linkedin.com/in/thosyn-pax")} target="_blank" rel="noopener noreferrer" className="teal-link">LinkedIn</a> about startups, product strategy, and tech.
                  </li>

                  <li>
                    I have my old writings archived on <a href={addRef("https://medium.com/@thosynpax")} target="_blank" rel="noopener noreferrer" className="teal-link">Medium</a>.
                  </li>

                  <li>
                    <a href={addRef("https://muse.thosynpax.com")} target="_blank" rel="noopener noreferrer" className="teal-link">Muse</a> is a page where I share my personal thoughts and reflections.
                  </li>
                </ul>
              </div>

              <div className="brief-content">
                <h2 className="roles-grid">Misc</h2>

                <ul>
                  <li>
                    I love watching sitcoms. My favorites include The Marvelous Mrs. Maisel, The Fresh Prince, and Abbott Elementary.
                  </li>

                  <li>
                    I'm not much of a gamer, but I like small adventure games. Uncharted is my favorite so far.
                  </li>
                </ul>
              </div>

              <div className="brief-content">
                <h2 className="roles-grid">Publication</h2>

                <ul>
                  <li>
                    One of my articles was published on the <a href={addRef("https://peopleofcolorintech.com/articles/tech-jobstorming-how-to-build-a-professional-network-in-the-tech-industry/")} target="_blank" rel="noopener noreferrer" className="teal-link">POCIT website</a>.
                  </li>
                </ul>
              </div>

              <div className="brief-content">
                <h2 className="roles-grid">Contact</h2>

                <p>
                  The fastest way to reach me is by email. For personal messages, enquiries, teaching, or similar matters, please write to <a href="mailto:thosynpax@gmail.com" className="teal-link">thosynpax@gmail.com</a>. For project-related matters, publications, or collaborations, please use <a href="mailto:me@thosynpax.com" className="teal-link">me@thosynpax.com</a>.
                </p>
              </div>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;