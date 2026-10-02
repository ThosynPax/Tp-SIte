import React from 'react';

const LabStory = () => {
  return (
    <div className="story-page-wrapper">
      {/* ── Section 1: Hektor-Style Intro ── */}
      <section className="story-intro-section">
        <div className="story-intro-container">
          <div className="story-intro-left">
            <h1 className="story-intro-title">
              Built in public.<br />Since 2015.
            </h1>
          </div>
          <div className="story-intro-right">
            <p className="story-intro-desc">
              The Product Lab is the media and innovation home of Thosyn Pax — Product Architect, Tech Educator, and builder of things that actually work. What started as one person documenting the journey of building tech products has grown into a community for founders, builders, and product thinkers across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Hektor-Style Moving Tilted Photo Gallery ── */}
      {false && (
        <section className="story-gallery-section" aria-label="Studio Photo Gallery">
          {/* Row 1 - Moves Left */}
          <div className="story-gallery-row story-gallery-row-1">
            <div className="story-gallery-track">
              {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((num, idx) => (
                <div key={`row1-${idx}`} className="story-gallery-item">
                  <div className="story-gallery-card">
                    <img 
                      src={`/studio/studio-${num}.jpg`} 
                      alt={`Studio visual ${num}`} 
                      loading="lazy" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moves Right */}
          <div className="story-gallery-row story-gallery-row-2">
            <div className="story-gallery-track">
              {[5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8].map((num, idx) => (
                <div key={`row2-${idx}`} className="story-gallery-item">
                  <div className="story-gallery-card">
                    <img 
                      src={`/studio/studio-${num}.jpg`} 
                      alt={`Studio visual ${num}`} 
                      loading="lazy" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ── Section 3: Main Story (Split Layout) ── */}
      <section className="story-split-section">
        <div className="story-split-container">
          <div className="story-split-left">
            <span className="story-why-label" style={{ textAlign: 'left' }}>&#123; The story &#125;</span>
            <h2 className="story-split-headline">
              The lab where builders think.
            </h2>
            <p className="story-split-description">
              In 2015, Thosyn Pax started building and documenting everything along the way. Not the highlight reel. Not the polished version. The actual process — the decisions, the frameworks, the experiments, the things that worked and the ones that did not.
            </p>
            <p className="story-split-description">
              The Product Lab grew out of that habit.
            </p>
            <p className="story-split-description">
              Today it is a podcast, a newsletter, a YouTube channel, a store, and a growing community of people who are serious about what they are building. Every episode, every issue, every resource comes from someone still in the middle of doing the work — not someone who has stepped away from it.
            </p>
            <p className="story-split-description">
              Guests from across the tech ecosystem. A weekly newsletter dissecting product architecture and systems thinking. Free resources built from real experience. Ebooks written from the inside of actual builds.
            </p>
            <p className="story-split-description">
              The lab is still open. The build is still in progress. You are welcome here.
            </p>
          </div>
          <div className="story-split-right">
            <div className="story-split-image-card">
              <img loading="lazy" src="/Podcast.jpg" alt="Thosyn Pax" className="story-split-image" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why TPL ── */}
      <section className="story-why-manifesto-section" style={{ paddingTop: 0 }}>
        <div className="story-why-manifesto-container">
          <span className="story-why-label">&#123; Why TPL? &#125;</span>
          <h2 className="story-why-headline">
            We are not just another media page. We are a working lab.
          </h2>
          <p className="story-why-description">
            Everything that comes out of The Product Lab comes from someone still in the middle of doing the work. The podcast, the newsletter, the resources — none of it is theory. It is documentation. That is the difference between The Product Lab and everything else.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LabStory;
