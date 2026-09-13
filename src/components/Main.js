import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';
import useSEO from '../hooks/useSEO';

const Main = ({ theme }) => {
  useSEO({
    title: 'Thosyn Pax — Product Architect, Tech Educator, and Founder',
    description: 'Trained over 5,000 people across Africa, from complete beginners to working professionals, in product thinking, tech careers, and building real things.',
  });

  const addRef = (url) => {
    return url.includes("?")
      ? `${url}&ref=thosynpax.com`
      : `${url}?ref=thosynpax.com`;
  };

  const imageSrc = theme?.toLowerCase() === 'dark' ? '/tp-black.png' : '/tp-light.png';
  const [imgLoaded, setImgLoaded] = useState(false);

  const [openTopics, setOpenTopics] = useState({});

  const toggleTopic = (index) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const teachingTopics = [
    {
      title: "Building the Right Way, Product Thinking for Founders Who Want to Get It Right From the Start",
      content: "Most founders start building before they understand what they are actually building. This session is for technical and non-technical founders who want to make the right infrastructure and product decisions from day one, before the wrong choices become expensive to fix. We cover how to think about your product architecture, how to avoid the traps that slow most early-stage teams down, and how to build something that can grow without breaking. You do not need to be a developer to walk away from this session with a clear, actionable approach to building properly.",
      suitedFor: "early-stage founders, product teams, university students interested in entrepreneurship.",
    },
    {
      title: "Learning Tech That Actually Pays, How to Acquire the Right Skills, in the Right Order, for Real Opportunities",
      content: "The internet is full of places to learn tech. Most people learn the wrong things, in the wrong order, with no clear picture of where it leads. This session is about learning with intention, understanding which technical skills open real doors, how to build competence that employers and clients can actually see, and how to position yourself so opportunities come to you rather than you chasing them. Whether you are starting from zero or trying to level up what you already know, this session gives you a framework for learning that compounds over time.",
      suitedFor: "university students, early-career tech professionals, career switchers, bootcamp graduates.",
    },
    {
      title: "From Builder to Founder, What It Actually Takes to Turn a Product Idea Into Something Real",
      content: "There is a version of this talk that is motivational. This is not that version. This session is for people who have an idea, or who are already building, and want an honest picture of what the journey from concept to shipped product actually looks like. Drawing from years of building multiple products across different contexts, we cover the decisions that matter most at the early stage, the mistakes that kill most products before they find users, and the mindset and infrastructure a builder needs to go from idea to something real that people actually use.",
      suitedFor: "aspiring founders, developers who want to build their own products, students, early-stage entrepreneurs.",
    },
  ];

  // Preload both variants so they're cached regardless of theme
  useEffect(() => {
    ['/tp-black.png', '/tp-light.png'].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <main className="site-body" style={{ marginTop: 0, paddingTop: 0 }}>
      <style>{`
        @keyframes skeletonPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
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
        .styled-p, .contact-links p {
          line-height: 1.6;
          font-size: 1.05rem;
          color: var(--text-color);
          margin-bottom: 0.8rem;
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

        .topic-accordion-item {
          border-top: 1px solid rgba(128, 128, 128, 0.22);
          padding: 1.15rem 0;
          transition: border-color 0.2s ease;
        }
        .topic-accordion-item:last-child {
          border-bottom: 1px solid rgba(128, 128, 128, 0.22);
        }
        .topic-accordion-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.25rem;
          cursor: pointer;
          color: var(--header-color);
          font-family: 'Space Mono', monospace;
        }
        .topic-title-text {
          font-family: 'Space Mono', monospace;
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.45;
          color: var(--header-color);
          transition: color 0.2s ease;
        }
        .topic-accordion-btn:hover .topic-title-text {
          color: var(--link-color);
        }
        .topic-toggle-symbol {
          font-family: 'Space Mono', monospace;
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.2;
          color: var(--header-color);
          flex-shrink: 0;
          transition: color 0.2s ease;
          user-select: none;
        }
        .topic-accordion-btn:hover .topic-toggle-symbol {
          color: var(--link-color);
        }
        .topic-accordion-content {
          margin-top: 1rem;
          animation: topicFadeIn 0.25s ease-out;
        }
        @keyframes topicFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pocit-quote {
          margin: 1.25rem 0 0 0;
          padding: 0.35rem 0 0.35rem 1rem;
          border-left: 2px solid var(--link-color);
        }
        .pocit-quote p {
          font-family: 'Space Mono', monospace;
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--text-color);
          margin: 0 0 0.3rem 0;
          font-style: italic;
        }
        .pocit-quote cite {
          display: block;
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem;
          color: var(--brief-text);
          font-style: normal;
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
          .topic-title-text {
            font-size: 1.05rem;
          }
          .topic-accordion-item {
            padding: 0.95rem 0;
          }
          .topic-toggle-symbol {
            font-size: 1.2rem;
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
          .topic-title-text {
            font-size: 0.98rem;
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
                  <h3 className="intro-title" style={{ fontSize: "2.2rem" }}>
                    Thosyn Pax — Product Architect, Tech Educator, and Founder
                  </h3>
                </header>
                <p style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>
                  I've trained over 5,000 people across Africa, from complete beginners to working professionals, in product thinking, tech careers, and building real things.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  As a <strong>Product Architect</strong>, I build stable, scalable products at <a href="https://cre8fast.thosynpax.com" target="_blank" rel="noopener noreferrer" className="brand-link">Cre8fast</a> and help Founders & CEOs avoid the "Vibecoding" trap.
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  As a <strong>Tech Educator</strong>, I help professionals engineer high-earning, global careers through <a href="https://www.withpaste.com/" target="_blank" rel="noopener noreferrer" className="brand-link">PASTE</a>.
                </p>
              </div>

              {/* PROFILE PICTURE */}
              <div style={{ marginTop: "3rem", textAlign: "center", marginBottom: "2.5rem" }}>
                {/* Skeleton shown while image loads */}
                {!imgLoaded && (
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      background: theme?.toLowerCase() === 'dark'
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.06)",
                      borderRadius: "8px",
                      animation: "skeletonPulse 1.5s ease-in-out infinite",
                    }}
                  />
                )}
                <img
                  src={imageSrc}
                  alt="Thosyn Pax"
                  fetchpriority="high"
                  loading="eager"
                  onLoad={() => setImgLoaded(true)}
                  style={{
                    display: imgLoaded ? "inline-block" : "none",
                    width: "100%",
                    maxWidth: "100%",
                    opacity: imgLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />
              </div>

              {/* TEACHING & FACILITATION */}
              <div style={{ marginTop: "3.5rem" }}>
                <h2 className="roles-grid">Teaching & Facilitation</h2>
                <p className="styled-p" style={{ marginTop: "0.75rem" }}>
                  I have been teaching practical tech skills since 2022. What I care about is not getting through the content, it is making sure people leave the room with something they can actually use. Whether I am talking to founders, students, or working professionals, the goal is always the same: clarity, confidence, and a next step they can take immediately.
                </p>

                <div className="teaching-accordion" style={{ marginTop: "1.75rem" }}>
                  {teachingTopics.map((topic, index) => {
                    const isOpen = !!openTopics[index];
                    return (
                      <div key={index} className="topic-accordion-item">
                        <button
                          type="button"
                          className="topic-accordion-btn"
                          onClick={() => toggleTopic(index)}
                          aria-expanded={isOpen}
                        >
                          <span className="topic-title-text">{topic.title}</span>
                          <span className="topic-toggle-symbol" aria-hidden="true">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="topic-accordion-content">
                            <p className="styled-p" style={{ marginBottom: "0.5rem" }}>
                              {topic.content}
                            </p>
                            <p className="styled-p" style={{ fontSize: "0.95rem", opacity: 0.85, marginBottom: "0.25rem" }}>
                              <em>Suited for: {topic.suitedFor}</em>
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <p className="styled-p" style={{ marginTop: "1.75rem" }}>
                  If you run a bootcamp, university programme, developer community, or corporate training and want to bring me in as a guest lecturer or workshop facilitator, reach out directly at <a href="mailto:thosynpax@gmail.com?subject=Teaching%20%26%20Facilitation%20Inquiry" className="brand-link">thosynpax@gmail.com</a> or <a href="mailto:me@thosynpax.com?subject=Teaching%20%26%20Facilitation%20Inquiry" className="brand-link">me@thosynpax.com</a>.
                </p>
              </div>

              {/* RECENT ROLES & IMPACT */}
              <div style={{ marginTop: "4rem" }}>
                <h2 className="roles-grid">Recent Roles & Impact</h2>
                <ul>
                  <li>
                    Since 2022, over 5,000 people, from complete beginners to working professionals, have gone through my teaching programmes, learning product thinking, practical tech skills, and how to build careers that travel.
                  </li>
                  <li>
                    I lead <a href={addRef("https://afribreath.com")} target="_blank" rel="noopener noreferrer" className="brand-link">Afribreath</a>, a global digital infrastructure firm powering the digital frontier. We provision high-scale IT services, systems analysis, and elite talent pipelines for international partners.
                  </li>
                  <li>
                    I founded <a href={addRef("https://www.withpaste.com/")} target="_blank" rel="noopener noreferrer" className="brand-link">PASTE (Pax School of Technology)</a>, an applied tech education ecosystem where people learn by building, collaborating, and shipping real-world products.
                  </li>
                  <li>
                    I launched <a href={addRef("https://cre8fast.thosynpax.com")} target="_blank" rel="noopener noreferrer" className="brand-link">Cre8fast</a>, a product lab where I build practical tools and internal products for myself and other founders.
                  </li>
                  <li>
                    I co-founded <a href={addRef("https://www.inmail.ng/")} target="_blank" rel="noopener noreferrer" className="brand-link">InFlect Innovations</a> to support new tech ideas.
                  </li>
                  <li>
                    Freelancer and operator since 2015, transitioning from running a digital agency into full-time product architecture and tech education.
                  </li>
                </ul>
              </div>

              {/* THE LAB */}
              <div style={{ marginTop: "4rem" }}>
                <h2 className="roles-grid">The Lab</h2>

                <p className="styled-p" style={{ marginTop: "1rem" }}>
                  Welcome to <strong>The Product Lab</strong>. I'm documenting the journey of building high-scale tech systems and global careers.
                </p>
                <p style={{ marginTop: "1.5rem" }}>
                  <Link to="/lab" className="project-link">Enter The Lab →</Link>
                </p>
              </div>

              {/* WRITING */}
              <div className="brief-content">
                <h2 className="roles-grid">Writing</h2>

                <p className="styled-p">
                  I write a monthly letter called <a href="https://thosynpax.substack.com/" target="_blank" rel="noopener noreferrer" className="brand-link">Letters from Pax</a>. One honest letter, once a month, written from the middle of building things.
                </p>
              </div>

              {/* PUBLICATIONS */}
              <div className="brief-content">
                <h2 className="roles-grid">Publications</h2>

                <ul>
                  <li>
                    “Tech Jobstorming: How to Build a Professional Network in the Tech Industry”, published on <a href={addRef("https://peopleofcolorintech.com/articles/tech-jobstorming-how-to-build-a-professional-network-in-the-tech-industry/")} target="_blank" rel="noopener noreferrer" className="brand-link">POCIT (People of Color in Tech)</a>.
                  </li>
                  <li>
                    “Adapting to the Rise of No-Code Platforms in Nigeria”, published on <a href={addRef("https://medium.com/design-bootcamp/adapting-to-the-rise-of-no-code-platforms-in-nigeria-2cfb51dd7409")} target="_blank" rel="noopener noreferrer" className="brand-link">Design Bootcamp</a>.
                  </li>
                  <li>
                    “Tech Jobstorming: Navigating the Job Market and Finding Job Opportunities in Tech”, published on <a href={addRef("https://medium.com/design-bootcamp/tech-jobstorming-navigating-the-job-market-and-finding-job-opportunities-in-tech-30f6339fb155")} target="_blank" rel="noopener noreferrer" className="brand-link">Design Bootcamp</a>.
                  </li>
                  <li>
                    “Comprehensive Software Development Learning Roadmap”, published on <a href={addRef("https://medium.com/design-bootcamp/comprehensive-software-development-learning-roadmap-47347a8b978b")} target="_blank" rel="noopener noreferrer" className="brand-link">Design Bootcamp</a>.
                  </li>
                </ul>
              </div>

              {/* MISC */}
              <div className="brief-content">
                <h2 className="roles-grid">Misc</h2>

                <ul>
                  <li>
                    I'm fascinated by languages; currently learning French with plans to pick up Spanish next.
                  </li>
                  <li>
                    A few of my favorite sitcoms to rewatch include The Marvelous Mrs. Maisel, The Fresh Prince, and Abbott Elementary.
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="brief-content">
                <h2 className="roles-grid">Contact</h2>

                <p className="styled-p">
                  <strong>For teaching, guest lecturing, or workshop facilitation:</strong> please email <a href="mailto:thosynpax@gmail.com?subject=Teaching%20%26%20Facilitation%20Inquiry" className="brand-link">thosynpax@gmail.com</a> or <a href="mailto:me@thosynpax.com?subject=Teaching%20%26%20Facilitation%20Inquiry" className="brand-link">me@thosynpax.com</a>.
                </p>
                <p className="styled-p">
                  <strong>For product architecture, publications, or advisory:</strong> please email <a href="mailto:me@thosynpax.com" className="brand-link">me@thosynpax.com</a>.
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