import React, { useState } from 'react';

const LabContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.topic || !formData.message || !formData.privacyAccepted) {
      alert('Please fill out all required fields and accept the privacy policy.');
      return;
    }

    setIsSubmitting(true);
    
    fetch("https://formsubmit.co/ajax/me@thosynpax.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        topic: formData.topic,
        message: formData.message
      })
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitting(false);
      setSubmitted(true);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error sending your message. Please try again later or email us directly.');
    });
  };

  return (
    <section className="hektor-contact-section" id="contact">
      <div className="hektor-contact-container">
        <div className="hektor-contact-grid">
          
          {/* ── Left: Creative Tilted Form ── */}
          <div className="hektor-contact-form-col">
            {submitted ? (
              <div className="hektor-form-success-box">
                <span className="hektor-success-badge">01 // RECEIVED</span>
                <h3 className="hektor-success-title">Message Sent!</h3>
                <p className="hektor-success-desc">
                  Thanks for reaching out, <strong>{formData.name}</strong>. We’ve received your message regarding <em>{formData.topic}</em> and will get back to you within 24–48 hours.
                </p>
                <button
                  type="button"
                  className="hektor-btn-submit"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: '', message: '', privacyAccepted: false });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="hektor-creative-form" onSubmit={handleSubmit} noValidate>
                
                {/* 01: Name */}
                <div className="hektor-form-group tilt-odd">
                  <span className="hektor-field-num">01</span>
                  <label htmlFor="hektor-name" className="hektor-label">
                    What's your name? <span className="hektor-req">*</span>
                  </label>
                  <input
                    id="hektor-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Thosyn Pax"
                    className="hektor-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* 02: Email */}
                <div className="hektor-form-group tilt-even">
                  <span className="hektor-field-num">02</span>
                  <label htmlFor="hektor-email" className="hektor-label">
                    What's your email? <span className="hektor-req">*</span>
                  </label>
                  <input
                    id="hektor-email"
                    name="email"
                    type="email"
                    required
                    placeholder="me@thosynpax.com"
                    className="hektor-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* 03: Topic Dropdown */}
                <div className="hektor-form-group tilt-odd">
                  <span className="hektor-field-num">03</span>
                  <label htmlFor="hektor-topic" className="hektor-label">
                    What would you like to talk about? <span className="hektor-req">*</span>
                  </label>
                  <div className="hektor-select-wrapper">
                    <select
                      id="hektor-topic"
                      name="topic"
                      required
                      className="hektor-select"
                      value={formData.topic}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Please choose an option</option>
                      <option value="Podcast Guest Appearance">Podcast Guest Appearance</option>
                      <option value="Sponsorship and Advertising">Sponsorship and Advertising</option>
                      <option value="Strategic Partnership">Strategic Partnership</option>
                      <option value="Cre8fast Project Enquiry">Cre8fast Project Enquiry</option>
                      <option value="PASTE Corporate Training">PASTE Corporate Training</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                    <span className="hektor-select-arrow" aria-hidden="true">&#x2304;</span>
                  </div>
                </div>

                {/* 04: Message Textarea */}
                <div className="hektor-form-group tilt-even">
                  <span className="hektor-field-num">04</span>
                  <label htmlFor="hektor-message" className="hektor-label">
                    Your message <span className="hektor-req">*</span>
                  </label>
                  <textarea
                    id="hektor-message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us what you have in mind..."
                    className="hektor-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Privacy checkbox */}
                <div className="hektor-privacy-row">
                  <label className="hektor-checkbox-label">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      className="hektor-checkbox-input"
                      required
                    />
                    <span className="hektor-checkbox-custom"></span>
                    <span className="hektor-checkbox-text">
                      I have read and accept the <a href="/lab/privacy" target="_blank" rel="noopener noreferrer" className="hektor-policy-link">privacy policy</a>.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="hektor-btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </div>

          {/* ── Right: Contact Info & Illustration ── */}
          <div className="hektor-contact-info-col">
            
            {/* Hektor Double Speech Bubble SVG */}
            <div className="hektor-chat-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 64 64" className="hektor-chat-svg" xmlns="http://www.w3.org/2000/svg">
                <g id="_x30_1_chatting" fill="currentColor">
                  <g>
                    <g>
                      <path d="M38.0728,40.9023c-0.5522,0-1.0259-0.4478-1.0259-1s0.4219-1,0.9741-1h0.0518c0.5522,0,1,0.4478,1,1 S38.625,40.9023,38.0728,40.9023z"/>
                    </g>
                    <g>
                      <path d="M45.3604,40.9023c-0.5522,0-1.0273-0.4478-1.0273-1s0.4199-1,0.9722-1h0.0552c0.5522,0,1,0.4478,1,1 S45.9126,40.9023,45.3604,40.9023z"/>
                    </g>
                    <g>
                      <path d="M52.6445,40.9023c-0.5522,0-1.0273-0.4478-1.0273-1s0.4199-1,0.9722-1h0.0552c0.5522,0,1,0.4478,1,1 S53.1968,40.9023,52.6445,40.9023z"/>
                    </g>
                    <g>
                      <path d="M12.584,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.418-1,0.9702-1h0.0591c0.5522,0,1,0.4478,1,1 S13.1362,25.186,12.584,25.186z"/>
                    </g>
                    <g>
                      <path d="M20.7529,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.4185-1,0.9707-1h0.0586c0.5522,0,1,0.4478,1,1 S21.3052,25.186,20.7529,25.186z"/>
                    </g>
                    <g>
                      <path d="M28.9219,25.186c-0.5522,0-1.0293-0.4478-1.0293-1s0.4185-1,0.9707-1h0.0586c0.5522,0,1,0.4478,1,1 S29.4741,25.186,28.9219,25.186z"/>
                    </g>
                    <path d="M56.5327,26.0718h-0.0005c-3.6577-3.0059-8.2656-4.4053-12.9771-3.9463c-1.0573,0.1035-2.0867,0.3111-3.0887,0.5919 c-0.2051-3.1539-1.169-6.2225-2.8205-8.9474c-2.7339-4.5127-7.0605-7.6904-12.1841-8.9478 c-5.1226-1.2573-10.4302-0.4434-14.9414,2.2905c-9.3149,5.6431-12.3022,17.812-6.6592,27.1274 c0.4487,0.7378,0.9443,1.4468,1.4785,2.1147l-2.1206,6.457c-0.1152,0.3521-0.0269,0.7388,0.23,1.0059 c0.1914,0.1982,0.4526,0.3062,0.7202,0.3062c0.0923,0,0.1851-0.0127,0.2764-0.0391l7.8203-2.2476 c4.9188,2.3405,10.487,2.549,15.5263,0.6185c0.6382,4.1645,2.7308,8.1203,6.233,10.9997 c4.626,3.8027,10.7549,5.0024,16.4702,3.2461l6.5781,2.9609c0.1313,0.0591,0.2715,0.0879,0.4106,0.0879 c0.2183,0,0.4351-0.0718,0.6138-0.2104c0.2925-0.2275,0.4351-0.5977,0.3711-0.9624l-1.0391-5.9121 c0.5459-0.5166,1.062-1.0698,1.5391-1.6499C65.1724,43.4663,64.0791,32.2764,56.5327,26.0718z M12.8066,39.8755 c-0.2241-0.1113-0.4814-0.1353-0.7236-0.0664l-6.374,1.832l1.7026-5.1851c0.1084-0.3306,0.0376-0.6938-0.1875-0.959 c-0.604-0.7119-1.1606-1.4844-1.6528-2.2944C0.5,24.8315,3.1851,13.895,11.5571,8.8232c4.0537-2.458,8.8218-3.1885,13.4282-2.0591 c4.6045,1.1304,8.4932,3.9863,10.9502,8.0425c1.5782,2.6036,2.4474,5.5574,2.5516,8.5797 c-2.6577,1.0986-5.0207,2.841-6.8978,5.1259c-2.8444,3.4614-4.1367,7.6871-3.9944,11.8476 C22.8245,42.3625,17.4745,42.2095,12.8066,39.8755z M57.4243,49.7456c-0.5303,0.645-1.1147,1.2524-1.7378,1.8062 c-0.2598,0.2305-0.3809,0.5791-0.3208,0.9209l0.8066,4.5908l-5.2051-2.3433c-0.1304-0.0586-0.2705-0.0879-0.4106-0.0879 c-0.106,0-0.2124,0.0166-0.3145,0.0508c-5.1646,1.7104-10.7529,0.6758-14.9463-2.7725 c-6.6953-5.5044-7.6646-15.4312-2.1616-22.1289c2.666-3.2446,6.436-5.2568,10.6157-5.6655 c4.1816-0.4072,8.2681,0.8345,11.5127,3.5005h-0.0005C61.957,33.1211,62.9268,43.0483,57.4243,49.7456z"/>
                  </g>
                </g>
              </svg>
            </div>

            {/* Title */}
            <h2 className="hektor-say-hi-title">Say Hi!</h2>

            {/* Lead Description */}
            <p className="hektor-say-hi-desc">
              You are one message away from being part of something being built in public. Whether you want to appear as a guest on The Product Lab Conversations podcast, explore a sponsorship, discuss a partnership, or just want to reach out — fill out the form and we will get back to you.
            </p>

            {/* Contact Details */}
            <div className="hektor-contact-details-block">
              <h3 className="hektor-cd-heading">Contact Details</h3>
              <address className="hektor-cd-address">
                The Product Lab
              </address>
              <div className="hektor-cd-links">
                <a href="mailto:me@thosynpax.com,thosynpax@gmail.com" className="hektor-cd-link">
                  me@thosynpax.com<br />
                  thosynpax@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LabContact;
