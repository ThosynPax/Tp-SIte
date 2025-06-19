const Learn = () => {
  return (
    <main className="founder-body">
      <style>
        {`
          .founder-body {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            color: #fff;
            font-family: "Montserrat";
            line-height: 1.6;
          }
          
          .section {
            margin-bottom: 4rem;
            text-align: left;
            color: #fff;
          }
          
          .hero-section {
            text-align: center;
            margin-bottom: 6rem;
            padding: 4rem 0;
          }
          
          .title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: initial;
            color: #f4d4b7;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.2;
            color: #f4d4b7;
          }
          
          .hero-subtitle {
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 2rem;
            color: #fff;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #f4d4b7;
          }
          
          .content {
            max-width: 800px;
            font-size: 1.3rem;
            margin-bottom: 2rem;
          }
          
          .content a {
            color: #f4d4b7;
            text-decoration: none;
            font-weight: 500;
          }
          
          .cta-button {
            background: #f4d4b7;
            color: #008080;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin: 1rem 0.5rem;
            transition: all 0.3s ease;
          }
          
          .cta-button:hover {
            background: #fff;
            transform: translateY(-2px);
          }
          
          .cta-button.secondary {
            background: transparent;
            color: #f4d4b7;
            border: 2px solid #f4d4b7;
          }
          
          .cta-button.secondary:hover {
            background: #f4d4b7;
            color: #008080;
          }
          
          .bullet-list {
            list-style: none;
            padding: 0;
            max-width: 700px;
          }
          
          .bullet-list li {
            margin-bottom: 1rem;
            padding-left: 2rem;
            position: relative;
            font-size: 1.2rem;
          }
          
          .bullet-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #f4d4b7;
            font-weight: bold;
            font-size: 1.4rem;
          }
          
          .modules-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
          }
          
          .module-card {
            background: rgba(244, 212, 183, 0.1);
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid rgba(244, 212, 183, 0.3);
          }
          
          .module-card h4 {
            color: #f4d4b7;
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }
          
          .courses-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background: rgba(244, 212, 183, 0.05);
            border-radius: 12px;
            overflow: hidden;
          }
          
          .courses-table th,
          .courses-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid rgba(244, 212, 183, 0.2);
          }
          
          .courses-table th {
            background: rgba(244, 212, 183, 0.2);
            color: #f4d4b7;
            font-weight: 600;
          }
          
          .courses-table td {
            color: #fff;
          }
          
          .price-card {
            background: rgba(244, 212, 183, 0.1);
            padding: 3rem;
            border-radius: 16px;
            text-align: center;
            max-width: 500px;
            margin: 2rem auto;
            border: 2px solid #f4d4b7;
          }
          
          .price {
            font-size: 3rem;
            font-weight: 700;
            color: #f4d4b7;
            margin: 1rem 0;
          }
          
          .steps-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
            max-width: 600px;
          }
          
          .steps-list li {
            counter-increment: step-counter;
            margin-bottom: 1.5rem;
            padding-left: 3rem;
            position: relative;
            font-size: 1.2rem;
          }
          
          .steps-list li:before {
            content: counter(step-counter);
            position: absolute;
            left: 0;
            top: 0;
            background: #f4d4b7;
            color: #008080;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
          }
          
          .highlight-box {
            background: rgba(244, 212, 183, 0.1);
            padding: 2rem;
            border-radius: 12px;
            border-left: 4px solid #f4d4b7;
            margin: 2rem 0;
            max-width: 700px;
          }

          a {
            text-decoration: underline;
            color: #f4d4b7;
            text-transform: none;
          }
          
          .testimonial {
            background: rgba(244, 212, 183, 0.1);
            padding: 2rem;
            border-radius: 12px;
            margin: 2rem 0;
            font-style: italic;
            border-left: 4px solid #f4d4b7;
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .hero-subtitle {
              font-size: 1.4rem;
            }
            
            .modules-grid {
              grid-template-columns: 1fr;
            }
            
            .courses-table {
              font-size: 0.9rem;
            }
            
            .courses-table th,
            .courses-table td {
              padding: 0.5rem;
            }
          }
        `}
      </style>

      <div className="wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Learn to Build. Teach to Lead.</h1>
          <p className="hero-subtitle">
            Mentorship for the next generation of UX Engineers, Product Designers & Builders.
          </p>
          <a href="#apply" className="cta-button">
            Join the Mentorship
          </a>
          <a href="#courses" className="cta-button secondary">
            Browse Courses
          </a>
        </section>

        {/* Who This Is For */}
<section className="section" style={{ 
  backgroundColor: '#000',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  paddingLeft: 'calc(50vw - 50%)',
  paddingRight: 'calc(50vw - 50%)',
  paddingTop: '2rem',
  paddingBottom: '2rem'
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h2 className="title">Is this you?</h2>
    <ul className="bullet-list">
      <li>
        You're a <strong>Product Designer (UI/UX)</strong> looking to grow technically
      </li>
      <li>
        You're a <strong>Front-end Developer</strong> exploring design and product thinking
      </li>
      <li>
        You're a <strong>Technical Product Manager</strong> who wants hands-on design and dev skills
      </li>
      <li>
        You're a <strong>UX Engineer</strong> looking to improve your build + design workflow
      </li>
      <li>
        You're a curious creative who wants to transition into <strong>tech</strong> or{" "}
        <strong>product architecture</strong>
      </li>
    </ul>
  </div>
</section>

        {/* What You'll Learn */}
        <section className="section">
          <h2 className="title">What You'll Learn in 6 Months</h2>
          <div className="modules-grid">
            <div className="module-card">
              <h4>UX Engineering Foundations</h4>
              <p>Bridge the gap between design and development with practical skills that make you invaluable.</p>
            </div>
            <div className="module-card">
              <h4>Design Systems & Technical Workflows</h4>
              <p>Build scalable design systems and establish efficient workflows for modern product teams.</p>
            </div>
            <div className="module-card">
              <h4>Frontend for Designers</h4>
              <p>Master React, Tailwind, and systems thinking to bring your designs to life.</p>
            </div>
            <div className="module-card">
              <h4>AI Tools & Product Thinking</h4>
              <p>Navigate the AI-driven landscape with strategic product thinking for 2024 and beyond.</p>
            </div>
            <div className="module-card">
              <h4>Portfolio & Case Study Execution</h4>
              <p>Create compelling portfolios and case studies that showcase your unique value.</p>
            </div>
            <div className="module-card">
              <h4>Career & Strategy Mentorship</h4>
              <p>Get personalized guidance on landing gigs, building products, and accelerating growth.</p>
            </div>
          </div>
        </section>

        {/* Short Practical Courses */}
        <section className="section" id="courses">
          <h2 className="title">Not ready for full mentorship?</h2>
          <p className="content">
            Learn at your pace with our one-off practical tech courses. Each course is focused, actionable, and designed
            to get you building real things.
          </p>

          <table className="courses-table">
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Format</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UI/UX Fundamentals</td>
                <td>Video + Template</td>
                <td>₦7,500</td>
                <td><a href="https://afriheals.selar.com/">order now</a></td>
              </tr>
               <tr>
                <td>Business Analysis Practical Class</td>
                <td>Video (Pre-recorded)</td>
                <td>₦5,500</td>
                <td><a href="https://afriheals.selar.com/337y75">order now</a></td>
              </tr>
              <tr>
              <td>Learn to use Jira Like a Pro</td>
                <td>Video (Pre-recorded)</td>
                <td>₦10,000</td>
                 <td><a href="https://afriheals.selar.com/jira">order now</a></td>
              </tr>
              <tr>
                <td>50 App Project Ideas for Developers</td>
                <td>Notion Page</td>
                <td>FREE</td>
                 <td><a href="https://www.thosynpax.store/l/50-app-idea?layout=profile">order now</a></td>
              </tr>
              <tr>
                <td>50 Inspiring Web Development Project Ideas to Kickstart Your Creativity</td>
                <td>Notion Page</td>
                <td>FREE</td>
                 <td><a href="https://www.thosynpax.store/l/50-web-projects?layout=profile">order now</a></td>
              </tr>
            </tbody>
          </table>

          <div style={{ textAlign: "center" }}>
            <a href="#browse-courses" className="cta-button">
              Browse Courses
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <h2 className="title">Structure & Delivery</h2>
          <p className="content">
            The mentorship is flexible but focused, with weekly sessions, personal check-ins, and hands-on projects.
          </p>

         <ul className="bullet-list">
            <li>
              <strong>6-Month Guided Program</strong> – A structured roadmap designed to take you from confusion to clarity, whether you’re just starting or levelling up.
            </li>
            <li>
              <strong>Weekly Live Sessions</strong> – Real-time sessions with Thosyn Pax, covering everything from design systems to AI tools. All sessions are recorded so you never miss a thing.
            </li>
            <li>
              <strong>Projects, Templates & Design Kits</strong> – Build real-world projects using curated resources you can reuse in your own career.
            </li>
            <li>
              <strong>One-on-One Feedback & Growth Tracking</strong> – Personalised reviews to help you improve fast, not just coast.
            </li>
            <li>
              <strong>Build Your Own Product (Optional Track)</strong> – Apply your skills to a real idea, with guidance from Thosyn as your Product Architect.
            </li>
            <li>
              <strong>Private Community Access</strong> – Network, ask questions, and collaborate with other learners and mentors who want to grow like you.
            </li>
            <li>
              <strong>Flexible & Beginner-Friendly</strong> – Whether you're a designer, developer, or hybrid creative, the curriculum meets you where you are and pushes you further.
            </li>
          </ul>

        </section>

        {/* Pricing */}
        <section className="section">
          <h2 className="title">One Price. Full Access.</h2>
          <div className="price-card">
            <h3 style={{ color: "#f4d4b7", marginBottom: "1rem" }}>Full Mentorship Program</h3>
            <div className="price">₦250,000</div>
            <p style={{ color: "#fff", marginBottom: "2rem" }}>
              Includes: full 6-month mentorship, community access, templates, and project support
            </p>
            <a href="https://wa.me/2347016619097" className="cta-button">
              Apply Now
            </a>
          </div>
        </section>

        {/* Testim
        <section className="section">
          <h2 className="title">What Students Say</h2>
          <div className="testimonial">
            <p>
              "Thosyn's mentorship completely transformed how I approach design and development. The practical skills I
              gained landed me my dream role as a UX Engineer."
            </p>
            <p style={{ color: "#f4d4b7", marginTop: "1rem" }}>— Sarah M., UX Engineer</p>
          </div>
          <div className="testimonial">
            <p>
              "The AI tools and product thinking modules were game-changers. I'm now leading product strategy at my
              startup with confidence."
            </p>
            <p style={{ color: "#f4d4b7", marginTop: "1rem" }}>— David K., Product Manager</p>
          </div>
        </section>
        onials */}

        {/* How to Join */}
        <section className="section" id="apply">
          <h2 className="title">Let's Get Started</h2>
          <ol className="steps-list">
            <li>Click "Apply" and fill the short form</li>
            <li>We'll review your submission and send onboarding info</li>
            <li>Make payment and choose your start date</li>
            <li>Join the Slack group, get your first brief — let's go!</li>
          </ol>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="https://wa.me/2347016619097" className="cta-button">
              Apply for Mentorship
            </a>
            <a href="mailto:thosynpax@gmail.com" className="cta-button secondary">
              Have Questions?
            </a>
          </div>
        </section>

        {/* Footer */}
        <section
          className="section"
          style={{ textAlign: "center", borderTop: "1px solid rgba(244, 212, 183, 0.3)", paddingTop: "2rem" }}
        >
          <p style={{ color: "#f4d4b7" }}>Ready to level up your career in tech?</p>
        </section>
      </div>
    </main>
  )
}

export default Learn
