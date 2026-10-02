import React, { useState, useEffect } from 'react';
import '../../App.css';

const PRODUCTS = [
  // ── Track 1: Digital E-books ──
  {
    id: 'prod-eb-01',
    type: 'ebook',
    title: "The Vibecoder's Playbook",
    subtitle: "Build products with AI without losing your mind.",
    price: '$4.99',
    ngPrice: '₦8,000', // Update with actual Selar NGN price
    image: '/ebook2.jpg',
    buyUrl: 'https://thosynpax.gumroad.com/l/the-vibecoder-playbook',
    ngBuyUrl: 'https://afriheals.selar.com/3397973089'
  },

  // ── Track 2: Physical Merch (Fulfilled by Fourthwall) ──
  /*
  {
    id: 'prod-fw-01',
    type: 'merch',
    title: 'The Product Lab Heavyweight Hoodie',
    subtitle: "For the builder who shows up.",
    price: '$78 USD',
    ngPrice: '₦78,000', // Update with actual NGN price
    image: '/studio/studio-6.jpg',
    buyUrl: 'https://shop.thosynpax.com',
    ngBuyUrl: 'https://wa.me/2347016619097'
  },
  {
    id: 'prod-fw-02',
    type: 'merch',
    title: 'The Product Lab Tee',
    subtitle: "Built in public. Worn in real life.",
    price: '$38 USD',
    ngPrice: '₦38,000', // Update with actual NGN price
    image: '/studio/studio-3.jpg',
    buyUrl: 'https://shop.thosynpax.com',
    ngBuyUrl: 'https://wa.me/2347016619097'
  },
  {
    id: 'prod-fw-03',
    type: 'merch',
    title: 'TPL Ceramic Desk Mug',
    subtitle: "Every good build starts with a good cup.",
    price: '$24 USD',
    ngPrice: '₦24,000', // Update with actual NGN price
    image: '/studio/studio-4.jpg',
    buyUrl: 'https://shop.thosynpax.com',
    ngBuyUrl: 'https://wa.me/2347016619097'
  }
  */
];

const FAQS = [
  {
    q: 'How do I get my ebook after purchase?',
    a: 'You will receive a download link via email immediately after checkout. The Vibecoder\'s Playbook is delivered as a PDF. If you do not receive it within a few minutes, check your spam folder or contact us at lab@thosynpax.com or thosynpax@gmail.com.'
  },
  {
    q: 'How is physical merch fulfilled?',
    a: 'All physical products — hoodies, tees, mugs — are fulfilled through Fourthwall. Orders are printed and shipped on demand. Delivery times vary by location. You will receive tracking information directly from Fourthwall after your order ships.'
  },
  {
    q: 'Will the ebook be updated as things change?',
    a: 'Yes. Anyone who purchases The Vibecoder\'s Playbook gets access to future updates at no extra cost. When a new version is released you will be notified by email with a fresh download link.'
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital products are non-refundable once downloaded. For physical merch, if your order arrives damaged or incorrect, contact us within 7 days and we will make it right. Reach us at lab@thosynpax.com or thosynpax@gmail.com.'
  }
];

const LabStore = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isNigeria, setIsNigeria] = useState(false);

  useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/country.json')
      .then(res => res.json())
      .then(data => {
        if (data.country === 'NG') {
          setIsNigeria(true);
        }
      })
      .catch(err => console.error('Geo detection failed:', err));
  }, []);

  return (
    <div className="store-page-wrapper">
      {/* ── 1. STORY-STYLE INTRO HEADER (Clean 2-Column, No Tags) ── */}
      <section className="story-intro-section store-intro-section">
        <div className="story-intro-container">
          <div className="story-intro-left">
            <h1 className="story-intro-title">
              The Store.<br />Books &amp; Merch.
            </h1>
          </div>
          <div className="story-intro-right">
            <p className="story-intro-desc">
              Everything built and shipped by The Product Lab — in your hands. Ebooks written from the inside of real builds, and merch for the builder who shows up every day. Physical orders fulfilled through Fourthwall.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. CATALOG & PRODUCT GRID (Direct Links, No Popups) ── */}
      <section className="store-catalog-section">
        <div className="store-catalog-container">

          {/* Product Grid */}
          <div className="store-product-grid">
            {PRODUCTS.map((product) => {
              
              const currentBuyUrl = isNigeria && product.ngBuyUrl ? product.ngBuyUrl : product.buyUrl;
              const currentPrice = isNigeria && product.ngPrice ? product.ngPrice : product.price;
              let platformText = 'Order Now';
              
              if (product.type === 'ebook') {
                platformText = 'Get the Ebook';
              }

              return (
              <div key={product.id} className="store-card">
                
                {/* Hektor-style Boxed Media Container (Direct Destination Link) */}
                <a
                  href={currentBuyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-media-box"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="store-media-img"
                  />
                  <div className="store-media-overlay">
                    <span className="store-media-view-btn">
                      {platformText} ↗
                    </span>
                  </div>
                </a>

                {/* Clean Caption & Body */}
                <div className="store-card-body">
                  <div className="store-card-meta">
                    <h3 className="store-card-title">
                      <a
                        href={currentBuyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store-card-title-link"
                      >
                        {product.title}
                      </a>
                    </h3>
                    {product.subtitle && (
                      <p className="store-card-subtitle" style={{ fontSize: '0.95rem', color: '#666', marginTop: '0.4rem', marginBottom: '1rem', fontFamily: "'Space Mono', monospace" }}>
                        {product.subtitle}
                      </p>
                    )}
                    <div className="store-card-price">{currentPrice}</div>
                  </div>

                  {/* Single Direct Action Button */}
                  <div className="store-card-actions">
                    <a
                      href={currentBuyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-btn-primary store-btn-single"
                    >
                      <span>{platformText}</span>
                      <span className="store-btn-arrow">&#x2197;</span>
                    </a>
                  </div>
                </div>

              </div>
            )})}
          </div>

        </div>
      </section>

      {/* ── 3. HEKTOR SINGLE-PROJECT-5 LOOKBOOK — Boxed + Tilted Portrait Cards ── */}
      <section className="store-lookbook-section">

        {/* Section Label */}
        <div className="store-lookbook-label">
          <span className="store-lookbook-label-text">Lookbook</span>
        </div>

        <div className="store-lb-masonry">
          {[
            { image: '/lookbook/1.jpeg', title: 'Lookbook 1' },
            { image: '/lookbook/2.jpeg', title: 'Lookbook 2' },
            { image: '/lookbook/3.jpeg', title: 'Lookbook 3' },
            { image: '/lookbook/4.jpeg', title: 'Lookbook 4' },
            { image: '/lookbook/5.jpeg', title: 'Lookbook 5' },
            { image: '/lookbook/6.jpeg', title: 'Lookbook 6' },
            { image: '/lookbook/7.jpeg', title: 'Lookbook 7' },
            { image: '/lookbook/8.jpeg', title: 'Lookbook 8' },
            { image: '/lookbook/9.jpeg', title: 'Lookbook 9' },
            { image: '/lookbook/10.jpeg', title: 'Lookbook 10' },
            { image: '/lookbook/11.jpeg', title: 'Lookbook 11' },
            { image: '/lookbook/12.jpeg', title: 'Lookbook 12' },
          ].map((item, i) => (
            <figure
              key={`lb-${i}`}
              className="store-lb-card masonry-card"
              onClick={() => setLightboxImage({ image: item.image, title: item.title, caption: '' })}
            >
              <div className="store-lb-card-inner">
                <img src={item.image} alt={item.title} loading="lazy" className="store-lb-card-img" />
                <div className="store-lb-card-hover"><span>View</span></div>
              </div>
            </figure>
          ))}
        </div>

      </section>

      {/* ── 4. STORE FAQ ACCORDION (No Tags) ── */}
      <section className="store-faq-section">
        <div className="store-faq-container">
          <div className="store-faq-header">
            <h2 className="store-faq-title">Frequently Asked Questions</h2>
          </div>

          <div className="store-faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`store-faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="store-faq-question">
                    <h4>{faq.q}</h4>
                    <span className="store-faq-toggle-icon">
                      <i className={`fas fa-${isOpen ? 'minus' : 'plus'}`}></i>
                    </span>
                  </div>
                  {isOpen && (
                    <div className="store-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. LIGHTBOX MODAL FOR FIELD LOOKBOOK ONLY ── */}
      {lightboxImage && (
        <div className="mag-modal-overlay" onClick={() => setLightboxImage(null)}>
          <div className="store-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="mag-modal-close store-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="store-lightbox-media-wrap">
              <img loading="lazy" src={lightboxImage.image} alt={lightboxImage.title} className="store-lightbox-img" />
            </div>
            <div className="store-lightbox-caption">
              <h4>{lightboxImage.title}</h4>
              <p>{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LabStore;
