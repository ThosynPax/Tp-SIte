import React, { useState, useRef } from 'react';
import '../../App.css';

const LabProducts = () => {
  // ── Active Accordion Items (default open item 0) ──
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // ── Video Controls ──
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // ── Products List Data ──
  const products = [
    {
      id: 'karpture',
      number: '01',
      title: 'Karpture',
      domain: 'BROWSER PRODUCTIVITY & CHROME EXTENSION',
      status: '● LIVE',
      statusClass: 'status-live',
      headline: 'Copy smarter. Paste faster. Never lose a copied item again.',
      desc: 'Karpture is a Chrome extension built for builders, writers, and researchers who copy and paste constantly. It stores everything you copy in a searchable clipboard history so you can retrieve, reuse, and organise copied items without losing your flow. Install it once. Use it every day.',
      stack: ['Chrome Manifest v3', 'React', 'Canvas API', 'Design Tokens'],
      url: 'https://trykarpture.com/?ref=thosynpax.com',
      buttonText: 'Launch Karpture'
    },
    {
      id: 'paste',
      number: '02',
      title: 'PASTE',
      domain: 'TECH EDUCATION & ENGINEERING ACADEMY',
      status: '● LIVE',
      statusClass: 'status-live',
      headline: 'Where the next generation of tech professionals are trained.',
      desc: 'PASTE — the Pax School of Technology — is a six-product edtech ecosystem teaching Business Analysis, AI tools, product thinking, and technical skills to professionals across Africa. Since 2022, over 5,000 people have gone through PASTE programmes. Courses, mentoring, and corporate training — all under one roof.',
      stack: ['Next.js', 'PostgreSQL', 'LMS Architecture', 'Live Mentorship'],
      url: 'https://withpaste.com/?ref=thosynpax.com',
      buttonText: 'Visit PASTE'
    },
    /*
    {
      id: 'qell',
      number: '03',
      title: 'QELL',
      domain: 'FOUNDER TOOLS & EQUITY CALCULATOR',
      status: '● LIVE',
      statusClass: 'status-live',
      headline: 'Fair equity splits, built on contribution — not just conversations.',
      desc: 'QELL is an equity protocol tool for co-founders. Instead of splitting ownership on a handshake, QELL walks founding teams through a structured calculation across four dimensions — Idea and Vision, Execution, Capital and Risk, and Operations — to arrive at an ownership structure that actually reflects who did what. Built for the founders who want to get this right before it becomes a problem.',
      stack: ['Fast Prototyping', 'Agentic AI', 'Micro-SaaS', 'Automation'],
      url: 'https://cre8fast.thosynpax.com/qell',
      buttonText: 'Explore QELL'
    },
    */
    {
      id: 'remake',
      number: '04',
      title: 'ReMake',
      domain: 'CURATED OPPORTUNITIES & FOUNDER RESOURCES',
      status: '● LIVE',
      statusClass: 'status-live',
      headline: 'Grants, funding, and startup opportunities — curated for founders.',
      desc: 'ReMake is a curated platform surfacing grants, accelerators, competitions, and startup opportunities for founders and entrepreneurs. Built for the builder who does not have time to hunt. ReMake brings the opportunities to you — filtered, relevant, and actionable.',
      stack: ['Media Processing', 'Web Audio API', 'React', 'IndexedDB'],
      url: 'https://cut.thosynpax.com/',
      buttonText: 'Open ReMake'
    },
    {
      id: 'paxvto',
      number: '05',
      title: 'PaxVTO',
      domain: 'AR COMMERCE & COMPUTER VISION',
      status: '● IN-DEV',
      statusClass: 'status-dev',
      headline: 'Virtual Try-On Technology for the Modern Shopper',
      desc: 'PaxVTO is an augmented reality try-on platform that lets shoppers visualise products on themselves in real time — directly in the browser, no app required. Built for fashion, accessories, and lifestyle commerce brands that want to close the gap between browsing and buying.',
      stack: ['WebGL', 'Three.js', 'React', 'Computer Vision', 'WebAssembly'],
      url: 'https://cre8fast.thosynpax.com/',
      buttonText: 'Preview Project'
    }
  ];

  return (
    <div className="story-page-wrapper lab-products-page">
      {/* ── Section 1: Hektor-Style Intro ── */}
      <section className="story-intro-section">
        <div className="story-intro-container">
          <div className="story-intro-left">
            <h1 className="story-intro-title">
              What We<br />Build.
            </h1>
          </div>
          <div className="story-intro-right">
            <p className="story-intro-desc">
              The Product Lab is not just a media platform. It is a working ecosystem. Every product listed here was built from a real problem, shipped with intention, and is either live or in active development. This is what building in public actually looks like.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Full-Width Cinematic Video Showcase (Hektor Style) ── */}
      {false && (
        <section className="hektor-video-section-fullwidth">
          <div className="hektor-cinematic-video-frame">
            <video 
              ref={videoRef}
              src="/showcase-video.mp4" 
              className="hektor-showcase-video"
              loop 
              muted={isMuted} 
              autoPlay 
              playsInline 
              preload="metadata"
            />
            
            {/* Custom Video Control Overlay */}
            <div className="hektor-video-controls-overlay">
              <div className="hektor-video-tag">
                <span className="live-dot"></span> The Lab Reel
              </div>

              <div className="hektor-video-btns">
                <button 
                  type="button"
                  onClick={togglePlay} 
                  className="hektor-video-btn"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
                </button>
                <button 
                  type="button"
                  onClick={toggleMute} 
                  className="hektor-video-btn"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"}></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Section 3: Numbered Accordion Product List ── */}
      <section className="hektor-products-accordion-section">
        <div className="hektor-products-accordion-container">
          <div className="hektor-products-section-header">
            <span className="hektor-badge-label">&#123; Portfolio &#125;</span>
            <h2 className="hektor-section-heading">
              Product<br />Ecosystem
            </h2>
          </div>

          <div className="hektor-accordion-list">
            {products.map((prod, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={prod.id} 
                  className={`hektor-acc-item ${isOpen ? 'is-open' : ''}`}
                >
                  {/* Accordion Row Header */}
                  <div 
                    className="hektor-acc-header"
                    onClick={() => toggleAccordion(index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleAccordion(index);
                      }
                    }}
                  >
                    <div className="hektor-acc-title-group">
                      <span className="hektor-acc-num">{prod.number}</span>
                      <h3 className="hektor-acc-title">{prod.title}</h3>
                    </div>

                    <div className="hektor-acc-arrow-wrap">
                      <div className={`hektor-acc-arrow-circle ${isOpen ? 'active' : ''}`}>
                        <i className="fas fa-arrow-down"></i>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Expandable Content Drawer */}
                  <div className={`hektor-acc-drawer ${isOpen ? 'open' : ''}`}>
                    <div className="hektor-acc-drawer-inner">
                      <div className="hektor-acc-grid">
                        <div className="hektor-acc-info-col">
                          <div className="hektor-acc-meta-bar">
                            <span className="hektor-acc-domain">{prod.domain}</span>
                            <span className={`hektor-acc-status ${prod.statusClass}`}>
                              <span className="status-indicator"></span> {prod.status}
                            </span>
                          </div>

                          <h4 className="hektor-acc-headline">{prod.headline}</h4>
                          <p className="hektor-acc-desc">{prod.desc}</p>
                        </div>

                        <div className="hektor-acc-actions-col">
                          <div className="hektor-acc-action-buttons">
                            <a 
                              href={prod.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hektor-acc-launch-btn"
                            >
                              <span>{prod.buttonText}</span>
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabProducts;
