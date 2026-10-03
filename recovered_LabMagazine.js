import React, { useState, useEffect } from 'react';
import useSEO from '../../hooks/useSEO';

const LabMagazine = () => {
  useSEO({
    title: 'Magazine | The Product Lab by Thosyn Pax',
    description: 'Dispatches from the Factory Floor: architectural teardowns, agentic engineering playbooks, and essays on building real products.',
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      title: 'Zero to 10 Million: Database Sizing & Failover Topologies',
      readTime: '9 min read',
      date: 'Aug 2026',
      cover: '/studio/studio-1.jpg',
      isPortrait: false,
      excerpt: 'How we structured distributed Postgres read replicas, connection poolers, and write-ahead logs to survive viral traffic spikes without cold starts.',
      fullContent: {
        intro: 'Scaling a relational database to support millions of concurrent sessions is rarely about throwing bigger hardware at the problem. It is about understanding access patterns, query serialization, and how failover replicas behave under real-world replication lag.',
        sections: [
          {
            heading: '1. Connection Saturation and PgBouncer Layers',
            body: 'When 100,000 clients ping your API concurrently, PostgreSQL spawns a dedicated backend process per TCP connection. Memory explodes. By placing transaction-level connection poolers in front of regional replicas, we compressed 12,000 raw connections down to 120 multiplexed pool threads.'
          },
          {
            heading: '2. Asynchronous Replication vs Read Consistency',
            body: 'Read replicas lag by 10ms–80ms. For checkout flows or authenticated sessions, stale reads are catastrophic. We instituted replica routing with monotonic timestamp validation: if a user performed a write within the last 2 seconds, their subsequent reads automatically route to primary.'
          }
        ],
        quote: 'Hardware masks sloppy queries during staging. Production under real load tears off the mask.',
        takeaways: [
          'Multiplex connections at the ingress layer before hitting the engine.',
          'Always use write-pinned replica routing for post-mutation queries.',
          'Partition time-series tables early before write-ahead logs lock up vacuum cycles.'
        ]
      }
    },
    {
      id: 'art-02',
      issue: 'Issue #02',
      category: 'ai-agents',
      categoryName: 'AI & Agents',
      title: 'Designing Robust Autonomous Loops: The Supervisor Pattern',
      readTime: '12 min read',
      date: 'Aug 2026',
      cover: '/studio/studio-2.jpg',
      isPortrait: true,
      excerpt: 'Why single-agent LLM loops degrade into infinite hallucinatory recursions, and how deterministic supervisor graphs enforce execution bounds.',
      fullContent: {
        intro: 'Most naive multi-agent implementations fail because developers treat LLMs as deterministic compute rather than probabilistic semantic reasoners. When subagents pass state unchecked, errors compound exponentially.',
        sections: [
          {
            heading: '1. The State Machine Supervisor',
            body: 'Instead of letting worker agents invoke each other freely, our supervisor agent orchestrates via a rigid state transition graph. Worker outputs are schema-validated through Pydantic before any downstream tool invocation is executed.'
          },
          {
            heading: '2. Deterministic Verification Interceptors',
            body: 'Never ask an LLM if its own code compiles or if its SQL query is valid. Let a sandbox runner test the code directly and return the exact compiler error to the prompt context for self-healing.'
          }
        ],
        quote: 'Agentic workflows only succeed when deterministic guardrails wrap every probabilistic decision.',
        takeaways: [
          'De-couple reasoning from execution: use sandboxed runners for validation.',
          'Schema-enforce all inter-agent messages with strict Pydantic models.',
          'Enforce strict maximum turn counters to prevent cost and token runaway.'
        ]
      }
    },
    {
      id: 'art-03',
      issue: 'Issue #03',
      category: 'playbooks',
      categoryName: 'Playbooks',
      title: 'The Vibecoder\'s Codex: Shipping at 10x Velocity',
      readTime: '7 min read',
      date: 'Jul 2026',
      cover: '/studio/studio-3.jpg',
      isPortrait: false,
      excerpt: 'Prompt orchestration, AI test scaffolds, and how individual engineers are building what used to require 15-person product engineering teams.',
      fullContent: {
        intro: 'Vibecoding is not about blindly copy-pasting generated code. It is about operating as an architectural director who writes specifications, designs feedback loops, and commands AI models to generate, test, and refine software in seconds.',
        sections: [
          {
            heading: '1. The Spec-First Workflow',
            body: 'The bottleneck in software engineering is no longer typing syntax; it is clarity of thought. High-velocity engineers write clear, unambiguous implementation contracts before touching code.'
          },
          {
            heading: '2. Self-Testing Scaffolds',
            body: 'When you feed both the requirements and the test suite into an autonomous agent, it operates in a closed verification loop until green, freeing you to focus on system architecture.'
          }
        ],
        quote: 'The software engineer of tomorrow is not a typist; they are a systems conductor.',
        takeaways: [
          'Invest 80% of your time in precise specifications and data contracts.',
          'Automate feedback loops so the LLM evaluates against concrete runtime results.',
          'Ship in atomic, reviewable commits rather than massive monolithic prompts.'
        ]
      }
    },
    {
      id: 'art-04',
      issue: 'Issue #04',
      category: 'architecture',
      categoryName: 'Architecture',
      title: 'The Death of Microservice Sprawl: The Modular Monolith Returns',
      readTime: '11 min read',
      date: 'Jul 2026',
      cover: '/studio/studio-4.jpg',
      isPortrait: true,
      excerpt: 'Network latency tax, distributed transaction hell, and why teams are consolidating back into strictly bounded modular monoliths with instant local dev.',
      fullContent: {
        intro: 'For a decade, tech startups prematurely split their 10,000-line codebases into 40 microservices, swapping fast in-memory function calls for network latency, gRPC serialization, and distributed consensus nightmares.',
        sections: [
          {
            heading: '1. The Network Latency Penalty',
            body: 'Every remote RPC introduces TLS handshakes, network jitter, and failure modes. In a modular monolith, modules communicate through internal typed interfaces, dropping latency from 35ms per internal hop to sub-microsecond.'
          },
          {
            heading: '2. Enforcing Module Boundaries at Build Time',
            body: 'A monolith does not have to be a big ball of mud. Using package encapsulation and linter-enforced dependency rules, modules remain strictly isolated without requiring separate deployables.'
          }
        ],
        quote: 'Do not distribute your architecture until your organizational scale physically demands it.',
        takeaways: [
          'In-memory interfaces beat distributed network calls by orders of magnitude.',
          'Enforce strict code visibility rules to prevent spaghetti dependencies.',
          'Deploy as one atomic binary, scale horizontally with stateless instances.'
        ]
      }
    },
    {
      id: 'art-05',
      issue: 'Issue #05',
      category: 'ai-agents',
      categoryName: 'AI & Agents',
      title: 'Local LLMs in High-Security Environments: Edge Inference',
      readTime: '8 min read',
      date: 'Jun 2026',
      cover: '/studio/studio-5.jpg',
      isPortrait: false,
      excerpt: 'Running quantized 8B and 14B parameter models on on-premise hardware with zero data egress, sub-20ms time-to-first-token, and complete compliance.',
      fullContent: {
        intro: 'Sending proprietary client data, financial ledgers, or source code to third-party cloud APIs is a non-starter for regulated enterprises. With recent advances in 4-bit quantization, local models rival cloud models for specialized tasks.',
        sections: [
          {
            heading: '1. Quantization Without Intelligence Collapse',
            body: 'Modern AWQ and GGUF quantization techniques preserve 98.5% of model reasoning capability while shrinking memory footprint from 32GB of VRAM to under 8GB.'
          },
          {
            heading: '2. Dedicated Context Caching and Speculative Decoding',
            body: 'By keeping prompt KV-caches warm and using draft models for speculative token generation, throughput reaches 90 tokens/sec on consumer workstations.'
          }
        ],
        quote: 'Privacy is not a feature you bolt on after launch; it is an architectural prerequisite.',
        takeaways: [
          'Use 4-bit quantization for high-throughput semantic classification and extraction.',
          'Keep preambles and system contexts cached in GPU memory to eliminate latency.',
          'Zero cloud egress eliminates compliance overhead and recurring token costs.'
        ]
      }
    },
    {
      id: 'art-06',
      issue: 'Issue #06',
      category: 'culture',
      categoryName: 'Culture & Career',
      title: 'The One-Person Unicorn: High-Leverage Solopreneurship',
      readTime: '10 min read',
      date: 'Jun 2026',
      cover: '/studio/studio-6.jpg',
      isPortrait: true,
      excerpt: 'How lean technical operators leverage automated distribution flywheels, AI agent infrastructure, and zero-employee mechanics to print ARR.',
      fullContent: {
        intro: 'The traditional Silicon Valley playbook demanded hiring dozens of engineers and managers before finding product-market fit. Today, a single technical founder equipped with modern AI agents and cloud primitives can sustain millions in recurring revenue.',
        sections: [
          {
            heading: '1. Automated Customer Operations',
            body: 'Customer support, billing disputes, and user onboarding can be 90% handled through fine-tuned agents grounded in company documentation, with human escalation only for high-stakes decisions.'
          },
          {
            heading: '2. The Leverage Equation',
            body: 'When your marginal cost of producing software and serving users approaches zero, profit margins exceed 85%, creating resilient businesses immune to venture market cycles.'
          }
        ],
        quote: 'Headcount used to be a badge of honor. Today, high revenue per employee is the ultimate benchmark.',
        takeaways: [
          'Build systems that compound without adding operational overhead.',
          'Automate first-line user support and triage with deterministic agent workflows.',
          'Focus on cash flow and distribution over fundraising rounds.'
        ]
      }
    },
    {
      id: 'art-07',
      issue: 'Issue #07',
      category: 'playbooks',
      categoryName: 'Playbooks',
      title: 'Frontend Reactivity in 2026: Signals, Islands & Virtualization',
      readTime: '6 min read',
      date: 'May 2026',
      cover: '/studio/studio-7.jpg',
      isPortrait: false,
      excerpt: 'Goodbye Virtual DOM diffing overhead. Inside modern fine-grained signal subscriptions and how 60fps UI performance is achieved across complex web apps.',
      fullContent: {
        intro: 'For years, frontend development accepted heavy bundle sizes and tree-diffing algorithms as the cost of doing business. Fine-grained reactivity changes the game by updating only the exact DOM node bound to a state variable.',
        sections: [
          {
            heading: '1. Fine-Grained Reactive Graphs',
            body: 'Instead of re-rendering entire component subtrees when a count increments, reactive signals bind directly to DOM text nodes. Rerender cost drops to O(1).'
          },
          {
            heading: '2. Viewport-Aware DOM Virtualization',
            body: 'Rendering thousands of items in feeds or data grids without memory leak requires rigorous windowing and recycled DOM containers.'
          }
        ],
        quote: 'Smooth 60fps interfaces are not created by luck; they are engineered with deliberate memory discipline.',
        takeaways: [
          'Adopt fine-grained reactive primitives for high-frequency state changes.',
          'Always virtualize lists that exceed 50 items to keep memory constant.',
          'Ship minimal JavaScript to the client by hydrating only interactive islands.'
        ]
      }
    },
    {
      id: 'art-08',
      issue: 'Issue #08',
      category: 'culture',
      categoryName: 'Culture & Career',
      title: 'Global Tech Arbitrage: Building International Career Leverage',
      readTime: '13 min read',
      date: 'May 2026',
      cover: '/studio/studio-8.jpg',
      isPortrait: true,
      excerpt: 'Operating from emerging markets while serving global capital: currency hedging, remote positioning, and engineering reputation as your currency.',
      fullContent: {
        intro: 'Talent is evenly distributed across the globe, but opportunity historically was not. High-performing builders worldwide are now capturing global tech capital while maintaining lean localized cost structures.',
        sections: [
          {
            heading: '1. Proof of Work as Global Currency',
            body: 'No one asks where your degree is from when your open-source libraries have thousands of stars or your technical writing dissects distributed systems with precision.'
          },
          {
            heading: '2. Currency Arbitrage and Reinvestment',
            body: 'Earning in strong currencies while living in emerging tech hubs creates extreme financial leverage, allowing developers to self-fund ambitious products without outside investors.'
          }
        ],
        quote: 'Your code speaks directly to production servers. Your reputation transcends any geographical border.',
        takeaways: [
          'Build public proof of work through high-quality writing and open code.',
          'Position yourself globally rather than competing in local salary bands.',
          'Reinvest financial leverage into personal ventures and high-equity bets.'
        ]
      }
    }
  ];

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.category === activeFilter);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const archiveEditions = [
    {
      title: 'Volume I: Foundations of Scalability',
      topics: 'Postgres internal buffer pools, memory management, Linux kernel tuning, and network socket exhaustion under 100k RPS.',
      readTime: '6 Essays // 48 Pages',
      link: '#issue-1'
    },
    {
      title: 'Volume II: The Agentic Engineering Paradigm',
      topics: 'State machines vs recursive prompting, tool authorization policies, and multi-model consensus routing in production.',
      readTime: '8 Essays // 64 Pages',
      link: '#issue-2'
    },
    {
      title: 'Volume III: High-Velocity Product Craft',
      topics: 'Building full-stack web applications solo, micro-frontend deprecation, and modern design systems built in Vanilla CSS.',
      readTime: '5 Essays // 42 Pages',
      link: '#issue-3'
    },
    {
      title: 'Volume IV: Solopreneur Capital & Freedom',
      topics: 'Bootstrapping SaaS to $50k MRR, asynchronous remote management, and global tech distribution mechanisms.',
      readTime: '7 Essays // 56 Pages',
      link: '#issue-4'
    }
  ];

  return (
    <div className="mag-page-wrapper">

      {/* ── 1. CINEMATIC HERO HEADER (Single-Project-1 Style) ── */}
      <div id="page-header" className="mag-hero-header">
        
        {/* Background image & gradient overlay */}
        <div className="mag-hero-bg">
          <div className="mag-hero-overlay"></div>
          <img src="/hero.jpg" alt="Magazine Header" className="mag-hero-img" />
        </div>

        {/* Hero Content */}
        <div className="page-header-inner mag-hero-inner">
          <div className="ph-caption mag-caption">
            
            {/* Category Pills */}
            <div className="ph-caption-categories mag-categories">
              <span className="ph-caption-category">( The Product Magazine )</span>
              <span className="ph-caption-category">Vol. 2026</span>
              <span className="ph-caption-category">Deep Tech &amp; Architecture</span>
              <span className="ph-caption-category">Factory Floor Dispatch</span>
            </div>

            {/* Main Headline */}
            <h1 className="ph-caption-title mag-title">
              Dispatches From<br />The Factory Floor.
            </h1>

            {/* Lead Description */}
            <div className="ph-caption-description mag-desc">
              Deep architectural teardowns, agentic engineering playbooks, and candid essays on building real software in the age of intelligent machines.
            </div>

          </div>
        </div>

        {/* Floating Share Widget (from Single-Project-1) */}
        <div className={`ph-share mag-share ${shareOpen ? 'open' : ''}`}>
          <div className="ph-share-inner">
            <button
              type="button"
              className="ph-share-trigger"
              onClick={() => setShareOpen(!shareOpen)}
              aria-label="Share Magazine"
            >
              <span className="ph-share-text">{copiedLink ? 'Copied!' : 'Share'}</span>
              <span className="ph-share-icon"><i className="fas fa-share-alt"></i></span>
            </button>
            <div className="ph-share-buttons">
              <ul>
                <li>
                  <button type="button" onClick={handleCopyLink} title="Copy Link">
                    <i className="fas fa-link"></i>
                  </button>
                </li>
                <li>
                  <a
                    href="https://twitter.com/intent/tweet?text=Check%20out%20The%20Product%20Magazine%20by%20Thosyn%20Pax&url=https://theproductlab.com/lab/magazine"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share on X"
                  >
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://theproductlab.com/lab/magazine"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll Down Button (from Single-Project-1) */}
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

          {/* Filter Bar */}
          <div className="tt-grid-filter mag-filter-bar">
            {[
              { key: 'all', label: 'All Issues' },
              { key: 'architecture', label: 'Systems & Architecture' },
              { key: 'ai-agents', label: 'AI & Agentic Loops' },
              { key: 'playbooks', label: 'Engineering Playbooks' },
              { key: 'culture', label: 'Culture & Career' }
            ].map(filter => (
              <button
                key={filter.key}
                type="button"
                className={`mag-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="tt-portfolio-grid tt-pgi-boxed tt-pgi-tilted mag-masonry-grid">
            {filteredArticles.map((article, index) => {
              const isOdd = index % 2 === 0;
              return (
                <div
                  key={article.id}
                  className={`mag-card-wrap ${isOdd ? 'tilt-odd' : 'tilt-even'} ${article.isPortrait ? 'is-portrait' : ''}`}
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="mag-card-inner">
                    
                    {/* Cover Media */}
                    <div className="mag-card-media">
                      <img
                        src={article.cover}
                        alt={article.title}
                        loading="lazy"
                        className="mag-card-img"
                      />
                      <div className="mag-card-badge-row">
                        <span className="mag-card-issue-badge">{article.issue}</span>
                        <span className="mag-card-time-badge">{article.readTime}</span>
                      </div>
                    </div>

                    {/* Card Meta & Title */}
                    <div className="mag-card-info">
                      <div className="mag-card-cat-date">
                        <span className="mag-card-cat">{article.categoryName}</span>
                        <span className="mag-card-date">{article.date}</span>
                      </div>

                      <h3 className="mag-card-title">{article.title}</h3>
                      <p className="mag-card-excerpt">{article.excerpt}</p>

                      <div className="mag-card-footer">
                        <span className="mag-card-read-label">Read Full Article</span>
                        <span className="mag-card-arrow-circle">&#x2197;</span>
                      </div>
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
            Theory without execution is hallucination. Every dispatch documents the real systems, scars, and shipping speeds of modern builders.
          </blockquote>
          <div className="mag-manifesto-author">
            <span className="mag-author-dash">—</span>
            <span className="mag-author-name">Thosyn Pax</span>
            <span className="mag-author-role">// Founder &amp; Principal Architect, The Product Lab</span>
          </div>
        </div>
      </section>

      {/* ── 4. INSIDE THE ARCHIVES ACCORDION (Elements.html Style) ── */}
      <section className="mag-archives-section">
        <div className="mag-archives-container">
          <div className="mag-archives-header">
            <span className="mag-badge-label">( Archive Index )</span>
            <h2 className="mag-archives-title">Inside The Volumes</h2>
            <p className="mag-archives-desc">
              Browse the curated compilations of foundational engineering essays and operational runbooks.
            </p>
          </div>

          <div className="mag-accordion-list">
            {archiveEditions.map((edition, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div key={`arch-${idx}`} className={`mag-acc-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="mag-acc-head"
                    onClick={() => setActiveAccordion(isOpen ? -1 : idx)}
                  >
                    <span className="mag-acc-index">0{idx + 1}</span>
                    <span className="mag-acc-title">{edition.title}</span>
                    <span className="mag-acc-toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="mag-acc-body">
                      <p className="mag-acc-topics"><strong>Key Topics:</strong> {edition.topics}</p>
                      <div className="mag-acc-meta">
                        <span className="mag-acc-pages"><i className="fas fa-file-alt"></i> {edition.readTime}</span>
                        <a
                          href="#magazine-grid"
                          className="mag-acc-jump-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('magazine-grid')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Explore Essays <span className="arrow">&#x2197;</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. NEWSLETTER DISPATCH STRIP (Elements-Media Style) ── */}
      <section className="mag-newsletter-section">
        <div className="mag-newsletter-container">
          <div className="mag-nl-box">
            <div className="mag-nl-left">
              <span className="mag-badge-label light">( Stay Updated )</span>
              <h3 className="mag-nl-title">Get New Dispatches Direct To Your Inbox</h3>
              <p className="mag-nl-desc">
                No corporate fluff. Only battle-tested code architectures, agent design patterns, and engineering insights.
              </p>
            </div>
            <div className="mag-nl-right">
              {subscribed ? (
                <div className="mag-nl-success">
                  <span className="mag-nl-icon"><i className="fas fa-check-circle"></i></span>
                  <p>You’re on the dispatch list! First issue arriving shortly.</p>
                </div>
              ) : (
                <form className="mag-nl-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    required
                    placeholder="architect@domain.com"
                    className="mag-nl-input"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <button type="submit" className="mag-nl-btn">
                    Subscribe
                  </button>
                </form>
              )}
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
                <img
                  src={selectedArticle.cover}
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
