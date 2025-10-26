import React, { useState, useEffect } from 'react';

const DebugSchool = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const proxies = [
        'https://api.allorigins.win/raw?url=',
        'https://cors-anywhere.herokuapp.com/',
        'https://corsproxy.io/?'
      ];
      
      const rssUrl = 'https://anchor.fm/s/ef8b43dc/podcast/rss';
      
      let response;
      let lastError;
      
      for (const proxy of proxies) {
        try {
          response = await fetch(`${proxy}${encodeURIComponent(rssUrl)}`, {
            headers: {
              'Accept': 'application/rss+xml, application/xml, text/xml'
            }
          });
          
          if (response.ok) {
            break;
          }
        } catch (err) {
          lastError = err;
          continue;
        }
      }
      
      if (!response || !response.ok) {
        throw new Error(`Failed to fetch RSS feed: ${lastError?.message || 'Unknown error'}`);
      }
      
      const xmlText = await response.text();
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      const parseError = xmlDoc.getElementsByTagName('parsererror')[0];
      if (parseError) {
        throw new Error('Failed to parse RSS feed');
      }
      
      const items = xmlDoc.getElementsByTagName('item');
      
      const parsedPodcasts = [];
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        const title = item.getElementsByTagName('title')[0]?.textContent || 
                     item.querySelector('title')?.textContent || 
                     `Episode ${i + 1}`;
        
        const enclosure = item.getElementsByTagName('enclosure')[0] || 
                         item.querySelector('enclosure');
        const url = enclosure?.getAttribute('url') || '';
        
        const duration = item.getElementsByTagName('itunes:duration')[0]?.textContent ||
                        item.querySelector('itunes\\:duration, duration')?.textContent ||
                        'Unknown';
        
        const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || 
                       item.querySelector('pubDate')?.textContent ||
                       '';
        
        const description = item.getElementsByTagName('description')[0]?.textContent || 
                           item.querySelector('description')?.textContent ||
                           '';
        
        if (url) {
          parsedPodcasts.push({
            id: `podcast-${i}-${Date.now()}`,
            title: title.trim(),
            url: url.trim(),
            duration: formatDuration(duration),
            pubDate: formatDate(pubDate),
            description: cleanDescription(description)
          });
        }
      }
      
      setPodcasts(parsedPodcasts);
      
      if (parsedPodcasts.length === 0) {
        setError('No podcasts found in the RSS feed');
      }
      
    } catch (err) {
      setError(`Failed to load podcasts: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDuration = (duration) => {
    if (!duration || duration === 'Unknown') return 'Unknown';
    
    if (duration.includes(':')) {
      return duration;
    }
    
    const seconds = parseInt(duration);
    if (!isNaN(seconds)) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    return duration;
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Unknown date';
    }
  };

  const cleanDescription = (description) => {
    if (!description) return '';
    const clean = description.replace(/<[^>]*>/g, '').trim();
    return clean.length > 150 ? clean.substring(0, 150) + '...' : clean;
  };

  const ClockIcon = () => <span style={{ fontSize: '14px' }}>⏱</span>;
  const CalendarIcon = () => <span style={{ fontSize: '14px' }}>📅</span>;
  const LoadingSpinner = () => <span style={{ fontSize: '48px', animation: 'spin 1s linear infinite' }}>⏳</span>;

  return (
    <main className="debug-school">
      <style>
        {`
          .debug-school {
            background: #000000;
            min-height: 100vh;
            color: #fff;
            font-family: "Montserrat", sans-serif;
          }

          .hero-section {
            background: #000000;
            padding: 4rem 0 2rem 0;
            text-align: center;
          }

          .title {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #F4D4B7;
            font-family: "Noto Serif Display", serif;
          }

          .tagline {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 2rem;
            font-weight: 300;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .listen-label {
            font-size: 1.2rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: 500;
            display: block;
          }

          .platform-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .platform-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: transparent;
            color: #F4D4B7;
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid #F4D4B7;
            font-family: "Montserrat", sans-serif;
            font-size: 0.9rem;
            white-space: nowrap;
          }

          .platform-button:hover {
            background: #F4D4B7;
            color: #000000;
            transform: translateY(-2px);
          }

          .platform-icon {
            font-size: 1.4rem;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .content-section {
            margin-bottom: 4rem;
            padding: 3rem 2rem;
            text-align: center;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: #F4D4B7;
            font-family: "Noto Serif Display", serif;
          }

          .description {
            font-size: 1.2rem;
            color: #fff;
            line-height: 1.8;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            font-family: "Montserrat", sans-serif;
          }

          .description-list {
            font-size: 1.2rem;
            color: #fff;
            line-height: 1.8;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            font-family: "Montserrat", sans-serif;
          }

          .description-list li {
            margin-bottom: 1rem;
            position: relative;
            padding-left: 1.5rem;
          }

          .description-list li::before {
            content: "•";
            color: #F4D4B7;
            font-size: 1.5rem;
            position: absolute;
            left: 0;
            top: -0.2rem;
          }

          .wrapper {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
          }

          .podcasts-section {
            padding: 2rem 0;
          }

          .podcasts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .podcast-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(244, 212, 183, 0.2);
            border-radius: 12px;
            padding: 1.5rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .podcast-card:hover {
            transform: translateY(-4px);
            border-color: #F4D4B7;
            box-shadow: 0 8px 32px rgba(244, 212, 183, 0.1);
          }

          .podcast-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #F4D4B7;
            margin: 0;
            line-height: 1.4;
            margin-bottom: 1rem;
          }

          .podcast-description {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }

          .podcast-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.85rem;
          }

          .meta-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .loading-state, .error-state {
            text-align: center;
            padding: 4rem 2rem;
            color: #F4D4B7;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @media (min-width: 769px) {
            .apple-podcast-mobile {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2.5rem;
            }

            .tagline {
              font-size: 1.2rem;
            }

            .content-section {
              padding: 2rem 1rem;
            }

            .section-title {
              font-size: 2rem;
            }

            .description,
            .description-list {
              font-size: 1.1rem;
            }

            .platform-buttons {
              gap: 0.8rem;
            }
            
            .platform-button {
              padding: 0.7rem 1rem;
              font-size: 0.8rem;
            }
            
            .platform-icon {
              font-size: 1.2rem;
            }

            .podcasts-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .podcast-card {
              padding: 1.25rem;
            }

            .podcast-title {
              font-size: 1.1rem;
            }

            .platform-buttons .platform-button:nth-child(3) {
              display: none;
            }

            .apple-podcast-mobile {
              display: flex;
              justify-content: center;
              margin-top: 1rem;
            }

            .apple-podcast-mobile .platform-button {
              display: flex;
            }
          }

          @media (max-width: 480px) {
            .platform-buttons {
              gap: 0.5rem;
            }
            
            .platform-button {
              padding: 0.6rem 0.8rem;
              font-size: 0.75rem;
            }
            
            .platform-icon {
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      <section className="hero-section">
        <div className="wrapper">
          <h1 className="title">Debug School</h1>
          <p className="tagline">Where tech learning meets human understanding</p>
          <span className="listen-label">Listen on</span>
          <div className="platform-buttons">
            <a target='_blank' href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB?si=7Kw-5jaKTUSj6ldhFSsGcg" className="platform-button">
              <i className="fab fa-spotify platform-icon"></i>
              SPOTIFY
            </a>
            <a target='_blank' href="https://music.youtube.com/playlist?list=PLMop3IuYMLYdnZW9LWefbMj8uKUEBgrlp&si=s_nUcoOXcjmPtI3s" className="platform-button">
              <i className="fab fa-youtube platform-icon"></i>
              YOUTUBE MUSIC
            </a>
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
          <div className="apple-podcast-mobile">
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
        </div>
      </section>

      <div className="wrapper">
        <section className="content-section podcasts-section">
          <h2 className="section-title">Available Episodes</h2>
          <p className="description">
            Browse through all available podcast episodes from Debug School.
          </p>

          {isLoading && (
            <div className="loading-state">
              <LoadingSpinner />
              <p>Loading episodes...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>{error}</p>
              <button 
                onClick={fetchPodcasts}
                className="platform-button"
                style={{ marginTop: '1rem' }}
              >
                Try Again
              </button>
            </div>
          )}

          {!isLoading && !error && podcasts.length > 0 && (
            <div className="podcasts-grid">
              {podcasts.map((podcast) => (
                <div key={podcast.id} className="podcast-card">
                  <h3 className="podcast-title">{podcast.title}</h3>
                  
                  {podcast.description && (
                    <p className="podcast-description">{podcast.description}</p>
                  )}
                  
                  <div className="podcast-meta">
                    <div className="meta-item">
                      <ClockIcon />
                      <span>{podcast.duration}</span>
                    </div>
                    <div className="meta-item">
                      <CalendarIcon />
                      <span>{podcast.pubDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && !error && podcasts.length === 0 && (
            <div className="error-state">
              <p>No episodes available at the moment.</p>
            </div>
          )}
        </section>

        <section className="content-section">
          <h2 className="section-title">About Debug School</h2>
          <p className="description">
            Debug School is a creative learning space focused on helping learners, 
            creators, and young professionals understand tech beyond coding. 
            It's where ideas meet clarity, and confusion becomes a lesson.
          </p>
          
          <p className="description">
            Through podcasts, live sessions, and practical mentorship, we explore how real people learn, 
            build, and pivot in their tech journeys. The goal is to make learning feel less like 
            a struggle and more like a discovery.
          </p>

          <ul className="description-list">
            <li>Understanding the real foundations of tech, not just syntax or tools</li>
            <li>Helping learners connect personal skills with relevant tech roles</li>
            <li>Encouraging curiosity, creativity, and clear thinking in problem-solving</li>
            <li>Creating content that teaches practical, honest lessons about tech life</li>
          </ul>

          <p className="description">
            Many learners start tech journeys with excitement, but end up lost in tutorials, trends, and self-doubt. 
            Debug School helps people slow down, find their "why," and build a path that truly fits them.
          </p>
          <span className="listen-label">Listen on</span>
          <div className="platform-buttons">
            <a target='_blank' href="https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB?si=7Kw-5jaKTUSj6ldhFSsGcg" className="platform-button">
              <i className="fab fa-spotify platform-icon"></i>
              SPOTIFY
            </a>
            <a target='_blank' href="https://music.youtube.com/playlist?list=PLMop3IuYMLYdnZW9LWefbMj8uKUEBgrlp&si=s_nUcoOXcjmPtI3s" className="platform-button">
              <i className="fab fa-youtube platform-icon"></i>
              YOUTUBE MUSIC
            </a>
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
          <div className="apple-podcast-mobile">
            <a target='_blank' href="https://podcasts.apple.com/ng/podcast/debug-school-by-past/id1845675897" className="platform-button">
              <i className="fas fa-podcast platform-icon"></i>
              APPLE PODCASTS
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DebugSchool;