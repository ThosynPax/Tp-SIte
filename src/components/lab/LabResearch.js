import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const LabResearch = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="store-page-wrapper">
      {/* ── SECTION 1: HERO ── */}
      <section className="story-intro-section" style={{ paddingTop: '8rem', paddingBottom: '4rem', borderBottom: 'none' }}>
        <div className="story-intro-container">
          <div className="story-intro-left">
            <h1 className="story-intro-title">
              The Lab.<br />Research Division.
            </h1>
          </div>
          <div className="story-intro-right">
            <p className="story-intro-desc">
              We investigate the questions that product teams in emerging markets are too busy shipping to ask. Then we publish what we find.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: MISSION STATEMENT ── */}
      <section className="story-intro-section" style={{ paddingBottom: '4rem', borderBottom: 'none' }}>
        <div className="story-intro-container">
          <div className="story-intro-left">
            <h2 style={{ fontSize: '2.2rem', lineHeight: '1.2', color: '#111', margin: 0, paddingRight: '2rem' }}>
              Most product thinking was built for a context that does not look like ours.
            </h2>
          </div>
          <div className="story-intro-right">
            <div style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                The frameworks, the playbooks, the case studies — most of it comes from markets with reliable infrastructure, deep capital access, and decades of consumer software maturity.
              </p>
              <p>
                We are building in a different context. And we think that context deserves its own body of knowledge.
              </p>
              <p>
                The Product Lab Research Division exists to document, investigate, and publish original thinking on what it actually means to build products, educate technical talent, and ship with AI in emerging markets — starting with Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FOCUS AREAS ── */}
      <section className="story-intro-section" style={{ paddingBottom: '4rem', borderBottom: 'none' }}>
        <div className="story-intro-container" style={{ alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h2 className="story-intro-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)' }}>
              Three questions. One lab.
            </h2>
          </div>
          <div className="story-intro-right">
            {/* Empty right column for top alignment */}
          </div>
        </div>

        {/* Question 1 */}
        <div className="story-intro-container" style={{ marginTop: '2rem', alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h3 style={{ margin: 0, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#111', fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}>Product Architecture in Emerging Markets</h3>
            <span style={{ display: 'inline-block', marginTop: '1rem', padding: '0.25rem 0.75rem', border: '1px solid #111', borderRadius: '50px', fontSize: '0.85rem', fontFamily: "'Space Mono', monospace", width: 'max-content' }}>Ongoing Research</span>
          </div>
          <div className="story-intro-right" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '1.1rem', color: '#333', margin: 0, lineHeight: '1.6' }}>
              How are products scoped, structured, and scaled in contexts like Nigeria and West Africa? What frameworks work here that Silicon Valley never designed for? We are documenting the patterns, the workarounds, and the architectural decisions that experienced builders in emerging markets make — and why they make them.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="story-intro-container" style={{ marginTop: '2rem', alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h3 style={{ margin: 0, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#111', fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}>The AI-Native Builder</h3>
            <span style={{ display: 'inline-block', marginTop: '1rem', padding: '0.25rem 0.75rem', border: '1px solid #111', borderRadius: '50px', fontSize: '0.85rem', fontFamily: "'Space Mono', monospace", width: 'max-content' }}>Ongoing Research</span>
          </div>
          <div className="story-intro-right" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '1.1rem', color: '#333', margin: 0, lineHeight: '1.6' }}>
              What does it mean to build a product when AI is not a feature but the foundation? We are investigating how vibe coding, AI-assisted architecture, and agentic workflows are changing what a solo builder or small team can ship — and what skills, judgment, and architecture thinking still cannot be delegated to a model.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="story-intro-container" style={{ marginTop: '2rem', alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h3 style={{ margin: 0, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#111', fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}>Technical Education Gaps in Africa</h3>
            <span style={{ display: 'inline-block', marginTop: '1rem', padding: '0.25rem 0.75rem', border: '1px solid #111', borderRadius: '50px', fontSize: '0.85rem', fontFamily: "'Space Mono', monospace", width: 'max-content' }}>Ongoing Research</span>
          </div>
          <div className="story-intro-right" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '1.1rem', color: '#333', margin: 0, lineHeight: '1.6' }}>
              Over 5,000 people have gone through PASTE programmes since 2022. That gives us direct data on what technical education in Africa actually looks like from the inside. We are investigating what works, what fails, what credentialing gaps exist, and what the next iteration of mass technical upskilling should look like.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: RESOURCES / PUBLISHED OUTPUTS ── */}
      <section className="story-intro-section" style={{ paddingBottom: '4rem', borderBottom: 'none', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div className="story-intro-container" style={{ alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h1 className="story-intro-title" style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}>
              Published Outputs
            </h1>
          </div>
          <div className="story-intro-right" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <p className="story-intro-desc" style={{ fontSize: '1rem', fontFamily: "'Space Mono', monospace", color: '#111', lineHeight: '1.6' }}>
              Research notes, essays, and working papers from The Product Lab Research Division. Published as we go — not when everything is perfect.
            </p>
          </div>
        </div>
      </section>

      {/* List of Resources (Full Bleed Lines) */}
      <section style={{ width: '100%', overflow: 'hidden', paddingBottom: '6rem' }}>
        
        {/* Top slanted border */}
        <div style={{ width: '110vw', marginLeft: '-5vw', height: '1.5px', backgroundColor: '#111', transform: 'rotate(0.3deg)' }}></div>

        {/* --- DUMMY RESEARCH OUTPUTS HIDDEN FOR NOW --- */}
        {false && (
          <>
            {/* Item 1 */}
            <div className="story-intro-container" style={{ padding: '2.5rem 5%', width: '100%', alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#111', fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}>Zero Data Loss Architectures</h3>
            <span style={{ fontSize: '0.9rem', color: '#222', fontFamily: "'Space Mono', monospace", marginTop: '0.5rem', display: 'block' }}>Technical Essay</span>
          </div>
          <div className="story-intro-right" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem' }}>
            <p style={{ fontSize: '1rem', color: '#111', margin: 0, lineHeight: '1.6', fontFamily: "'Space Mono', monospace", maxWidth: '80%' }}>An investigation into building resilient data systems in low-trust, high-latency environments.</p>
            <a href="#!" download style={{ width: '45px', height: '45px', backgroundColor: '#111', color: '#fff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div style={{ width: '110vw', marginLeft: '-5vw', height: '1.5px', backgroundColor: '#111', transform: 'rotate(-0.2deg)' }}></div>

        {/* Item 2 */}
        <div className="story-intro-container" style={{ padding: '2.5rem 5%', width: '100%', alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#111', fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}>Autonomous Swarms</h3>
            <span style={{ fontSize: '0.9rem', color: '#222', fontFamily: "'Space Mono', monospace", marginTop: '0.5rem', display: 'block' }}>Working Paper</span>
          </div>
          <div className="story-intro-right" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem' }}>
            <p style={{ fontSize: '1rem', color: '#111', margin: 0, lineHeight: '1.6', fontFamily: "'Space Mono', monospace", maxWidth: '80%' }}>How multi-agent systems are redefining the solo builder's capacity to ship complex software.</p>
            <a href="#!" download style={{ width: '45px', height: '45px', backgroundColor: '#111', color: '#fff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '110vw', marginLeft: '-5vw', height: '1.5px', backgroundColor: '#111', transform: 'rotate(0.3deg)' }}></div>

        {/* Item 3 */}
        <div className="story-intro-container" style={{ padding: '2.5rem 5%', width: '100%', alignItems: 'flex-start' }}>
          <div className="story-intro-left">
            <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: '#111', fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}>The Vibecoder's Playbook</h3>
            <span style={{ fontSize: '0.9rem', color: '#222', fontFamily: "'Space Mono', monospace", marginTop: '0.5rem', display: 'block' }}>Field Guide</span>
          </div>
          <div className="story-intro-right" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem' }}>
            <p style={{ fontSize: '1rem', color: '#111', margin: 0, lineHeight: '1.6', fontFamily: "'Space Mono', monospace", maxWidth: '80%' }}>Building products with AI without losing your mind. A practical guide to agentic workflows.</p>
            <a href="#!" download style={{ width: '45px', height: '45px', backgroundColor: '#111', color: '#fff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
          </>
        )}

        {/* Bottom slanted border */}
        <div style={{ width: '110vw', marginLeft: '-5vw', height: '1.5px', backgroundColor: '#111', transform: 'rotate(-0.2deg)', marginBottom: '4rem' }}></div>

        {/* Newsletter underneath */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '1350px', margin: '0 auto', textAlign: 'center', padding: '0 5%' }}>
           <p style={{ fontSize: '1.15rem', color: '#111', marginBottom: '1.5rem', fontWeight: 'bold', fontFamily: "'Space Mono', monospace" }}>
             Next research note dropping soon. Subscribe to be notified.
           </p>
           {subscribed ? (
             <div style={{ color: '#111', fontSize: '1.05rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', fontFamily: "'Space Mono', monospace", justifyContent: 'center' }}>
               <i className="fas fa-check-circle" style={{ marginRight: '8px', color: '#111' }}></i> You're on the list.
             </div>
           ) : (
             <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '500px', width: '100%' }}>
               <input 
                 type="email" 
                 placeholder="your@email.com" 
                 required
                 value={emailInput}
                 onChange={(e) => setEmailInput(e.target.value)}
                 style={{ flex: '1', minWidth: '250px', padding: '1rem', borderRadius: '50px', border: '1px solid #111', fontSize: '1rem', fontFamily: "'Space Mono', monospace", outline: 'none' }} 
               />
               <button type="submit" style={{ padding: '1rem 2.5rem', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', fontFamily: "'Space Mono', monospace" }}>
                 Notify me
               </button>
             </form>
           )}
        </div>
      </section>

      {/* ── SECTION 5: THE LAB IS OPEN ── */}
      <section className="story-intro-section" style={{ paddingBottom: '8rem', borderBottom: 'none' }}>
        <div className="story-intro-container" style={{ alignItems: 'center' }}>
          <div className="story-intro-left">
            <span className="mag-badge-label light" style={{ display: 'block', marginBottom: '1.5rem', color: '#555', fontFamily: "'Space Mono', monospace" }}>
              {'{ Open Call }'}
            </span>
            <h1 className="story-intro-title" style={{ marginBottom: '2rem' }}>
              The lab is open.
            </h1>
            <p className="story-intro-desc" style={{ marginBottom: '2.5rem', fontSize: '1.15rem', maxWidth: '500px' }}>
              We are looking for builders, educators, and researchers who want to contribute original thinking to these three focus areas. If that is you, reach out.
            </p>
            <Link to="/contact" className="store-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', padding: '1rem 2.5rem', backgroundColor: '#111', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '1rem', width: 'max-content' }}>
              <span>Join the Research Division</span>
              <span className="store-btn-arrow" style={{ marginLeft: '10px' }}>&#x2197;</span>
            </Link>
          </div>
          <div className="story-intro-right" style={{ justifyContent: 'center', position: 'relative', height: '450px', display: 'flex', alignItems: 'center' }}>
            
            {/* Card 1 (Back left) */}
            <div style={{ position: 'absolute', width: '320px', height: '400px', backgroundColor: '#f3f2ef', borderRadius: '16px', border: '2px solid #111', transform: 'rotate(-10deg) translateX(-15px)', zIndex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
               <div style={{ position: 'relative', width: '100%', flex: 1, borderRadius: '8px', overflow: 'hidden' }}>
                  <img loading="lazy" src="/studio/studio-1.jpg" alt="Lab 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
            
            {/* Card 2 (Middle right) */}
            <div style={{ position: 'absolute', width: '320px', height: '400px', backgroundColor: '#f3f2ef', borderRadius: '16px', border: '2px solid #111', transform: 'rotate(8deg) translateX(15px)', zIndex: 2, padding: '0.75rem', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
               <div style={{ position: 'relative', width: '100%', flex: 1, borderRadius: '8px', overflow: 'hidden' }}>
                  <img loading="lazy" src="/studio/studio-2.jpg" alt="Lab 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
            
            {/* Card 3 (Front) */}
            <div style={{ position: 'absolute', width: '320px', backgroundColor: '#f3f2ef', borderRadius: '16px', border: '2px solid #111', zIndex: 3, padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
               {/* Image container */}
               <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '8px', overflow: 'hidden' }}>
                  <img loading="lazy" src="/studio/studio-8.jpg" alt="Lab Front" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LabResearch;
