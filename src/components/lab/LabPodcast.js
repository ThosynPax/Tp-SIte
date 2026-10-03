import React, { useState, useRef } from 'react';
import '../../App.css';

const LabPodcast = () => {
  // ── Streaming Platforms Data ──
  const platforms = [
    {
      id: 'spotify',
      name: 'Spotify',
      tag: 'Main Channel',
      desc: 'The Product Lab Conversations — full audio episodes, show notes, and playlists.',
      url: 'https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB',
      icon: 'fab fa-spotify',
      color: '#1DB954'
    },
    {
      id: 'apple',
      name: 'Apple Podcasts',
      tag: 'Audio Series',
      desc: 'Subscribe, leave a review, and get new episodes delivered automatically every Sunday.',
      url: 'https://podcasts.apple.com/podcast/the-product-lab-conversations',
      icon: 'fab fa-apple',
      color: '#A259FF'
    },
    {
      id: 'ytmusic',
      name: 'YouTube Music',
      tag: 'Playlists',
      desc: 'Full audio and video episodes available on The Product Lab YouTube channel.',
      url: 'https://music.youtube.com/playlist?list=PLMk-yXty7nSn13LhpnE04Xk5g7AivLW0O',
      icon: 'fab fa-youtube',
      color: '#FF0000'
    },
    {
      id: 'pocketcasts',
      name: 'Pocket Casts',
      tag: 'Power Users',
      desc: 'Cross-device sync, trimmed silence, and the full TPL Conversations back catalogue.',
      url: 'https://pca.st/odaxzkhn',
      icon: 'fas fa-podcast',
      color: '#F43E37'
    },
    {
      id: 'playerfm',
      name: 'Player FM',
      tag: 'Global Stream',
      desc: 'Stream or download every episode of The Product Lab Conversations on Player FM.',
      url: 'https://player.fm/series/the-product-lab-conversations',
      icon: 'fas fa-broadcast-tower',
      color: '#2274A5'
    },
    {
      id: 'deezer',
      name: 'Deezer',
      tag: 'Global Stream',
      desc: 'The full TPL Conversations catalogue available on Deezer for listeners worldwide.',
      url: 'https://www.deezer.com/en/show/1003201721',
      icon: 'fab fa-deezer',
      color: '#000000'
    }
  ];

  // ── Invited Guests Data ──
  const guests = [
    {
      id: 'ryan-hamilton',
      name: 'Ryan Hamilton',
      role: 'CircleCI',
      company: 'CircleCI',
      episode: 'Shipping Faster without Over-Engineering, with Ryan Hamilton (CircleCI) -',
      image: '/lab/guest-podcast/s_RyanHamilton.jpg',
      tags: ['Engineering', 'Shipping', 'Speed'],
      url: '#platforms'
    }
  ];

  // ── YouTube Channel Recent Episodes (Carousel Slider) ──
  const youtubeEpisodes = [
    {
      id: 'yt-1',
      title: 'Building Resilient Systems in 2026: What Actually Works Under Load',
      episode: 'EP #15',
      duration: '52:18',
      date: 'Latest Episode',
      image: '/studio/studio-7.jpg',
      desc: 'A breakdown of fault tolerance, fallback architectures, and preventing cascading failures in high-volume microservices.',
      url: 'https://www.youtube.com/@thosynpaxlab/videos'
    },
    {
      id: 'yt-2',
      title: 'Vibe Coding, AI Agents & The Future of High-Leverage Software Engineering',
      episode: 'EP #14',
      duration: '1:08:42',
      date: 'Popular',
      image: '/studio/studio-8.jpg',
      desc: 'How modern autonomous coding assistants and agentic loops are redefining technical leadership and velocity.',
      url: 'https://www.youtube.com/@thosynpaxlab/videos'
    },
    {
      id: 'yt-3',
      title: 'Microservices vs Modular Monoliths: The Honest Truth After 10 Years',
      episode: 'EP #13',
      duration: '46:15',
      date: 'Deep Dive',
      image: '/studio/studio-1.jpg',
      desc: 'Cutting through the hype to examine operational complexity, team topology, and real developer productivity.',
      url: 'https://www.youtube.com/@thosynpaxlab/videos'
    },
    {
      id: 'yt-4',
      title: 'How to Break into High-Level Product Architecture as an Engineer',
      episode: 'EP #12',
      duration: '58:30',
      date: 'Career Guide',
      image: '/studio/studio-3.jpg',
      desc: 'Transitioning from writing features to making systemic trade-offs, writing RFCs, and influencing engineering orgs.',
      url: 'https://www.youtube.com/@thosynpaxlab/videos'
    },
    {
      id: 'yt-5',
      title: 'Design Systems From Scratch: Tokenization, Component APIs & Scale',
      episode: 'EP #11',
      duration: '49:05',
      date: 'Design & Code',
      image: '/studio/studio-2.jpg',
      desc: 'Practical architectural lessons for synchronizing Figma and production codebases across cross-functional teams.',
      url: 'https://www.youtube.com/@thosynpaxlab/videos'
    }
  ];

  // ── Carousel Controls & Mobile Touch Swipe ──
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselTrackRef = useRef(null);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % youtubeEpisodes.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + youtubeEpisodes.length) % youtubeEpisodes.length);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="story-page-wrapper lab-podcast-page">
      {/* ── Section 1: About the Podcast (Hero Intro) ── */}
      <section className="story-intro-section hektor-podcast-hero-section">
        <div className="story-intro-container">
          <div className="story-intro-left">
            <span className="hektor-badge-label">&#123; The Show &#125;</span>
            <h1 className="story-intro-title">
              About the<br />Podcast
            </h1>
          </div>
          <div className="story-intro-right">
            <div className="hektor-podcast-intro-content">
              <p className="story-intro-desc" style={{ marginBottom: '1.4rem' }}>
                <strong>The Product Lab Conversations</strong> is a weekly podcast hosted by Thosyn Pax — exploring what it actually takes to build products, companies, and careers in tech.
              </p>


              {/* Hektor Project Info List Inline */}
              <div className="hektor-project-info-list">
                <ul>
                  <li>
                    <div className="pi-heading">Host</div>
                    <div className="pi-content">Thosyn Pax</div>
                  </li>
                  <li>
                    <div className="pi-heading">Format</div>
                    <div className="pi-content">Conversations and Deep Dives</div>
                  </li>
                  <li>
                    <div className="pi-heading">Topics</div>
                    <div className="pi-content">Products, Careers, Architecture</div>
                  </li>
                  <li>
                    <div className="pi-heading">Channels</div>
                    <div className="pi-content">
                      <a href="#platforms" className="pi-link">
                        6+ Platforms <i className="fas fa-arrow-down"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Platforms Where the Podcast is On ── */}
      <section className="hektor-podcast-platforms-section" id="platforms">
        <div className="hektor-podcast-container">
          <div className="hektor-section-header">
            <span className="hektor-badge-label">&#123; Where to Listen &#125;</span>
            <div className="hektor-header-split">
              <h2 className="hektor-section-heading">
                Streaming<br />Platforms
              </h2>
              <p className="hektor-header-desc">
                Tune in wherever you get your podcasts. New episodes drop every Sunday — subscribe so you never miss one.
              </p>
            </div>
          </div>

          <div className="hektor-platforms-grid">
            {platforms.map((platform) => (
              <a 
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hektor-platform-card"
              >
                <div className="hektor-platform-card-top">
                  <div className="hektor-platform-icon-wrap" style={{ color: platform.color }}>
                    <i className={platform.icon}></i>
                  </div>
                </div>
                
                <h3 className="hektor-platform-name">{platform.name}</h3>
                <p className="hektor-platform-desc">{platform.desc}</p>
                
                <div className="hektor-platform-action">
                  <span>Listen Now</span>
                  <div className="hektor-platform-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Our Guests (Invited Speakers & Leaders) ── */}
      <section className="hektor-podcast-guests-section">
        <div className="hektor-podcast-container">
          <div className="hektor-section-header">
            <span className="hektor-badge-label">&#123; The Guests &#125;</span>
            <div className="hektor-header-split">
              <h2 className="hektor-section-heading">
                Brilliant Minds<br />We've Hosted
              </h2>
              <p className="hektor-header-desc">
                Behind every great conversation is someone who has been in the build. Meet the founders, architects, and tech professionals who have joined Thosyn behind the mic.
              </p>
            </div>
          </div>

          <div className="hektor-guests-grid">
            {guests.map((guest, idx) => (
              <div 
                key={guest.id} 
                className={`hektor-guest-card ${idx % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}
              >
                <div className="hektor-guest-img-wrap">
                  <img 
                    src={guest.image} 
                    alt={guest.name} 
                    className="hektor-guest-img" 
                    loading="lazy"
                  />
                  <div className="hektor-guest-badge">
                    <i className="fas fa-microphone-alt"></i> Guest
                  </div>
                </div>
                
                <div className="hektor-guest-body">
                  <h3 className="hektor-guest-name">{guest.name}</h3>
                  <div className="hektor-guest-role">
                    {guest.role} <span className="role-sep">&bull;</span> <span className="guest-company">{guest.company}</span>
                  </div>
                  
                  <div className="hektor-guest-ep-box">
                    <i className="fas fa-headphones"></i>
                    <span>{guest.episode}</span>
                  </div>

                  <a 
                    href={guest.url} 
                    target={guest.url.startsWith('#') ? "_self" : "_blank"} 
                    rel="noopener noreferrer" 
                    className="hektor-guest-btn"
                    onClick={(e) => {
                      if (guest.url.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(guest.url);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <span className="guest-btn-desktop">Listen to Episode</span>
                    <span className="guest-btn-mobile">Listen</span>
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Recent on YouTube (Boxed Carousel Slider) ── */}
      {false && (
        <section className="hektor-podcast-youtube-section" id="youtube-section">
          <div className="hektor-podcast-container">
            <div className="hektor-section-header">
              <div className="hektor-yt-header-left">
                <span className="hektor-badge-label">&#123; Video Episodes &#125;</span>
                <h2 className="hektor-section-heading">
                  Recent on<br />YouTube
                </h2>
              </div>
              
              <div className="hektor-yt-controls-wrap">
                <a 
                  href="https://www.youtube.com/@thosynpaxlab/videos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hektor-yt-channel-btn"
                >
                  <i className="fab fa-youtube"></i> Visit Channel
                </a>
                
                <div className="hektor-carousel-nav">
                  <button 
                    onClick={prevSlide} 
                    aria-label="Previous Slide" 
                    className="hektor-nav-btn"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <span className="hektor-nav-count">
                    {carouselIndex + 1} / {youtubeEpisodes.length}
                  </span>
                  <button 
                    onClick={nextSlide} 
                    aria-label="Next Slide" 
                    className="hektor-nav-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Boxed Carousel Track */}
            <div 
              className="hektor-carousel-outer"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="hektor-carousel-track" 
                ref={carouselTrackRef}
                style={{
                  transform: `translateX(-${carouselIndex * 100}%)`,
                  transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              >
                {youtubeEpisodes.map((ep) => (
                  <div key={ep.id} className="hektor-carousel-slide">
                    <div className="hektor-yt-card">
                      <div className="hektor-yt-card-media">
                        <img 
                          src={ep.image} 
                          alt={ep.title} 
                          className="hektor-yt-thumb" 
                          loading="lazy"
                        />
                        <div className="hektor-yt-play-overlay">
                          <a 
                            href={ep.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hektor-yt-play-btn"
                            aria-label={`Watch ${ep.title}`}
                          >
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                        <div className="hektor-yt-meta-tag top-left">
                          {ep.episode}
                        </div>
                        <div className="hektor-yt-meta-tag bottom-right">
                          <i className="far fa-clock"></i> {ep.duration}
                        </div>
                      </div>

                      <div className="hektor-yt-card-content">
                        <span className="hektor-yt-status-badge">{ep.date}</span>
                        <h3 className="hektor-yt-title">{ep.title}</h3>
                        <p className="hektor-yt-desc">{ep.desc}</p>
                        
                        <div className="hektor-yt-footer">
                          <a 
                            href={ep.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hektor-yt-watch-link"
                          >
                            Watch on YouTube <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel dots */}
            <div className="hektor-carousel-dots">
              {youtubeEpisodes.map((_, i) => (
                <button 
                  key={i} 
                  className={`hektor-dot ${i === carouselIndex ? 'active' : ''}`}
                  onClick={() => setCarouselIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LabPodcast;
