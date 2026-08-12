import React, { useState } from 'react';

const LabProducts = () => {
  // Track user likes
  const [likedTracks, setLikedTracks] = useState({
    'paxvto': false,
    'karpture': true,
    'paste': false,
    'qell': true,
    'remake': false,
  });

  const handleToggleLike = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedTracks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="lab-products-container" style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="track-table">
        <div className="track-header-row">
          <span>#</span>
          <span>Title</span>
          <span>Domain</span>
          <span>Status</span>
          <span></span>
        </div>

        {/* PaxVTO */}
        <div className="track-row">
          <div className="track-number-box">
            <span className="track-num">1</span>
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
        <div className="track-row">
          <div className="track-number-box">
            <span className="track-num">2</span>
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
            <a href="https://trykarpture.com/?ref=thosynpax.com" target="_blank" rel="noopener noreferrer" className="track-link-btn">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        {/* PASTE */}
        <div className="track-row">
          <div className="track-number-box">
            <span className="track-num">3</span>
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
            <a href="https://withpaste.com/?ref=thosynpax.com" target="_blank" rel="noopener noreferrer" className="track-link-btn">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        {/* QELL */}
        <div className="track-row">
          <div className="track-number-box">
            <span className="track-num">4</span>
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
            <a href="https://cre8fast.thosynpax.com/qell" target="_blank" rel="noopener noreferrer" className="track-link-btn">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        {/* ReMake */}
        <div className="track-row">
          <div className="track-number-box">
            <span className="track-num">5</span>
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
            <a href="https://cut.thosynpax.com/" target="_blank" rel="noopener noreferrer" className="track-link-btn">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabProducts;
