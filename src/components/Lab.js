import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../App.css';
import useSEO from '../hooks/useSEO';

const Lab = ({ theme }) => {
  useSEO({
    title: 'The Product Lab | Thosyn Pax',
    description: 'Welcome to The Product Lab. I am documenting the journey of building high-scale tech systems and global careers. This is where theory meets the factory floor.',
  });

  const location = useLocation();
  const [hoveredRecord, setHoveredRecord] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Resize listener for responsive layout calculations
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get active menu ID from URL route path
  const getActiveId = () => {
    const path = location.pathname;
    if (path.endsWith('/products')) return 'products';
    if (path.endsWith('/store')) return 'store';
    if (path.endsWith('/podcast')) return 'podcast';
    if (path.endsWith('/newsletter')) return 'newsletter';
    if (path.endsWith('/magazine')) return 'magazine';
    if (path.endsWith('/resources')) return 'resources';
    return 'story'; // Default default page
  };

  const activeRecordId = getActiveId();

  // Custom record menu setup (One-word titles + short subtexts + local covers)
  const menuRecords = [
    {
      id: 'story',
      title: 'Story',
      desc: 'Bio & mission',
      cover: '/Podcast.jpg',
      color: '#3b82f6', // blue
      link: '/lab'
    },
    {
      id: 'products',
      title: 'Products',
      desc: 'Live projects',
      cover: '/hero.jpg',
      color: '#10b981', // green
      link: '/lab/products'
    },
    {
      id: 'store',
      title: 'Store',
      desc: 'eBook shop',
      cover: '/ebook2.jpg',
      color: '#ec4899', // pink
      link: '/lab/store'
    },
    {
      id: 'podcast',
      title: 'Podcast',
      desc: 'Conversations',
      cover: '/Podcast.jpg',
      color: '#8b5cf6', // purple
      link: '/lab/podcast'
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      desc: 'Tech press',
      cover: '/hero.jpg',
      color: '#f59e0b', // orange
      link: '/lab/newsletter'
    },
    {
      id: 'magazine',
      title: 'Magazine',
      desc: 'Code essays',
      cover: '/hero.jpg',
      color: '#06b6d4', // cyan
      link: '/lab/magazine'
    },
    {
      id: 'resources',
      title: 'Resources',
      desc: 'Templates',
      cover: '/hero.jpg',
      color: '#ef4444', // red
      link: '/lab/resources'
    }
  ];

  return (
    <div className="lab-layout-wrapper">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: #050505;
          overflow-y: auto;
        }

        .lab-layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100vw;
          background-color: #050505;
          color: #fff;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }

        /* --- Header Section --- */
        .lab-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          max-width: 800px;
          width: 100%;
          margin: 2.5rem auto 1.5rem auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
        }

        .lab-profile-pic {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          flex-shrink: 0;
        }

        .lab-title-block {
          display: flex;
          flex-direction: column;
        }

        .lab-logo-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #3b82f6;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .lab-title {
          font-family: 'Space Mono', monospace;
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.1;
        }

        .lab-intro-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 0.35rem 0 0 0;
          line-height: 1.4;
        }

        /* --- 3D Vinyl Crate selector menu --- */
        .crate-compact-wrapper {
          display: flex;
          justify-content: center;
          margin: 0.5rem auto 2.5rem auto;
          width: 100%;
          max-width: 800px;
          height: 340px;
          position: relative;
          padding: 0 1.5rem;
          box-sizing: border-box;
          z-index: 10;
        }

        .crate-shelf {
          position: relative;
          width: 460px;
          height: 320px;
          perspective: 1200px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        /* Vinyl sleeve */
        .vinyl-sleeve {
          position: absolute;
          width: 200px;
          height: 200px;
          left: calc(50% - 100px);
          bottom: 20px;
          background-color: #111;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 2px 5px rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.15);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-sizing: border-box;
          text-decoration: none;
        }

        .sleeve-label-overlay {
          padding: 0.85rem;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0) 100%);
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        .sleeve-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sleeve-artist {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Crate visual physical container border */
        .crate-box-border {
          position: absolute;
          bottom: 10px;
          width: 320px;
          height: 100px;
          left: calc(50% - 160px);
          background-color: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transform: rotateX(25deg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), inset 0 2px 10px rgba(255,255,255,0.05);
          pointer-events: none;
          z-index: 15;
        }

        /* --- Nested Subpage Render Container --- */
        .lab-subpage-content {
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
          padding: 0 1.5rem 5rem 1.5rem;
          box-sizing: border-box;
        }

        /* --- Child components shared styles --- */
        .verified-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        /* Products list */
        .track-table {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .track-header-row {
          display: grid;
          grid-template-columns: 40px 2fr 1.2fr 1fr 40px;
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .track-row {
          display: grid;
          grid-template-columns: 40px 2fr 1.2fr 1fr 40px;
          padding: 0.8rem 1rem;
          align-items: center;
          border-radius: 6px;
          transition: background-color 0.2s;
          font-size: 0.85rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
          background-color: rgba(255, 255, 255, 0.01);
        }

        .track-row:hover {
          background-color: rgba(255, 255, 255, 0.06);
        }

        .track-number-box {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        .track-title {
          font-weight: 600;
          color: #fff;
        }

        .track-status {
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          display: inline-block;
        }

        .status-live {
          background-color: rgba(16, 185, 129, 0.12);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .status-dev {
          background-color: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .track-domain {
          color: rgba(255, 255, 255, 0.55);
        }

        .track-link-col {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .track-heart {
          color: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: color 0.2s;
        }

        .track-heart.liked {
          color: #3b82f6;
        }

        .track-link-btn {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: color 0.2s;
        }

        .track-link-btn:hover {
          color: #fff;
        }

        /* eBook release card */
        .new-release-layout {
          background-color: rgba(255,255,255,0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .release-book-cover {
          width: 110px;
          height: 154px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        .release-info {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .release-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          color: #fff;
        }

        .release-desc {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
          margin: 0 0 0.5rem 0;
        }

        .release-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: #071b34;
          color: #fff;
          text-decoration: none;
          padding: 0.65rem 1.25rem;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(59, 130, 246, 0.3);
          align-self: flex-start;
          transition: all 0.2s;
        }

        .release-btn:hover {
          background-color: #3b82f6;
          transform: scale(1.04);
        }

        /* Album Grid list */
        .album-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1.5rem;
        }

        .album-card {
          background-color: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .album-card:hover {
          background-color: rgba(255, 255, 255, 0.06);
          transform: translateY(-4px);
        }

        .album-cover-wrapper {
          position: relative;
          aspect-ratio: 1;
          margin-bottom: 0.75rem;
          border-radius: 6px;
          overflow: hidden;
          background-color: #111;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        .album-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .album-card:hover .album-cover {
          transform: scale(1.05);
        }

        .card-play-btn {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #3b82f6;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
          cursor: pointer;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.25s ease;
        }

        .album-card:hover .card-play-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .album-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .album-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #fff;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .album-subtext {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.3;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Resources Banner */
        .resources-banner {
          background: linear-gradient(135deg, rgba(7, 27, 52, 0.3) 0%, rgba(13, 13, 13, 0.5) 100%);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 12px;
          padding: 2.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .resources-banner:hover {
          border-color: rgba(59, 130, 246, 0.3);
        }

        .resources-banner-info {
          max-width: 480px;
        }

        .resources-banner-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }

        .resources-banner-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
          margin: 0;
        }

        .resources-banner-btn {
          flex-shrink: 0;
          background-color: #3b82f6;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.8rem 1.75rem;
          border-radius: 40px;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .resources-banner-btn:hover {
          transform: scale(1.05);
          background-color: #2563eb;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- Mobile Styles --- */
        @media (max-width: 900px) {
          .lab-header {
            flex-direction: column;
            text-align: center;
            margin: 1.5rem auto 1rem auto;
            gap: 1rem;
          }

          .crate-compact-wrapper {
            height: 260px;
          }

          .crate-shelf {
            width: 300px;
            height: 220px;
            perspective: 800px;
          }

          .crate-box-border {
            width: 220px;
            height: 70px;
            left: calc(50% - 110px);
            bottom: 5px;
            z-index: 15;
          }

          .vinyl-sleeve {
            width: 140px;
            height: 140px;
            left: calc(50% - 70px);
            bottom: 10px;
          }

          .sleeve-label-overlay {
            padding: 0.5rem;
          }

          .sleeve-title {
            font-size: 0.75rem;
          }

          .sleeve-artist {
            font-size: 0.55rem;
          }

          .track-header-row {
            display: none;
          }

          .track-row {
            grid-template-columns: 30px 1.5fr 1fr 30px;
            font-size: 0.8rem;
            padding: 0.6rem 0.5rem;
          }

          .track-domain {
            display: none;
          }

          .new-release-layout {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.2rem;
          }

          .release-btn {
            align-self: center;
          }

          .resources-banner {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }

          .resources-banner-btn {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }
        }
      `}</style>

      {/* --- Header Section (Title & Profile picture) --- */}
      <header className="lab-header">
        <img src="/Podcast.jpg" alt="Thosyn Pax Profile" className="lab-profile-pic" />
        <div className="lab-title-block">
          <span className="lab-logo-tag">The Product Lab</span>
          <h1 className="lab-title">THE PRODUCT LAB</h1>
          <p className="lab-intro-text">
            Documenting the journey of building high-scale tech systems and global careers. Bridging deep technical infrastructure and market-ready products.
          </p>
        </div>
      </header>

      {/* --- 3D Vinyl Crate Navigation Menu --- */}
      <section className="crate-compact-wrapper">
        <div className="crate-shelf">
          {menuRecords.map((record, index) => {
            const isHovered = hoveredRecord === index;
            const isActive = activeRecordId === record.id;

            // 3D positioning parameters for fanned depth stack
            const yStep = isMobile ? -20 : -32;
            const zStep = isMobile ? 12 : 20;
            const hoverLift = isMobile ? -35 : -55;
            const activeLift = isMobile ? -20 : -30;

            const yTranslate = index * yStep;
            const zTranslate = (6 - index) * zStep;
            const xRotate = 15 - (index * 3);
            const yRotate = -5 + (index * 1.5); // slight fan angle

            let transformStyle = `translate3d(0, ${yTranslate}px, ${zTranslate}px) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
            let zIndex = 10 - index;

            // Active state styling (stands out slightly raised and straight)
            if (isActive) {
              transformStyle = `translate3d(0, ${yTranslate + activeLift}px, ${zTranslate + 20}px) rotateX(5deg) rotateY(0deg) scale(1.03)`;
              zIndex = 40;
            }

            // Hover state overrides (pulls record sleeve up to the top z-index layer)
            if (isHovered) {
              transformStyle = `translate3d(0, ${yTranslate + hoverLift}px, ${zTranslate + 40}px) rotateX(8deg) rotateY(0deg) scale(1.08)`;
              zIndex = 100;
            }

            return (
              <Link
                key={record.id}
                to={record.link}
                className="vinyl-sleeve"
                style={{
                  transform: transformStyle,
                  zIndex: zIndex,
                  borderColor: isHovered || isActive ? record.color : 'rgba(255, 255, 255, 0.15)',
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%), url(${record.cover})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onMouseEnter={() => setHoveredRecord(index)}
                onMouseLeave={() => setHoveredRecord(null)}
              >
                <div className="sleeve-label-overlay">
                  <h3 className="sleeve-title">{record.title}</h3>
                  <p className="sleeve-artist">{record.desc}</p>
                </div>
              </Link>
            );
          })}

          {/* Crate front physical box visual overlay */}
          <div className="crate-box-border"></div>
        </div>
      </section>

      {/* --- Content Area (Mount active subpage route component) --- */}
      <main className="lab-subpage-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Lab;
