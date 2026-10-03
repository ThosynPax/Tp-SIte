import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import LabContact from './lab/LabContact';

const Lab = ({ theme }) => {
  useSEO({
    title: 'The Product Lab | Thosyn Pax',
    description: 'Welcome to The Product Lab. This is where theory meets the factory floor.',
  });

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const total = 5; // number of records
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % total);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Custom record menu setup (One-word titles + short subtexts + local covers + FontAwesome icons)
  const menuRecords = [
    {
      id: 'store',
      title: 'Store',
      desc: 'eBook shop',
      cover: '/ebook2.jpg',
      color: '#ec4899',
      icon: 'fa-shopping-bag',
      link: '/lab/store'
    },
    {
      id: 'podcast',
      title: 'Podcast',
      desc: 'Conversations',
      cover: '/lab/carousel/Podcast.png',
      color: '#8b5cf6',
      icon: 'fa-podcast',
      link: '/lab/podcast'
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      desc: 'Architecture Audit',
      cover: '/lab/carousel/Newsletter.png',
      color: '#f59e0b',
      icon: 'fa-envelope-open-text',
      link: '/lab/podcast'
    },
    {
      id: 'youtube',
      title: 'YouTube',
      desc: 'The Lab Channel',
      cover: '/lab/carousel/Youtube.png',
      color: '#ef4444',
      icon: 'fa-youtube',
      link: '/lab/podcast#youtube-section'
    }
  ];

  return (
    <div className="lab-layout-wrapper" style={{ backgroundColor: '#f7f7f7', color: '#111' }}>

      {/* ── Hektor-style Hero Header ── */}
      <header className="lab-hero-header">

        {/* Left: text content */}
        <div className="lab-hero-left">
          <span className="lab-hero-label">&#123; The Product Lab &#125;</span>

          <h1 className="lab-hero-headline">
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              The{' '}
              <span className="lab-hero-inline-img-wrap">
                <img loading="lazy"                   src="/Podcast.jpg"
                  alt="Thosyn Pax"
                  className="lab-hero-inline-vinyl"
                />
              </span>
              {' '}lab where
            </span>
            <br />
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              builders{' '}
              <span className="lab-hero-inline-disc-wrap">
                <span className="hero-vinyl-disc" title="The Product Lab Vinyl">
                  <span className="vinyl-disc-grooves"></span>
                  <span className="vinyl-disc-label">
                    <span className="vinyl-label-text">TPL</span>
                    <span className="vinyl-center-hole"></span>
                  </span>
                </span>
              </span>
              {' '}think.
            </span>
          </h1>

          <p className="lab-hero-sub">
            Media. Products. Education. Built from Lagos for the world.
          </p>
        </div>

        {/* Right profile photo column */}
        <div className="lab-hero-right">
          <div className="lab-hero-polaroid">
            <div className="lab-hero-polaroid-inner">
              <div
                className="lab-hero-profile-img"
                style={{ backgroundImage: 'url(/tp-black.png)' }}
              />
            </div>
            <div className="vc-card-footer">
              <div>
                <h3 className="vc-card-title">Host</h3>
                <span className="vc-card-tag">Thosyn Pax</span>
              </div>
              <div className="vc-card-arrow">↗</div>
            </div>
          </div>
        </div>

      </header>

      {/* ── Vinyl Card Carousel ── */}
      <section className="vc-section">

        {/* Slide track */}
        <div className="vc-track">
          {menuRecords.map((record, index) => {
            let offset = index - activeSlide;
            const total = menuRecords.length;

            if (offset > Math.floor(total / 2)) {
              offset -= total;
            } else if (offset < -Math.floor(total / 2)) {
              offset += total;
            }

            const isCenter = offset === 0;
            const isNear = Math.abs(offset) === 1;

            return (
              <div
                key={record.id}
                className={`vc-card-wrap ${isCenter ? 'vc-center' : isNear ? (offset === -1 ? 'vc-near-left' : 'vc-near-right') : 'vc-far'
                  }`}
                style={{ '--offset': offset }}
                onClick={() => isCenter
                  ? null         // center card navigates via Link below
                  : setActiveSlide(index)
                }
              >
                <Link to={record.link} className="vc-card" onClick={e => !isCenter && e.preventDefault()}>

                  {/* Sleeve / card body */}
                  <div className="vc-sleeve-body">
                    <div
                      className="vc-cover-img"
                      style={{ backgroundImage: `url(${record.cover})` }}
                    />
                  </div>

                  {/* Card footer: title, tag, arrow */}
                  <div className="vc-card-footer">
                    <div>
                      <h3 className="vc-card-title">{record.title}</h3>
                      <span className="vc-card-tag">{record.desc}</span>
                    </div>
                    {isCenter && (
                      <span className="vc-card-arrow">&#x2197;</span>
                    )}
                  </div>

                </Link>
              </div>
            );
          })}
        </div>

        {/* Controls row: counter + arrows */}
        <div className="vc-controls">
          <span className="vc-counter">{activeSlide + 1} / {menuRecords.length}</span>
          <div className="vc-arrows">
            <button
              className="vc-arrow-btn"
              onClick={() => setActiveSlide(i => (i - 1 + menuRecords.length) % menuRecords.length)}
              aria-label="Previous"
            >&#8592;</button>
            <button
              className="vc-arrow-btn"
              onClick={() => setActiveSlide(i => (i + 1) % menuRecords.length)}
              aria-label="Next"
            >&#8594;</button>
          </div>
        </div>

      </section>

      {/* ── Why Us Section ── */}
      <section className="lab-why-section">
        <div className="lab-why-left">
          <span className="lab-hero-label">&#123; What is the lab? &#125;</span>
          <h2 className="lab-why-headline">
            We are not just another media page. We are a working lab.
          </h2>
        </div>
        <div className="lab-why-right">
          <p className="lab-why-text">
            The Product Lab exists at the intersection of deep technical thinking and real product building. We document the build, teach the architecture, and ship the tools — so the next generation of builders does not have to figure it out alone.
          </p>
          <Link to="/lab/story" className="lab-why-btn">Read More</Link>
        </div>
      </section>

      {/* ── Marquee Section ── */}
      <section className="lab-marquee-section">
        <div className="lab-marquee-track left-to-right">
          <div className="lab-marquee-content">
            {Array(8).fill('Built for builders').map((text, i) => (
              <span key={`l1-${i}`} className="marquee-pill light">{text}</span>
            ))}
          </div>
          <div className="lab-marquee-content">
            {Array(8).fill('Built for builders').map((text, i) => (
              <span key={`l2-${i}`} className="marquee-pill light">{text}</span>
            ))}
          </div>
        </div>
        <div className="lab-marquee-track right-to-left">
          <div className="lab-marquee-content">
            {Array(6).fill('Over a decade of building').map((text, i) => (
              <span key={`d1-${i}`} className="marquee-pill dark">{text}</span>
            ))}
          </div>
          <div className="lab-marquee-content">
            {Array(6).fill('Over a decade of building').map((text, i) => (
              <span key={`d2-${i}`} className="marquee-pill dark">{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact & Sponsorship Section (Hektor Style) ── */}
      <LabContact />

    </div>
  );
};

export default Lab;
