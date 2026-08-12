import React from 'react';

const LabPodcast = () => {
  const podcasts = [
    {
      id: 'spotify',
      title: 'Spotify',
      desc: 'The Product Lab Conversations',
      url: 'https://open.spotify.com/show/6fCxwjIOauwOpBrmlgqODB',
      cover: '/Podcast.jpg'
    },
    {
      id: 'ytmusic',
      title: 'YouTube Music',
      desc: 'Playlists & episodes',
      url: 'https://music.youtube.com/playlist?list=PLMk-yXty7nSn13LhpnE04Xk5g7AivLW0O',
      cover: '/Podcast.jpg'
    },
    {
      id: 'apple',
      title: 'Apple Podcasts',
      desc: 'Debug School by PASTE',
      url: 'https://podcasts.apple.com/ng/podcast/debug-school-by-paste/id1845675897',
      cover: '/Podcast.jpg'
    },
    {
      id: 'pocketcasts',
      title: 'Pocket Casts',
      desc: 'Audio episodes and feeds',
      url: 'https://pca.st/odaxzkhn',
      cover: '/Podcast.jpg'
    },
    {
      id: 'playerfm',
      title: 'Player FM',
      desc: 'Technical podcast episodes',
      url: 'https://player.fm/series/the-product-lab-conversations',
      cover: '/Podcast.jpg'
    }
  ];

  return (
    <div className="lab-podcast-container" style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="album-grid">
        {podcasts.map((pod) => (
          <a 
            key={pod.id} 
            href={pod.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="album-card"
            style={{ textDecoration: 'none' }}
          >
            <div className="album-cover-wrapper">
              <img src={pod.cover} alt={pod.title} className="album-cover" />
              <button className="card-play-btn"><i className="fas fa-play"></i></button>
            </div>
            <div className="album-info">
              <h4 className="album-title">{pod.title}</h4>
              <p className="album-subtext">{pod.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LabPodcast;
