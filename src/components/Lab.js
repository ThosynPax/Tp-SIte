import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import useSEO from '../hooks/useSEO';

const Lab = ({ theme }) => {
  useSEO({
    title: 'The Product Lab | Thosyn Pax',
    description: 'Welcome to The Product Lab. I am documenting the journey of building high-scale tech systems and global careers. This is where theory meets the factory floor.',
  });

  const mainContentRef = useRef(null);

  // Active state tracks which record is expanded (null if crate view)
  const [activeRecord, setActiveRecord] = useState(null);
  const [hoveredRecord, setHoveredRecord] = useState(null);

  // Bottom music player simulation state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    id: 'default',
    title: 'EP 12: Scaling to Millions',
    artist: 'The Product Lab Conversations',
    cover: '/Podcast.jpg',
    duration: 2700, // 45:00
  });

  // Track user likes
  const [likedTracks, setLikedTracks] = useState({
    'paxvto': false,
    'karpture': true,
    'paste': false,
    'qell': true,
    'remake': false,
    'playbook': true,
    'pod-spotify': false,
    'mag-01': true,
  });

  // Mock player timer ticker
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  // Format time utility (seconds -> MM:SS)
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Handle playing an item
  const handlePlayItem = (id, title, artist, cover, durationSeconds) => {
    if (currentTrack.id === id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack({
        id,
        title,
        artist,
        cover,
        duration: durationSeconds || 180, // Default to 3:00 if not specified
      });
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  // Handle liking
  const handleToggleLike = (id, e) => {
    e.stopPropagation();
    setLikedTracks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Vinyl records metadata definitions
  const records = [
    {
      id: 'story',
      title: 'The Story',
      artist: 'Thosyn Pax biography',
      cover: '/Podcast.jpg',
      color: '#3b82f6', // blue
      trackCount: 3,
      desc: 'Behind the Product Architect mindset and execution rules.'
    },
    {
      id: 'products',
      title: 'Lab Projects',
      artist: 'Live products & status',
      cover: '/hero.jpg',
      color: '#10b981', // green
      trackCount: 5,
      desc: 'Explore PaxVTO, Karpture, PASTE, QELL, and ReMake.'
    },
    {
      id: 'store',
      title: 'New Release eBook',
      artist: 'Buy playbooks & guides',
      cover: '/ebook2.jpg',
      color: '#ec4899', // pink
      trackCount: 1,
      desc: "Get your copy of The Vibecoder's Playbook."
    },
    {
      id: 'podcast',
      title: 'Podcast Episodes',
      artist: 'The Product Lab Conversations',
      cover: '/Podcast.jpg',
      color: '#8b5cf6', // purple
      trackCount: 5,
      desc: 'Listen on Spotify, Apple Podcasts, YouTube Music, etc.'
    },
    {
      id: 'newsletter',
      title: 'The Newsletters',
      artist: 'Substack & LinkedIn posts',
      cover: '/hero.jpg',
      color: '#f59e0b', // orange
      trackCount: 2,
      desc: 'Weekly Architecture Audit and tech breakdowns.'
    },
    {
      id: 'magazine',
      title: 'Lab Magazine',
      artist: 'Technical architecture issues',
      cover: '/hero.jpg',
      color: '#06b6d4', // cyan
      trackCount: 3,
      desc: 'Deep dives on scaling systems, AI loops, and prompts.'
    },
    {
      id: 'resources',
      title: 'Technical Templates',
      artist: 'Blueprints & utilities',
      cover: '/hero.jpg',
      color: '#ef4444', // red
      trackCount: 1,
      desc: 'Direct access to templates and database models.'
    }
  ];

  return (
    <div className="lab-dashboard-wrapper">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: #050505;
          overflow: hidden;
        }

        .lab-dashboard-wrapper {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          background-color: #050505;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        /* --- Main Crate View --- */
        .crate-view-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: calc(100vh - 90px);
          overflow: hidden;
          position: relative;
          background: radial-gradient(circle at center, #0a1f3d 0%, #050505 100%);
          padding: 2rem;
          box-sizing: border-box;
        }

        .crate-header {
          text-align: center;
          margin-bottom: 2.5rem;
          z-index: 5;
        }

        .crate-logo {
          font-family: 'Space Mono', monospace;
          font-size: 0.95rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #3b82f6;
          font-weight: 700;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .crate-title {
          font-family: 'Space Mono', monospace;
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 0 0.5rem 0;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .crate-subtitle {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        /* 3D Crate Box Layout */
        .crate-3d-wrapper {
          width: 580px;
          height: 380px;
          position: relative;
          perspective: 1200px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 50px;
          z-index: 3;
        }

        /* Crate visual physical container border */
        .crate-box-border {
          position: absolute;
          bottom: 20px;
          width: 600px;
          height: 140px;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transform: rotateX(25deg);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 2px 10px rgba(255,255,255,0.05);
          pointer-events: none;
          z-index: 10;
        }

        .crate-box-front-bar {
          position: absolute;
          bottom: 20px;
          width: 580px;
          height: 12px;
          background-color: rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          z-index: 11;
          filter: blur(4px);
          pointer-events: none;
        }

        /* Vinyl sleeve sleeves array */
        .vinyl-sleeve {
          position: absolute;
          width: 240px;
          height: 240px;
          background-color: #111;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 2px 5px rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-sizing: border-box;
        }

        .vinyl-sleeve-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%);
          pointer-events: none;
        }

        .sleeve-label-overlay {
          padding: 1.25rem 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0) 100%);
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        .sleeve-category-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
          display: inline-block;
          letter-spacing: 0.5px;
        }

        .sleeve-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.2rem 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sleeve-artist {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }

        /* --- Detail View Section --- */
        .detail-view-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: calc(100vh - 90px);
          overflow: hidden;
          background: linear-gradient(to bottom, #061930 0%, #080808 300px, #050505 100%);
          animation: fadeIn 0.4s ease;
        }

        .detail-top-nav {
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          background-color: rgba(8, 8, 8, 0.4);
          backdrop-filter: blur(10px);
          justify-content: space-between;
          z-index: 5;
        }

        .back-crate-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: color 0.2s;
        }

        .back-crate-btn:hover {
          color: #fff;
        }

        .back-crate-btn i {
          font-size: 0.8rem;
          transition: transform 0.2s;
        }

        .back-crate-btn:hover i {
          transform: translateX(-4px);
        }

        .detail-main-layout {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        /* Left Side: Sleeve + Spinning Vinyl */
        .detail-visual-col {
          width: 40%;
          min-width: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-right: 1px solid rgba(255,255,255,0.03);
          background-color: rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }

        .visual-vinyl-player {
          width: 320px;
          height: 280px;
          position: relative;
          display: flex;
          align-items: center;
        }

        /* Sleeve inside detail view */
        .player-sleeve-cover {
          width: 200px;
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 10px 15px 35px rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 3;
          position: absolute;
          left: 10px;
          background-color: #111;
          background-size: cover;
          background-position: center;
          transition: transform 0.3s;
        }

        /* Spinning Vinyl Disc */
        .player-vinyl-disc {
          width: 196px;
          height: 196px;
          border-radius: 50%;
          position: absolute;
          left: 105px;
          z-index: 2;
          background: radial-gradient(circle, #0b0b0b 35%, #181818 36%, #0b0b0b 38%, #252525 40%, #111 41%, #000 45%, #0f0f0f 48%, #202020 50%, #111 60%, #000 70%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 5px 10px 25px rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .player-vinyl-disc::before {
          content: '';
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

        .vinyl-center-label {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 3px solid #000;
          box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 0.5rem;
          font-weight: 700;
          text-align: center;
          line-height: 1.1;
          padding: 0.5rem;
          box-sizing: border-box;
          background-size: cover;
          background-position: center;
        }

        .vinyl-center-hole {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #050505;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.2);
          z-index: 10;
        }

        /* Vinyl rotating animation rules */
        .spin-animation {
          animation: spinRecord 6s linear infinite;
        }

        @keyframes spinRecord {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Right Side: Scrollable details listing */
        .detail-content-col {
          flex: 1;
          overflow-y: auto;
          padding: 2.5rem 3rem;
          box-sizing: border-box;
        }

        .detail-content-col::-webkit-scrollbar { display: none; }
        .detail-content-col { -ms-overflow-style: none; scrollbar-width: none; }

        .content-panel-header {
          margin-bottom: 2rem;
        }

        .content-panel-category {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #3b82f6;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 0.4rem;
        }

        .content-panel-title {
          font-family: 'Space Mono', monospace;
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 0.8rem 0;
          letter-spacing: -1px;
          color: #fff;
        }

        .content-panel-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
          max-width: 600px;
          margin: 0;
        }

        /* --- Story Section Content CSS --- */
        .story-layout {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: rgba(255,255,255,0.8);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 650px;
        }

        .story-layout p {
          margin: 0;
        }

        .story-highlight-quote {
          border-left: 3px solid #3b82f6;
          padding-left: 1.25rem;
          font-style: italic;
          color: #fff;
          font-size: 1.05rem;
          margin: 1rem 0;
        }

        /* --- Products Section Content CSS --- */
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
          cursor: pointer;
          transition: background-color 0.2s;
          font-size: 0.85rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        .track-row:hover {
          background-color: rgba(255, 255, 255, 0.06);
        }

        .track-row.active-playing {
          background-color: rgba(59, 130, 246, 0.08);
        }

        .track-row.active-playing .track-title {
          color: #3b82f6;
        }

        .track-number-box {
          position: relative;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        .track-play-icon {
          display: none;
          color: #fff;
          cursor: pointer;
        }

        .track-row:hover .track-num {
          display: none;
        }

        .track-row:hover .track-play-icon {
          display: inline-block;
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

        .track-row:hover .track-link-btn {
          color: #fff;
        }

        /* --- Store Content Section CSS --- */
        .new-release-layout {
          background-color: rgba(255,255,255,0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          max-width: 650px;
        }

        .release-book-cover {
          width: 120px;
          height: 168px;
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

        /* --- Podcast / Album Grids --- */
        .album-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 1.5rem;
        }

        .album-card {
          background-color: rgba(255, 255, 255, 0.02);
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

        /* --- Technical Resources Block --- */
        .resources-banner {
          background: linear-gradient(135deg, rgba(7, 27, 52, 0.4) 0%, rgba(13, 13, 13, 0.5) 100%);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 12px;
          padding: 2.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          max-width: 700px;
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

        /* --- Bottom Player Bar --- */
        .lab-player-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 90px;
          background-color: #0a0a0a;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          box-sizing: border-box;
          z-index: 100;
          box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.5);
        }

        .player-track-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 30%;
          min-width: 180px;
        }

        .player-cover {
          width: 56px;
          height: 56px;
          border-radius: 4px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .player-metadata {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          overflow: hidden;
        }

        .player-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .player-artist {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .player-track-heart {
          color: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          margin-left: 0.5rem;
          transition: color 0.2s;
        }

        .player-track-heart.liked {
          color: #3b82f6;
        }

        /* Middle controls */
        .player-controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          width: 40%;
          max-width: 500px;
        }

        .control-buttons {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .control-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.2s;
        }

        .control-btn:hover {
          color: #fff;
        }

        .btn-play-pause {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #fff;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: transform 0.1s;
        }

        .btn-play-pause:hover {
          transform: scale(1.05);
          color: #000;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.7rem;
          font-family: 'Space Mono', monospace;
        }

        .progress-bar-bg {
          flex: 1;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          position: relative;
          cursor: pointer;
        }

        .progress-bar-active {
          height: 100%;
          background-color: #3b82f6;
          border-radius: 100px;
          position: relative;
        }

        .progress-handle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          right: -5px;
          top: -3px;
          display: none;
        }

        .progress-bar-bg:hover .progress-bar-active {
          background-color: #2563eb;
        }

        .progress-bar-bg:hover .progress-handle {
          display: block;
        }

        /* Right controls */
        .player-volume-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 30%;
          justify-content: flex-end;
        }

        .volume-slider-bg {
          width: 80px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 100px;
          position: relative;
          cursor: pointer;
        }

        .volume-slider-active {
          height: 100%;
          background-color: #fff;
          border-radius: 100px;
        }

        .volume-slider-bg:hover .volume-slider-active {
          background-color: #3b82f6;
        }

        /* --- Transitions --- */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- Responsive layouts --- */
        @media (max-width: 900px) {
          .crate-3d-wrapper {
            width: 90%;
            height: 320px;
          }

          .crate-box-border {
            width: 95%;
          }

          .crate-box-front-bar {
            width: 90%;
          }

          .vinyl-sleeve {
            width: 160px;
            height: 160px;
          }

          .detail-main-layout {
            flex-direction: column;
            overflow-y: auto;
          }

          .detail-main-layout::-webkit-scrollbar { display: none; }
          .detail-main-layout { -ms-overflow-style: none; scrollbar-width: none; }

          .detail-visual-col {
            width: 100%;
            height: 240px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.03);
            padding: 1.5rem;
          }

          .visual-vinyl-player {
            width: 260px;
            height: 200px;
          }

          .player-sleeve-cover {
            width: 140px;
            height: 140px;
          }

          .player-vinyl-disc {
            width: 136px;
            height: 136px;
            left: 80px;
          }

          .vinyl-center-label {
            width: 50px;
            height: 50px;
          }

          .detail-content-col {
            width: 100%;
            overflow-y: visible;
            padding: 1.5rem;
          }

          .lab-player-bar {
            height: 80px;
            padding: 0 1rem;
          }

          .player-volume-info {
            display: none;
          }

          .player-track-info {
            width: 50%;
          }

          .player-controls {
            width: 50%;
          }
        }
      `}</style>

      {/* --- Main Crate View (Browsing mode) --- */}
      {activeRecord === null ? (
        <div className="crate-view-container">
          <div className="crate-header">
            <div className="crate-logo">
              <i className="fas fa-compact-disc"></i>
              <span>Crate Room</span>
            </div>
            <h1 className="crate-title">THE PRODUCT LAB</h1>
            <p className="crate-subtitle">Click a record sleeve to pull it out and explore.</p>
          </div>

          <div className="crate-3d-wrapper">
            {records.map((record, index) => {
              const isHovered = hoveredRecord === index;
              
              // Calculate 3D card layout parameters
              const zTranslate = index * 30; // Closer records have higher Z-values
              const yTranslate = index * -15; // Cascading height steps
              const xRotate = 25; // Tilt back angle
              
              // Hover adjustments (pulls record slightly up and to the front)
              const transformStyle = isHovered
                ? `translate3d(0, ${yTranslate - 55}px, ${zTranslate + 25}px) rotateX(12deg)`
                : `translate3d(0, ${yTranslate}px, ${zTranslate}px) rotateX(${xRotate}deg)`;
                
              const zIndex = isHovered ? 50 : index + 1;

              return (
                <div
                  key={record.id}
                  className="vinyl-sleeve"
                  style={{
                    transform: transformStyle,
                    zIndex: zIndex,
                    borderColor: isHovered ? record.color : 'rgba(255, 255, 255, 0.15)',
                    // Cover artwork style
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%), url(${record.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onMouseEnter={() => setHoveredRecord(index)}
                  onMouseLeave={() => setHoveredRecord(null)}
                  onClick={() => {
                    setActiveRecord(record.id);
                    // Dynamically queue section-related soundtrack/track
                    if (record.id === 'products') {
                      handlePlayItem('paxvto', 'PaxVTO Project Specs', 'AR Commerce Lab Session', '/Podcast.jpg', 180);
                    } else if (record.id === 'store') {
                      handlePlayItem('playbook', "The Vibecoder's Playbook Audiobook", 'eBook Audiobook Preview', '/ebook2.jpg', 320);
                    } else if (record.id === 'podcast') {
                      handlePlayItem('pod-spotify', 'Spotify Podcast Channel', 'Product Lab Conversations', '/Podcast.jpg', 2700);
                    } else {
                      handlePlayItem(record.id, `${record.title} Track`, record.artist, record.cover, 180);
                    }
                  }}
                >
                  <div className="vinyl-sleeve-glow" />
                  <div className="sleeve-label-overlay">
                    <span className="sleeve-category-tag" style={{ color: record.color }}>
                      {record.id}
                    </span>
                    <h3 className="sleeve-title">{record.title}</h3>
                    <p className="sleeve-artist">{record.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Crate front physical box visual overlay */}
            <div className="crate-box-border"></div>
            <div className="crate-box-front-bar"></div>
          </div>
        </div>
      ) : (
        /* --- Detail view panels (Active sleeve mode) --- */
        <div className="detail-view-container">
          {/* Header toolbar */}
          <div className="detail-top-nav">
            <button className="back-crate-btn" onClick={() => setActiveRecord(null)}>
              <i className="fas fa-arrow-left"></i>
              <span>Slide Record back in Crate</span>
            </button>
            <div className="crate-logo" style={{ margin: 0, fontSize: '0.85rem' }}>
              <i className="fas fa-compact-disc"></i>
              <span>Side A Playing</span>
            </div>
          </div>

          <div className="detail-main-layout">
            {/* Left Col: Visual Record player */}
            <div className="detail-visual-col">
              {(() => {
                const currentRecordMeta = records.find(r => r.id === activeRecord);
                if (!currentRecordMeta) return null;
                return (
                  <div className="visual-vinyl-player">
                    {/* Spinning vinyl record disc */}
                    <div 
                      className={`player-vinyl-disc ${isPlaying ? 'spin-animation' : ''}`}
                      style={{
                        transform: isPlaying ? 'none' : 'rotate(45deg)'
                      }}
                    >
                      <div 
                        className="vinyl-center-label"
                        style={{
                          backgroundImage: `url(${currentRecordMeta.cover})`,
                          borderColor: currentRecordMeta.color
                        }}
                      >
                        <div style={{ marginTop: '35px', textShadow: '0 2px 4px #000' }}>
                          SIDE A
                        </div>
                      </div>
                      <div className="vinyl-center-hole"></div>
                    </div>

                    {/* Sleeve Cover Card */}
                    <div 
                      className="player-sleeve-cover"
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%), url(${currentRecordMeta.cover})`
                      }}
                    />
                  </div>
                );
              })()}
            </div>

            {/* Right Col: Section Content panels */}
            <div className="detail-content-col" ref={mainContentRef}>
              
              {/* --- 1. Story Record details --- */}
              {activeRecord === 'story' && (
                <div>
                  <div className="content-panel-header">
                    <span className="content-panel-category">Profile Sleeve</span>
                    <h2 className="content-panel-title">Thosyn Pax</h2>
                    <p className="content-panel-desc">Documenting the journey of building high-scale tech systems and global careers.</p>
                  </div>
                  <div className="story-layout">
                    <p>
                      I lead with a "Product Architect" mindset—bridging the gap between deep technical infrastructure and market-ready products. I specialize in scaling operational engines, guiding developer frameworks, and structuring code architectures for speed.
                    </p>
                    <div className="story-highlight-quote">
                      "Theoretical designs are blueprint artifacts. The factory floor is where products are tested, shipped, and scaled. My role is to bridge that chasm."
                    </div>
                    <p>
                      Currently managing product operations at Cre8fast. Running fast execution loops, exploring next-generation AI agent integration layers, and compiling code design blueprints.
                    </p>
                  </div>
                </div>
              )}

              {/* --- 2. Products Record details --- */}
              {activeRecord === 'products' && (
                <div>
                  <div className="content-panel-header">
                    <span className="content-panel-category">Tracklist Sleeve</span>
                    <h2 className="content-panel-title">Popular Projects</h2>
                    <p className="content-panel-desc">A selection of live products, utilities, and integrations deployed from the Product Lab.</p>
                  </div>
                  <div className="track-table">
                    <div className="track-header-row">
                      <span>#</span>
                      <span>Title</span>
                      <span>Domain</span>
                      <span>Status</span>
                      <span></span>
                    </div>

                    {/* PaxVTO */}
                    <div 
                      className={`track-row ${currentTrack.id === 'paxvto' ? 'active-playing' : ''}`}
                      onClick={() => handlePlayItem('paxvto', 'PaxVTO Project Specs', 'AR Commerce Lab Session', '/Podcast.jpg', 180)}
                    >
                      <div className="track-number-box">
                        <span className="track-num">1</span>
                        <i className="fas fa-play track-play-icon"></i>
                      </div>
                      <div className="track-title">PaxVTO</div>
                      <div className="track-domain">AR Commerce</div>
                      <div>
                        <span className="track-status status-dev">In-Dev</span>
                      </div>
                      <div className="track-link-col">
                        <i 
                          className={`fas fa-heart track-heart ${likedTracks['paxvto'] ? 'liked' : ''}`}
                          onClick={(e) => handleToggleLike('paxvto', e)}
                        ></i>
                        <span className="track-link-btn"><i className="fas fa-external-link-alt"></i></span>
                      </div>
                    </div>

                    {/* Karpture */}
                    <div 
                      className={`track-row ${currentTrack.id === 'karpture' ? 'active-playing' : ''}`}
                      onClick={() => handlePlayItem('karpture', 'Karpture Chrome Integration', 'Chrome Extension Demo', '/hero.jpg', 210)}
                    >
                      <div className="track-number-box">
                        <span className="track-num">2</span>
                        <i className="fas fa-play track-play-icon"></i>
                      </div>
                      <div className="track-title">Karpture</div>
                      <div className="track-domain">Chrome Extension</div>
                      <div>
                        <span className="track-status status-live">Live</span>
                      </div>
                      <div className="track-link-col">
                        <i 
                          className={`fas fa-heart track-heart ${likedTracks['karpture'] ? 'liked' : ''}`}
                          onClick={(e) => handleToggleLike('karpture', e)}
                        ></i>
                        <a href="https://trykarpture.com/?ref=thosynpax.com" target="_blank" rel="noopener noreferrer" className="track-link-btn" onClick={(e) => e.stopPropagation()}>
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>

                    {/* PASTE */}
                    <div 
                      className={`track-row ${currentTrack.id === 'paste' ? 'active-playing' : ''}`}
                      onClick={() => handlePlayItem('paste', 'PASTE Education Portal', 'Tech Education Session', '/Podcast.jpg', 240)}
                    >
                      <div className="track-number-box">
                        <span className="track-num">3</span>
                        <i className="fas fa-play track-play-icon"></i>
                      </div>
                      <div className="track-title">PASTE</div>
                      <div className="track-domain">Tech Education</div>
                      <div>
                        <span className="track-status status-live">Live</span>
                      </div>
                      <div className="track-link-col">
                        <i 
                          className={`fas fa-heart track-heart ${likedTracks['paste'] ? 'liked' : ''}`}
                          onClick={(e) => handleToggleLike('paste', e)}
                        ></i>
                        <a href="https://withpaste.com/?ref=thosynpax.com" target="_blank" rel="noopener noreferrer" className="track-link-btn" onClick={(e) => e.stopPropagation()}>
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>

                    {/* QELL */}
                    <div 
                      className={`track-row ${currentTrack.id === 'qell' ? 'active-playing' : ''}`}
                      onClick={() => handlePlayItem('qell', 'QELL Architecture Breakdown', 'Cre8fast Product Lab', '/hero.jpg', 190)}
                    >
                      <div className="track-number-box">
                        <span className="track-num">4</span>
                        <i className="fas fa-play track-play-icon"></i>
                      </div>
                      <div className="track-title">QELL</div>
                      <div className="track-domain">Cre8fast Product Lab</div>
                      <div>
                        <span className="track-status status-live">Live</span>
                      </div>
                      <div className="track-link-col">
                        <i 
                          className={`fas fa-heart track-heart ${likedTracks['qell'] ? 'liked' : ''}`}
                          onClick={(e) => handleToggleLike('qell', e)}
                        ></i>
                        <a href="https://cre8fast.thosynpax.com/qell" target="_blank" rel="noopener noreferrer" className="track-link-btn" onClick={(e) => e.stopPropagation()}>
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>

                    {/* ReMake */}
                    <div 
                      className={`track-row ${currentTrack.id === 'remake' ? 'active-playing' : ''}`}
                      onClick={() => handlePlayItem('remake', 'ReMake Curator Blueprint', 'Media Curation Session', '/Podcast.jpg', 150)}
                    >
                      <div className="track-number-box">
                        <span className="track-num">5</span>
                        <i className="fas fa-play track-play-icon"></i>
                      </div>
                      <div className="track-title">ReMake</div>
                      <div className="track-domain">A Curator</div>
                      <div>
                        <span className="track-status status-live">Live</span>
                      </div>
                      <div className="track-link-col">
                        <i 
                          className={`fas fa-heart track-heart ${likedTracks['remake'] ? 'liked' : ''}`}
                          onClick={(e) => handleToggleLike('remake', e)}
                        ></i>
                        <a href="https://cut.thosynpax.com/" target="_blank" rel="noopener noreferrer" className="track-link-btn" onClick={(e) => e.stopPropagation()}>
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 3. Store Record details --- */}
              {activeRecord === 'store' && (
                <div>
                  <div className="content-panel-header">
                    <span className="content-panel-category">Store Sleeve</span>
                    <h2 className="content-panel-title">eBook Store</h2>
                    <p className="content-panel-desc">Operational guides and blueprints to optimize engineering output.</p>
                  </div>
                  <div className="new-release-layout">
                    <img src="/ebook2.jpg" alt="The Vibecoder's Playbook Cover" className="release-book-cover" />
                    <div className="release-info">
                      <span className="sleeve-category-tag" style={{ color: '#ec4899' }}>EBOOK RELEASE</span>
                      <h3 className="release-title">The Vibecoder's Playbook</h3>
                      <p className="release-desc">
                        Build high-performance tech products with AI assistant orchestration without losing your mind. Full framework logs and structures.
                      </p>
                      <a href="/vibecoding-playbook/?v=2.1" target="_blank" rel="noopener noreferrer" className="release-btn">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Buy Playbook →</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 4. Podcast Record details --- */}
              {activeRecord === 'podcast' && (
                <div>
                  <div className="content-panel-header">
                    <span className="content-panel-category">Audio Sleeve</span>
                    <h2 className="content-panel-title">The Product Lab Conversations</h2>
                    <p className="content-panel-desc">Conversations detailing high-scale system design, tech strategy, and global developer careers.</p>
                  </div>
                  <div className="album-grid">
                    
                    {/* Spotify */}
                    <div className="album-card" onClick={() => handlePlayItem('pod-spotify', 'Spotify Podcast Channel', 'Product Lab Conversations', '/Podcast.jpg', 2700)}>
                      <div className="album-cover-wrapper">
                        <img src="/Podcast.jpg" alt="Spotify Podcast" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Spotify</h4>
                        <p className="album-subtext">The Product Lab Conversations</p>
                      </div>
                    </div>

                    {/* YouTube Music */}
                    <div className="album-card" onClick={() => handlePlayItem('pod-ytmusic', 'YouTube Music playlist', 'Product Lab Audio', '/Podcast.jpg', 2900)}>
                      <div className="album-cover-wrapper">
                        <img src="/Podcast.jpg" alt="YouTube Music" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">YouTube Music</h4>
                        <p className="album-subtext">Playlists & episodes</p>
                      </div>
                    </div>

                    {/* Apple Podcasts */}
                    <div className="album-card" onClick={() => handlePlayItem('pod-apple', 'Debug School Apple Podcasts', 'Debug School Sessions', '/Podcast.jpg', 2200)}>
                      <div className="album-cover-wrapper">
                        <img src="/Podcast.jpg" alt="Apple Podcasts" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Apple Podcasts</h4>
                        <p className="album-subtext">Debug School by PASTE</p>
                      </div>
                    </div>

                    {/* Pocket Casts */}
                    <div className="album-card" onClick={() => handlePlayItem('pod-pocketcasts', 'Pocket Casts feed', 'Product Lab Feed', '/Podcast.jpg', 2400)}>
                      <div className="album-cover-wrapper">
                        <img src="/Podcast.jpg" alt="Pocket Casts" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Pocket Casts</h4>
                        <p className="album-subtext">Audio episodes and feeds</p>
                      </div>
                    </div>

                    {/* Player FM */}
                    <div className="album-card" onClick={() => handlePlayItem('pod-playerfm', 'Player FM stream', 'Product Lab Episodes', '/Podcast.jpg', 2600)}>
                      <div className="album-cover-wrapper">
                        <img src="/Podcast.jpg" alt="Player FM" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Player FM</h4>
                        <p className="album-subtext">Technical podcast episodes</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* --- 5. Newsletter Record details --- */}
              {activeRecord === 'newsletter' && (
                <div>
                  <div className="content-panel-header">
                    <span className="content-panel-category">Press Sleeve</span>
                    <h2 className="content-panel-title">The Newsletters</h2>
                    <p className="content-panel-desc">Behind-the-scenes insights on scaling products, prompt design, and dev systems.</p>
                  </div>
                  <div className="album-grid">
                    
                    {/* Substack */}
                    <div className="album-card" onClick={() => handlePlayItem('news-substack', 'Substack Editorial Feed', 'The Weekly Architecture Audit', '/hero.jpg', 600)}>
                      <div className="album-cover-wrapper">
                        <img src="/hero.jpg" alt="Substack" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Substack</h4>
                        <p className="album-subtext">The Weekly Architecture Audit</p>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="album-card" onClick={() => handlePlayItem('news-linkedin', 'LinkedIn Newsletter Postings', 'Career & Engineering Insights', '/hero.jpg', 500)}>
                      <div className="album-cover-wrapper">
                        <img src="/hero.jpg" alt="LinkedIn" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">LinkedIn</h4>
                        <p className="album-subtext">Weekly professional posts</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* --- 6. Magazine Record details --- */}
              {activeRecord === 'magazine' && (
                <div>
                  <div className="content-panel-header">
                    <span className="content-panel-category">Journal Sleeve</span>
                    <h2 className="content-panel-title">The Product Lab Magazine</h2>
                    <p className="content-panel-desc">Deep technical essays structured to optimize engineering velocity.</p>
                  </div>
                  <div className="album-grid">
                    
                    {/* Issue #1 */}
                    <div className="album-card" onClick={() => handlePlayItem('mag-01', 'Architects Journal: Issue 01', 'Zero to 10M Users', '/hero.jpg', 900)}>
                      <div className="album-cover-wrapper">
                        <img src="/hero.jpg" alt="Magazine Issue 1" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Issue #1: Scaling</h4>
                        <p className="album-subtext">Zero to 10 Million Users - Core architectures</p>
                      </div>
                    </div>

                    {/* Issue #2 */}
                    <div className="album-card" onClick={() => handlePlayItem('mag-02', 'Architects Journal: Issue 02', 'Designing AI Agents', '/hero.jpg', 1200)}>
                      <div className="album-cover-wrapper">
                        <img src="/hero.jpg" alt="Magazine Issue 2" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Issue #2: AI Agents</h4>
                        <p className="album-subtext">Designing robust AI agent loops and LLM pipelines</p>
                      </div>
                    </div>

                    {/* Issue #3 */}
                    <div className="album-card" onClick={() => handlePlayItem('mag-03', 'Architects Journal: Issue 03', 'Vibecoding Blueprints', '/hero.jpg', 1100)}>
                      <div className="album-cover-wrapper">
                        <img src="/hero.jpg" alt="Magazine Issue 3" className="album-cover" />
                        <button className="card-play-btn"><i className="fas fa-play"></i></button>
                      </div>
                      <div className="album-info">
                        <h4 className="album-title">Issue #3: Dev Speed</h4>
                        <p className="album-subtext">The Vibecoder's Playbook excerpts & prompt strategies</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* --- 7. Resources Record details --- */}
              {activeRecord === 'resources' && (
                <div>
                  <div className="content-panel-header">
                    <span className="content-panel-category">Download Sleeve</span>
                    <h2 className="content-panel-title">Templates & Blueprints</h2>
                    <p className="content-panel-desc">Quickly scale up operations with deployment-ready checklists.</p>
                  </div>
                  <div className="resources-banner">
                    <div className="resources-banner-info">
                      <h3 className="resources-banner-title">Product Lab Templates</h3>
                      <p className="resources-banner-desc">
                        Access free database schemas, wireframe assets, and technical templates optimized for rapid execution.
                      </p>
                    </div>
                    <Link to="/resources" className="resources-banner-btn">
                      <span>Access Resources →</span>
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* --- Bottom Player Bar (Persistent Audio Controller) --- */}
      <footer className="lab-player-bar">
        {/* Left Track Info */}
        <div className="player-track-info">
          <img src={currentTrack.cover} alt="Now Playing Album Art" className="player-cover" />
          <div className="player-metadata">
            <span className="player-title">{currentTrack.title}</span>
            <span className="player-artist">{currentTrack.artist}</span>
          </div>
          <i 
            className={`fas fa-heart player-track-heart ${likedTracks[currentTrack.id] ? 'liked' : ''}`}
            onClick={(e) => handleToggleLike(currentTrack.id, e)}
          ></i>
        </div>

        {/* Center Controls */}
        <div className="player-controls">
          <div className="control-buttons">
            <button className="control-btn" title="Shuffle"><i className="fas fa-random"></i></button>
            <button className="control-btn" title="Previous"><i className="fas fa-step-backward"></i></button>
            <button 
              className="control-btn btn-play-pause" 
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause" : "Play"}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} style={isPlaying ? {} : { marginLeft: '2px' }}></i>
            </button>
            <button className="control-btn" title="Next"><i className="fas fa-step-forward"></i></button>
            <button className="control-btn" title="Repeat"><i className="fas fa-redo-alt"></i></button>
          </div>

          <div className="progress-container">
            <span>{formatTime(currentTime)}</span>
            <div 
              className="progress-bar-bg"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPosition = (e.clientX - rect.left) / rect.width;
                setCurrentTime(Math.floor(clickPosition * currentTrack.duration));
              }}
            >
              <div 
                className="progress-bar-active" 
                style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
              >
                <div className="progress-handle"></div>
              </div>
            </div>
            <span>{formatTime(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Right Volume / Extras */}
        <div className="player-volume-info">
          <button className="control-btn" title="Lyrics"><i className="fas fa-music"></i></button>
          <button className="control-btn" title="Queue"><i className="fas fa-list-ul"></i></button>
          <button className="control-btn" title="Connect device"><i className="fas fa-laptop-house"></i></button>
          <button 
            className="control-btn" 
            onClick={() => setIsMuted(!isMuted)} 
            title={isMuted ? "Unmute" : "Mute"}
          >
            <i className={`fas ${isMuted || volume === 0 ? 'fa-volume-mute' : volume < 40 ? 'fa-volume-down' : 'fa-volume-up'}`}></i>
          </button>
          <div 
            className="volume-slider-bg"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const newVolume = Math.round(((e.clientX - rect.left) / rect.width) * 100);
              setVolume(Math.max(0, Math.min(100, newVolume)));
              setIsMuted(false);
            }}
          >
            <div 
              className="volume-slider-active" 
              style={{ width: `${isMuted ? 0 : volume}%` }}
            ></div>
          </div>
          <button className="control-btn" title="Full screen"><i className="fas fa-expand-alt"></i></button>
        </div>
      </footer>
    </div>
  );
};

export default Lab;
