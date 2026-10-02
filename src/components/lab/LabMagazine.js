import React, { useState, useEffect } from 'react';
import useSEO from '../../hooks/useSEO';

const LabMagazine = () => {
  useSEO({
    title: 'Magazine | The Product Lab by Thosyn Pax',
    description: 'Dispatches from the Factory Floor: architectural teardowns, agentic engineering playbooks, and essays on building real products.',
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [volumePage, setVolumePage] = useState(1);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const articles = [
    {
      id: 'art-01',
      issue: 'Issue #01',
      category: 'architecture',
      categoryName: 'Architecture',
      title: 'First Issue Coming Soon',
      readTime: '-- min read',
      date: 'Coming Soon',
      cover: '/magazine-cover-tpl.jpg',
      isPortrait: true,
      excerpt: 'We are currently drafting the first dispatch. Subscribe to be notified the moment it drops.',
      fullContent: {
        intro: 'The first issue of Dispatches is currently in production. We are documenting the systems, scars, and shipping speeds of modern builders.',
        sections: [
          {
            heading: 'Stay Tuned',
            body: 'Enter your email below to get notified when the first issue drops.'
          }
        ],
        quote: 'The best products are not built by the smartest people in the room. They are built by the ones who stayed in the room long enough to understand the problem.',
        takeaways: [
          'Coming soon.'
        ]
      }
    }
  ];

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.category === activeFilter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const archiveEditions = [
    {
      id: '01',
      title: 'Volume I: The Architecture of Products',
      topics: 'What it means to think in systems before writing a single line of code.',
      readTime: 'Coming Soon',
      category: 'architecture'
    },
    {
      id: '02',
      title: 'Volume II: Building in Africa',
      topics: 'The constraints, the context, and why both are competitive advantages.',
      readTime: 'Coming Soon',
      category: 'culture'
    },
    {
      id: '03',
      title: 'Volume III: The AI-Native Builder',
      topics: 'How artificial intelligence is changing what it means to ship a product.',
      readTime: 'Coming Soon',
      category: 'ai-agents'
    },
    {
      id: '04',
      title: 'Volume IV: Careers Without Ceilings',
      topics: 'Breaking into tech, building a global career, and what school never taught you.',
      readTime: 'Coming Soon',
      category: 'playbooks'
    }
  ];

  const VOLUMES_PER_PAGE = 4;
  const totalVolumePages = Math.ceil(archiveEditions.length / VOLUMES_PER_PAGE);
  const displayedVolumes = archiveEditions.slice(
    (volumePage - 1) * VOLUMES_PER_PAGE,
    volumePage * VOLUMES_PER_PAGE
  );

  return (
    <div className="mag-page-wrapper">

      {/* ── 1. CINEMATIC HERO HEADER (Single-Project-1 Style) ── */}
      <div id="page-header" className="mag-hero-header">
        
        {/* Background image & gradient overlay */}
        <div className="mag-hero-bg" style={{ backgroundImage: 'url(/magazine-hero-tpl.jpg)' }}>
          <div className="mag-hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="page-header-inner mag-hero-inner">
          <div className="ph-caption mag-caption">
            {/* Main Headline */}
            <h1 className="ph-caption-title mag-title">
              Dispatches
            </h1>
          </div>
        </div>

        {/* Scroll Down Button (Bottom Right - from Single-Project-1) */}
        <div className="tt-scroll-down mag-scroll-down">
          <a
            href="#magazine-grid"
            className="tt-sd-inner"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('magazine-grid')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll to articles"
          >
            <div className="tt-sd-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
              </svg>
            </div>
          </a>
        </div>

      </div>

      {/* ── 2. BOXED & TILTED MASONRY GRID (Portfolio-Masonry-Boxed Style) ── */}
      <section className="mag-grid-section" id="magazine-grid">
        <div className="mag-grid-container">

          {/* Section Sub-heading */}
          <div className="mag-section-header">
            <span className="mag-badge-label">( Curated Articles &amp; Essays )</span>
            <h2 className="mag-section-title">All Editions &amp; Dispatches</h2>
          </div>

          {/* Masonry Grid of Magazine Covers */}
          <div className="tt-portfolio-grid tt-pgi-boxed tt-pgi-tilted mag-masonry-grid">
            {filteredArticles.map((article, index) => {
              const isOdd = index % 2 === 0;
              return (
                <div
                  key={article.id}
                  className={`mag-card-wrap ${isOdd ? 'tilt-odd' : 'tilt-even'} ${article.isPortrait ? 'is-tall-cover' : 'is-standard-cover'}`}
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="mag-cover-frame">
                    {/* Realistic Bound Magazine Spine on Left Edge */}
                    <div className="mag-cover-spine"></div>

                    {/* Uploaded Magazine Cover Image */}
                    <img
                      src={article.cover}
                      alt={article.title}
                      loading="lazy"
                      className="mag-cover-photo"
                    />

                    {/* Subtle Action Pill */}
                    <div className="mag-cover-hover-badge">
                      <span>Read Issue</span>
                      <span className="mag-hover-arrow">&#x2197;</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. EDITORIAL MANIFESTO QUOTE (Elements.html Style) ── */}
      <section className="mag-manifesto-section">
        <div className="mag-manifesto-container">
          <div className="mag-quote-icon" aria-hidden="true">&ldquo;</div>
          <blockquote className="mag-manifesto-quote">
            The best products are not built by the smartest people in the room. They are built by the ones who stayed in the room long enough to understand the problem.
          </blockquote>
          <div className="mag-manifesto-author">
            <span className="mag-author-dash">—</span>
            <span className="mag-author-name">Thosyn Pax</span>
            <span className="mag-author-role">{'//'} Founder and Principal Architect, The Product Lab</span>
          </div>
        </div>
      </section>

      {/* ── 4. INSIDE THE VOLUMES (Hektor Awards Style) ── */}
      <section className="mag-volumes-section" id="magazine-volumes">
        <div className="mag-volumes-container">
          
          {/* Header: Big Title Left, Subtitle Right */}
          <div className="mag-volumes-header">
            <div className="mag-volumes-header-left">
              <h2 className="mag-volumes-big-title">Volumes</h2>
            </div>
            <div className="mag-volumes-header-right">
              <p className="mag-volumes-lead">
                A curated list of foundational dispatches and architectural runbooks that highlight milestones in our engineering work and systems growth.
              </p>
            </div>
          </div>

          {/* Awards-Style Table Rows */}
          <div className="mag-awards-list">
            {displayedVolumes.map((edition) => (
              <div
                key={edition.id}
                className="mag-award-row"
                onClick={() => {
                  setActiveFilter(edition.category);
                  document.getElementById('magazine-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                role="button"
                tabIndex={0}
              >
                <div className="mag-award-col-idx">{edition.id}</div>
                <div className="mag-award-col-name">{edition.title}</div>
                <div className="mag-award-col-desc">{edition.topics}</div>
                <div className="mag-award-col-meta">
                  <span className="mag-award-meta-text">{edition.readTime}</span>
                  <span className="mag-award-meta-arrow">&#x2197;</span>
                </div>
              </div>
            ))}
          </div>

          {/* Volumes Pagination Controls */}
          {totalVolumePages > 1 && (
            <div className="mag-volumes-pagination">
              <span className="mag-vol-page-info">
                Showing {((volumePage - 1) * VOLUMES_PER_PAGE) + 1}–{Math.min(volumePage * VOLUMES_PER_PAGE, archiveEditions.length)} of {archiveEditions.length} Volumes
              </span>

              <div className="mag-vol-page-nav">
                <button
                  type="button"
                  className="mag-vol-page-arrow"
                  disabled={volumePage === 1}
                  onClick={() => setVolumePage(prev => Math.max(prev - 1, 1))}
                  aria-label="Previous Page"
                >
                  &larr; Prev
                </button>

                <div className="mag-vol-page-numbers">
                  {Array.from({ length: totalVolumePages }, (_, i) => i + 1).map(pageNum => (
                    <button
                      key={`vol-page-${pageNum}`}
                      type="button"
                      className={`mag-vol-page-btn ${volumePage === pageNum ? 'active' : ''}`}
                      onClick={() => setVolumePage(pageNum)}
                    >
                      0{pageNum}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="mag-vol-page-arrow"
                  disabled={volumePage === totalVolumePages}
                  onClick={() => setVolumePage(prev => Math.min(prev + 1, totalVolumePages))}
                  aria-label="Next Page"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── 5. NEWSLETTER DISPATCH STRIP (Multi-Platform Publishing) ── */}
      <section className="mag-newsletter-section">
        <div className="mag-newsletter-container">
          <div className="mag-nl-box">
            
            {/* Header / Intro */}
            <div className="mag-nl-header-block">
              <span className="mag-badge-label light">{'{ Letters from Pax }'}</span>
              <h3 className="mag-nl-title">Read Where You Work</h3>
              <p className="mag-nl-desc">
                I write a monthly letter called <a href="https://thosynpax.substack.com/" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline'}}>Letters from Pax</a>. One honest letter, once a month, written from the middle of building things.
              </p>
            </div>

            {/* 3 Channels Grid */}
            <div className="mag-nl-channels-grid">
              
              {/* Substack */}
              <a
                href="https://thosynpax.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mag-channel-card substack-card"
              >
                <div className="mag-channel-top">
                  <div className="mag-channel-icon substack-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="mag-channel-title">Substack</h4>
                <p className="mag-channel-desc">Weekly deep dives into systems architecture, production incidents, and scaling.</p>
                <div className="mag-channel-action">
                  <span className="mag-channel-action-full">Read on Substack</span>
                  <span className="mag-channel-action-short">Read</span>
                  <span className="mag-channel-arrow">&#x2197;</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7325566398129225728"
                target="_blank"
                rel="noopener noreferrer"
                className="mag-channel-card linkedin-card"
              >
                <div className="mag-channel-top">
                  <div className="mag-channel-icon linkedin-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </div>
                <h4 className="mag-channel-title">LinkedIn Newsletter</h4>
                <p className="mag-channel-desc">Bite-sized architectural breakdowns, career leverage, and engineering leadership.</p>
                <div className="mag-channel-action">
                  <span className="mag-channel-action-full">Read on LinkedIn</span>
                  <span className="mag-channel-action-short">Read</span>
                  <span className="mag-channel-arrow">&#x2197;</span>
                </div>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@thosynpax"
                target="_blank"
                rel="noopener noreferrer"
                className="mag-channel-card medium-card"
              >
                <div className="mag-channel-top">
                  <div className="mag-channel-icon medium-icon">
                    <i className="fab fa-medium-m"></i>
                  </div>
                </div>
                <h4 className="mag-channel-title">Medium Publication</h4>
                <p className="mag-channel-desc">Software development tutorials, design system patterns, and developer roadmaps.</p>
                <div className="mag-channel-action">
                  <span className="mag-channel-action-full">Read on Medium</span>
                  <span className="mag-channel-action-short">Read</span>
                  <span className="mag-channel-arrow">&#x2197;</span>
                </div>
              </a>

            </div>



          </div>
        </div>
      </section>

      {/* ── 6. ARTICLE READER MODAL ── */}
      {selectedArticle && (
        <div className="mag-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="mag-modal-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="mag-modal-header">
              <div className="mag-modal-badge-row">
                <span className="mag-card-issue-badge">{selectedArticle.issue}</span>
                <span className="mag-modal-cat">{selectedArticle.categoryName}</span>
                <span className="mag-modal-time">{selectedArticle.readTime}</span>
              </div>
              <button
                type="button"
                className="mag-modal-close"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close Article"
              >
                ✕
              </button>
            </div>

            {/* Article Content */}
            <div className="mag-modal-scroll-body">
              <h2 className="mag-modal-title">{selectedArticle.title}</h2>
              <div className="mag-modal-author-row">
                <span>By Thosyn Pax</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              {/* Cover Hero */}
              <div className="mag-modal-hero-img-wrap">
                <img loading="lazy"                   src={selectedArticle.cover}
                  alt={selectedArticle.title}
                  className="mag-modal-hero-img"
                />
              </div>

              <div className="mag-modal-prose">
                <p className="mag-modal-lead">{selectedArticle.fullContent.intro}</p>

                {selectedArticle.fullContent.sections.map((sec, i) => (
                  <div key={`sec-${i}`} className="mag-modal-section">
                    <h3 className="mag-modal-sec-heading">{sec.heading}</h3>
                    <p className="mag-modal-sec-body">{sec.body}</p>
                  </div>
                ))}

                <blockquote className="mag-modal-pullquote">
                  &ldquo;{selectedArticle.fullContent.quote}&rdquo;
                </blockquote>

                <div className="mag-modal-takeaways">
                  <h4 className="mag-modal-takeaways-title">Key Architectural Takeaways:</h4>
                  <ul>
                    {selectedArticle.fullContent.takeaways.map((point, ptIdx) => (
                      <li key={`pt-${ptIdx}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mag-modal-footer">
                <button
                  type="button"
                  className="mag-modal-footer-close-btn"
                  onClick={() => setSelectedArticle(null)}
                >
                  Close Article
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default LabMagazine;
