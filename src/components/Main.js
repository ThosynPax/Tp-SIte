import { Link } from 'react-router-dom';
import '../App.css';
import useSEO from '../hooks/useSEO';

const Main = ({ theme }) => {
  useSEO({
    title: 'Thosyn Pax | Product Architect',
    description: 'I lead with a Product Architect mindset—bridging the gap between deep technical infrastructure and market-ready products.',
  });

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
        .brand-link {
          color: var(--link-color);
          font-weight: 500;
          text-decoration: none;
        }
        .brand-link:hover {
          color: var(--text-color);
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
                  <h3 className="intro-title" style={{ fontSize: "2.2rem" }}>I am a Product Architect and Tech Educator</h3>
                </header>
                <p style={{ marginTop: "1rem" }}>
                  As a <strong>Product Architect</strong>, I build stable, scalable products at <a href="https://cre8fast.thosynpax.com" target="_blank" rel="noopener noreferrer" className="brand-link">Cre8fast</a> and help Founders & CEOs avoid the "Vibecoding" trap.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  As a <strong>Tech Educator</strong>, I help professionals engineer high-earning, global careers through <a href="https://www.withpaste.com/" target="_blank" rel="noopener noreferrer" className="brand-link">PASTE</a>.
                </p>
              </div>

              {/* RECENT ROLES */}
              <div className="brief-content">
                <h2 className="roles-grid">Recent Roles & Impact</h2>
                <ul>
                  <li>
                    I launched <a href={addRef("https://cre8fast.thosynpax.com")} target="_blank" rel="noopener noreferrer" className="brand-link">Cre8fast</a>, a product lab where I build practical tools and internal products for myself and other founders.
                  </li>

                  <li>
                    I founded <a href={addRef("https://www.withpaste.com/")} target="_blank" rel="noopener noreferrer" className="brand-link">PASTE (Pax School of Technology)</a>,
                    an applied tech education ecosystem where people learn by building, collaborating, and shipping real-world products.
                  </li>


                  <li>
                    I co-founded <a href={addRef("https://www.inmail.ng/")} target="_blank" rel="noopener noreferrer" className="brand-link">InFlect Innovations</a> to support new tech ideas.
                  </li>
                </ul>
              </div>

              {/* THE LAB */}
              <div style={{ marginTop: "4rem" }}>
                <h2 className="roles-grid">The Lab</h2>
                
                <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
                  Welcome to <strong>The Product Lab</strong>. I'm documenting the journey of building high-scale tech systems and global careers. 
                </p>
                <p style={{ marginTop: "1.5rem" }}>
                  <Link to="/lab" className="project-link">Enter The Lab →</Link>
                </p>
              </div>

              {/* WRITING */}
              <div className="brief-content">
                <h2 className="roles-grid">Writing</h2>

                <ul>
                  <li>
                    My Personal Journal is here on <a href={addRef("https://trail.thosynpax.com/")} target="_blank" rel="noopener noreferrer" className="brand-link">Pax Trail</a>.
                  </li>

                  <li>
                    I have my old writings archived on <a href={addRef("https://medium.com/@thosynpax")} target="_blank" rel="noopener noreferrer" className="brand-link">Medium</a>.
                  </li>

                  <li>
                    <a href={addRef("https://muse.thosynpax.com")} target="_blank" rel="noopener noreferrer" className="brand-link">Muse</a> is a page where I share my personal thoughts and reflections.
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
                    One of my articles was published on the <a href={addRef("https://peopleofcolorintech.com/articles/tech-jobstorming-how-to-build-a-professional-network-in-the-tech-industry/")} target="_blank" rel="noopener noreferrer" className="brand-link">POCIT website</a>.
                  </li>
                </ul>
              </div>

              <div className="brief-content">
                <h2 className="roles-grid">Contact</h2>

                <p>
                  The fastest way to reach me is by email. For personal messages, enquiries, teaching, or similar matters, please write to <a href="mailto:thosynpax@gmail.com" className="brand-link">thosynpax@gmail.com</a>. For project-related matters, publications, or collaborations, please use <a href="mailto:me@thosynpax.com" className="brand-link">me@thosynpax.com</a>.
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