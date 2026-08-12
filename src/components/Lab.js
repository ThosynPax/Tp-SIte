import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import useSEO from '../hooks/useSEO';

const Lab = ({ theme }) => {
  useSEO({
    title: 'The Product Lab | Thosyn Pax',
    description: 'Welcome to The Product Lab. I am documenting the journey of building high-scale tech systems and global careers. This is where theory meets the factory floor.',
  });

  const navigate = useNavigate();
  const mainContentRef = useRef(null);

  // Layout navigation state
  const [activeSection, setActiveSection] = useState('story');

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

  // Scroll to section helper
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && mainContentRef.current) {
      const topPos = element.offsetTop - 80; // Offset for sticky top bar
      mainContentRef.current.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  };

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

  // Menu links configuration
  const menuItems = [
    { id: 'story', label: 'Story', icon: 'fa-user-astronaut' },
    { id: 'products', label: 'Products', icon: 'fa-laptop-code' },
    { id: 'store', label: 'Store', icon: 'fa-shopping-bag' },
    { id: 'podcast', label: 'Podcast', icon: 'fa-podcast' },
    { id: 'newsletter', label: 'Newsletter', icon: 'fa-envelope-open-text' },
    { id: 'magazine', label: 'Magazine', icon: 'fa-scroll' },
    { id: 'resources', label: 'Resources', icon: 'fa-folder-open' },
  ];

  return (
    <div className="lab-dashboard-wrapper">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: #000;
          overflow: hidden;
        }

        .lab-dashboard-wrapper {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          background-color: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .lab-main-layout {
          display: flex;
          flex: 1;
          height: calc(100vh - 90px);
          overflow: hidden;
        }

        /* --- Left Sidebar --- */
        .lab-sidebar {
          width: 240px;
          background-color: #000;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          box-sizing: border-box;
          flex-shrink: 0;
          justify-content: space-between;
        }

        .sidebar-top {
          display: flex;
          flex-direction: column;
        }

        .sidebar-brand {
          font-family: 'Space Mono', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2rem;
          padding-left: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          letter-spacing: -0.5px;
          text-decoration: none;
        }

        .brand-icon {
          color: #3b82f6; /* Accent color */
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: #a0a0a0;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .sidebar-link:hover {
          color: #fff;
          background-color: rgba(255, 255, 255, 0.05);
        }

        .sidebar-link.active {
          color: #fff;
          background-color: rgba(59, 130, 246, 0.15);
          border-left: 3px solid #3b82f6;
        }

        .sidebar-link i {
          font-size: 1.1rem;
          width: 20px;
          text-align: center;
        }

        .sidebar-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .return-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          color: #a0a0a0;
          text-decoration: none;
          font-size: 0.85rem;
          border-radius: 8px;
          transition: color 0.2s;
        }

        .return-btn:hover {
          color: #fff;
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* --- Main Content Panel --- */
        .lab-content-panel {
          flex: 1;
          background: linear-gradient(to bottom, #061930 0%, #0d0d0d 350px, #070707 100%);
          overflow-y: auto;
          position: relative;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        /* --- Top Bar Header --- */
        .lab-top-bar {
          position: sticky;
          top: 0;
          height: 64px;
          background-color: rgba(13, 13, 13, 0.75);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 10;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .top-bar-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
          border: none;
        }

        .nav-arrow:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nav-arrow.disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* Removed top-bar-meta styles */

        /* --- Artist Hero Section --- */
        .artist-hero {
          position: relative;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem 2rem;
          box-sizing: border-box;
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 40%, rgba(13, 13, 13, 0.95) 100%), url('/Podcast.jpg');
          background-size: cover;
          background-position: center 30%;
          color: #fff;
        }

        .verified-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #3b82f6;
          margin-bottom: 0.5rem;
        }

        .artist-name {
          font-family: 'Space Mono', monospace;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 800;
          margin: 0 0 0.75rem 0;
          letter-spacing: -2px;
          line-height: 0.9;
        }

        .artist-description {
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.75);
          max-width: 600px;
          margin: 0;
        }

        .artist-stats {
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          gap: 1rem;
        }

        /* --- Content Panels / Blocks --- */
        .lab-sections-container {
          padding: 1.5rem 2rem 5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.5rem;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.5px;
          color: #fff;
        }

        /* --- Grid Split (Products and Store) --- */
        .split-grid {
          display: grid;
          grid-template-columns: 1.8fr 1.2fr;
          gap: 2rem;
        }

        /* --- Popular Products Tracklist --- */
        .track-table {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .track-header-row {
          display: grid;
          grid-template-columns: 40px 2fr 1fr 1fr 40px;
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
          grid-template-columns: 40px 2fr 1fr 1fr 40px;
          padding: 0.75rem 1rem;
          align-items: center;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s;
          font-size: 0.85rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        .track-row:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }

        .track-row.active-playing {
          background-color: rgba(59, 130, 246, 0.1);
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

        .track-title-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
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
        }

        .status-live {
          background-color: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-dev {
          background-color: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .track-domain {
          color: rgba(255, 255, 255, 0.6);
        }

        .track-link-col {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .track-heart {
          color: rgba(255, 255, 255, 0.3);
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

        /* --- Featured Store / eBook Card --- */
        .new-release-card {
          background-color: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: background-color 0.2s;
        }

        .new-release-card:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .release-cover-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .release-cover {
          width: 90px;
          height: 126px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .release-play-btn {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #3b82f6;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          border: none;
          cursor: pointer;
          transform: translateY(4px);
          opacity: 0;
          transition: all 0.2s ease;
        }

        .new-release-card:hover .release-play-btn {
          transform: translateY(0);
          opacity: 1;
        }

        .release-info {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .release-info-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .release-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .release-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
          color: #fff;
        }

        .release-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.4;
          margin: 0 0 0.5rem 0;
        }

        .release-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #061930;
          color: #fff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 40px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(59, 130, 246, 0.4);
          align-self: flex-start;
          transition: all 0.2s;
        }

        .release-btn:hover {
          background-color: #3b82f6;
          transform: scale(1.05);
        }

        /* --- Album / Playlist Grids (Podcast, Newsletter, Magazine) --- */
        .album-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 1.5rem;
        }

        .album-card {
          background-color: #0b0b0b;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .album-card:hover {
          background-color: rgba(255, 255, 255, 0.08);
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
          width: 40px;
          height: 40px;
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

        .card-play-btn:hover {
          transform: scale(1.08) !important;
          background-color: #2563eb;
        }

        .album-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .album-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
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

        /* --- Large Resources Section --- */
        .resources-banner {
          background: linear-gradient(135deg, #071b34 0%, #0d0d0d 100%);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 12px;
          padding: 2.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          transition: background 0.3s;
        }

        .resources-banner:hover {
          border-color: rgba(59, 130, 246, 0.3);
        }

        .resources-banner-info {
          max-width: 550px;
        }

        .resources-banner-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }

        .resources-banner-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }

        .resources-banner-btn {
          flex-shrink: 0;
          background-color: #3b82f6;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.9rem 2rem;
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
          background-color: #0b0b0b;
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
          color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          margin-left: 0.5rem;
          transition: color 0.2s;
        }

        .player-track-heart.liked {
          color: #3b82f6;
        }

        /* Middle Controls */
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

        .control-btn.active {
          color: #3b82f6;
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

        /* Right Volume Controls */
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

        /* --- Responsive Queries --- */
        @media (max-width: 900px) {
          .lab-main-layout {
            flex-direction: column;
            height: auto;
            overflow: visible;
          }

          .lab-sidebar {
            width: 100%;
            height: auto;
            position: sticky;
            top: 0;
            z-index: 100;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            flex-direction: row;
            align-items: center;
            padding: 0.75rem 1rem;
          }

          .sidebar-top {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .sidebar-brand {
            margin-bottom: 0;
            padding-left: 0;
          }

          .sidebar-menu {
            display: none; /* Hide vertical links on mobile */
          }

          .sidebar-footer {
            display: none;
          }

          .lab-content-panel {
            height: auto;
            overflow: visible;
          }

          .lab-top-bar {
            display: none; /* Hide top bar on mobile */
          }

          .artist-hero {
            height: 220px;
            padding: 1.5rem;
            background-position: center;
          }

          .split-grid {
            grid-template-columns: 1fr;
          }

          .lab-sections-container {
            padding: 1.5rem 1rem 7rem 1rem;
            gap: 2.5rem;
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

          .lab-player-bar {
            height: 80px;
            padding: 0 1rem;
          }

          .player-volume-info {
            display: none; /* volume control hidden on mobile */
          }

          .player-track-info {
            width: 50%;
          }

          .player-controls {
            width: 50%;
          }
        }
      `}</style>

      <div className="lab-main-layout">
        {/* --- Left Sidebar --- */}
        <aside className="lab-sidebar">
          <div className="sidebar-top">
            <Link to="/" className="sidebar-brand">
              <i className="fas fa-layer-group brand-icon"></i>
              <span>THE PRODUCT LAB</span>
            </Link>

            <nav className="sidebar-menu">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <i className={`fas ${item.icon}`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          <div className="sidebar-footer">
            <Link to="/" className="return-btn">
              <i className="fas fa-arrow-left"></i>
              <span>Return to Base</span>
            </Link>
          </div>
        </aside>

        {/* --- Main Content Panel --- */}
        <main className="lab-content-panel" ref={mainContentRef}>
          {/* --- Top Sticky Bar --- */}
          <div className="lab-top-bar">
            <div className="top-bar-nav">
              <button onClick={() => navigate('/')} className="nav-arrow" title="Back to Base">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="nav-arrow disabled" disabled>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>


          </div>

          {/* --- Story Hero Header --- */}
          <section id="story" className="artist-hero">
            <div className="verified-badge">
              <i className="fas fa-check-circle"></i>
              <span>Verified Product Architect</span>
            </div>
            <h1 className="artist-name">Thosyn Pax</h1>
            <p className="artist-description">
              Welcome to The Product Lab. I am documenting the journey of building high-scale tech systems and global careers. I lead with a "Product Architect" mindset—bridging the gap between deep technical infrastructure and market-ready products.
            </p>
            <div className="artist-stats">
              <span><strong>12,450</strong> monthly readers</span>
              <span>•</span>
              <span><strong>5+</strong> live products</span>
            </div>
          </section>

          {/* --- Scrollable Content Container --- */}
          <div className="lab-sections-container">
            
            {/* Grid Layout containing Products (tracklist) and eBook (new release) */}
            <div className="split-grid">
              
              {/* Products Section */}
              <section id="products">
                <div className="section-header">
                  <h2 className="section-title">Popular Projects</h2>
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
                    <div className="track-title-container">
                      <span className="track-title">PaxVTO</span>
                    </div>
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
                    <div className="track-title-container">
                      <span className="track-title">Karpture</span>
                    </div>
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
                    <div className="track-title-container">
                      <span className="track-title">PASTE</span>
                    </div>
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
                    <div className="track-title-container">
                      <span className="track-title">QELL</span>
                    </div>
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
                    <div className="track-title-container">
                      <span className="track-title">ReMake</span>
                    </div>
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
              </section>

              {/* eBook Section (Store / New Release) */}
              <section id="store">
                <div className="section-header">
                  <h2 className="section-title">New Release</h2>
                </div>
                <div className="new-release-card">
                  <div className="release-cover-wrapper">
                    <img src="/ebook2.jpg" alt="The Vibecoder's Playbook Cover" className="release-cover" />
                    <button 
                      className="release-play-btn"
                      onClick={() => handlePlayItem('playbook', "The Vibecoder's Playbook Audiobook", 'eBook Audiobook Preview', '/ebook2.jpg', 320)}
                    >
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <div className="release-info">
                    <div className="release-info-top">
                      <span className="release-tag">EBOOK</span>
                    </div>
                    <h3 className="release-title">The Vibecoder's Playbook</h3>
                    <p className="release-desc">
                      Build products with AI without losing your mind. High-impact operational blueprints.
                    </p>
                    <a href="/vibecoding-playbook/?v=2.1" target="_blank" rel="noopener noreferrer" className="release-btn">
                      <i className="fas fa-shopping-cart"></i>
                      <span>Buy Now</span>
                    </a>
                  </div>
                </div>
              </section>

            </div>

            {/* Podcasts Section */}
            <section id="podcast">
              <div className="section-header">
                <h2 className="section-title">The Podcast</h2>
              </div>
              <div className="album-grid">
                
                {/* Spotify */}
                <div className="album-card" onClick={() => handlePlayItem('pod-spotify', 'Spotify Podcast Channel', 'Product Lab Conversations', '/Podcast.jpg', 2700)}>
                  <div className="album-cover-wrapper">
                    <img src="/Podcast.jpg" alt="Spotify Podcast" className="album-cover" />
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
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
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
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
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
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
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
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
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <div className="album-info">
                    <h4 className="album-title">Player FM</h4>
                    <p className="album-subtext">Technical podcast episodes</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Newsletter Section */}
            <section id="newsletter">
              <div className="section-header">
                <h2 className="section-title">The Newsletter</h2>
              </div>
              <div className="album-grid">
                
                {/* Substack */}
                <div className="album-card" onClick={() => handlePlayItem('news-substack', 'Substack Editorial Feed', 'The Weekly Architecture Audit', '/hero.jpg', 600)}>
                  <div className="album-cover-wrapper">
                    <img src="/hero.jpg" alt="Substack" className="album-cover" />
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
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
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <div className="album-info">
                    <h4 className="album-title">LinkedIn</h4>
                    <p className="album-subtext">Weekly professional posts</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Magazine Section */}
            <section id="magazine">
              <div className="section-header">
                <h2 className="section-title">The Product Lab Magazine</h2>
              </div>
              <div className="album-grid">
                
                {/* Issue #1 */}
                <div className="album-card" onClick={() => handlePlayItem('mag-01', 'Architects Journal: Issue 01', 'Zero to 10M Users', '/hero.jpg', 900)}>
                  <div className="album-cover-wrapper">
                    <img src="/hero.jpg" alt="Magazine Issue 1" className="album-cover" />
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
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
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
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
                    <button className="card-play-btn">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <div className="album-info">
                    <h4 className="album-title">Issue #3: Dev Speed</h4>
                    <p className="album-subtext">The Vibecoder's Playbook excerpts & prompt strategies</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Resources Section */}
            <section id="resources">
              <div className="section-header">
                <h2 className="section-title">Technical Resources</h2>
              </div>
              <div className="resources-banner">
                <div className="resources-banner-info">
                  <h3 className="resources-banner-title">Product Lab Technical Templates</h3>
                  <p className="resources-banner-desc">
                    Access free technical blueprints, database model templates, and developer utility tools specifically structured to jumpstart your build.
                  </p>
                </div>
                <Link to="/resources" className="resources-banner-btn">
                  <span>Access Resources</span>
                  <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </Link>
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* --- Bottom Mock Audio Player Bar --- */}
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

        {/* Center Control Knobs */}
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

        {/* Right Volume Controls */}
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
