import React, { useEffect } from 'react';

const LabPrivacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hektor-container" style={{ padding: '8rem 3.5rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-mono)' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      
      <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
        Last updated: {new Date().toLocaleDateString()}<br />
        <strong>The Product Lab</strong> is a brand registered under <strong>Afribreath LTD</strong>.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          When you use our contact form, we collect the following information:
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Your Name</li>
            <li>Your Email Address</li>
            <li>The Topic of your inquiry</li>
            <li>Your Message</li>
          </ul>
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          The information you provide is used solely to respond to your inquiries, facilitate communication regarding potential partnerships, and address your requests. We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Data Security</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          We implement reasonable security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Contact Us</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          If you have any questions or concerns about this Privacy Policy, please contact us at <strong>me@thosynpax.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default LabPrivacy;
