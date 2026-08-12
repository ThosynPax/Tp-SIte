import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const Lab = ({ theme }) => {
  useSEO({
    title: 'The Product Lab | Thosyn Pax',
    description: 'Welcome to The Product Lab. This is where theory meets the factory floor.',
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
    return ''; // Flat routes: on /lab, no subpages are active
  };

  const activeRecordId = getActiveId();

  // Custom record menu setup (One-word titles + short subtexts + local covers + FontAwesome icons)
  const menuRecords = [
    {
      id: 'story',
      title: 'Story',
      desc: 'Bio & mission',
      cover: '/Podcast.jpg',
      color: '#3b82f6', // blue
      icon: 'fa-user-astronaut',
      link: '/lab/story'
    },
    {
      id: 'products',
      title: 'Products',
      desc: 'Live projects',
      cover: '/hero.jpg',
      color: '#10b981', // green
      icon: 'fa-laptop-code',
      link: '/lab/products'
    },
    {
      id: 'store',
      title: 'Store',
      desc: 'eBook shop',
      cover: '/ebook2.jpg',
      color: '#ec4899', // pink
      icon: 'fa-shopping-bag',
      link: '/lab/store'
    },
    {
      id: 'podcast',
      title: 'Podcast',
      desc: 'Conversations',
      cover: '/Podcast.jpg',
      color: '#8b5cf6', // purple
      icon: 'fa-podcast',
      link: '/lab/podcast'
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      desc: 'Tech press',
      cover: '/hero.jpg',
      color: '#f59e0b', // orange
      icon: 'fa-envelope-open-text',
      link: '/lab/newsletter'
    },
    {
      id: 'magazine',
      title: 'Magazine',
      desc: 'Code essays',
      cover: '/hero.jpg',
      color: '#06b6d4', // cyan
      icon: 'fa-scroll',
      link: '/lab/magazine'
    },
    {
      id: 'resources',
      title: 'Resources',
      desc: 'Templates',
      cover: '/hero.jpg',
      color: '#ef4444', // red
      icon: 'fa-folder-open',
      link: '/lab/resources'
    }
  ];

  return (
    <div className="lab-layout-wrapper" style={{ backgroundColor: '#f8f7f2', color: '#111' }}>
      {/* --- Minimal Header Section (3 words, avatar) --- */}
      <header className="lab-header">
        <img src="/Podcast.jpg" alt="Thosyn Pax Profile" className="lab-profile-pic" />
        <div className="lab-title-block">
          <h1 className="lab-title" style={{ color: '#111' }}>THE PRODUCT LAB</h1>
        </div>
      </header>

      {/* --- 3D Vinyl Crate Navigation Menu --- */}
      <section className="crate-compact-wrapper">
        <div className="crate-shelf">
          {menuRecords.map((record, index) => {
            const isHovered = hoveredRecord === index;
            const isActive = activeRecordId === record.id;

            // 3D positioning parameters for fanned depth stack
            const yStep = isMobile ? -28 : -45;
            const zStep = isMobile ? 15 : 25;
            const hoverLift = isMobile ? -45 : -75;
            const activeLift = isMobile ? -25 : -40;

            const yTranslate = index * yStep;
            const zTranslate = (6 - index) * zStep;
            const xRotate = 16 - (index * 3.5);
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
                  borderColor: isHovered || isActive ? record.color : 'rgba(0, 0, 0, 0.15)',
                  boxShadow: isHovered 
                    ? '0 30px 60px rgba(0, 0, 0, 0.4)' 
                    : `0 15px 35px rgba(0, 0, 0, ${0.15 + (index * 0.03)})`,
                }}
                onMouseEnter={() => setHoveredRecord(index)}
                onMouseLeave={() => setHoveredRecord(null)}
              >
                {/* Header Tab with Solid top border & category title */}
                <div className="sleeve-header" style={{ borderTop: `4px solid ${record.color}`, backgroundColor: '#18181b' }}>
                  <span className="sleeve-tab-title" style={{ color: '#fff' }}>{record.title}</span>
                  <i className={`fas ${record.icon} sleeve-tab-icon`} style={{ color: record.color }}></i>
                </div>

                {/* Sleeve Cover Body Artwork */}
                <div className="sleeve-artwork" style={{ backgroundImage: `url(${record.cover})` }}>
                  <div className="sleeve-artwork-glow" />
                </div>

                {/* Footer description details */}
                <div className="sleeve-label-overlay">
                  <p className="sleeve-artist">{record.desc}</p>
                </div>
              </Link>
            );
          })}

          {/* Crate front physical box visual overlay (light theme friendly) */}
          <div className="crate-box-border" style={{
            border: '2px solid rgba(0, 0, 0, 0.08)',
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12), inset 0 2px 10px rgba(255,255,255,0.6)',
          }}></div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
