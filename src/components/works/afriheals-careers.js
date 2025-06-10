import React from 'react';
import afrihealsImage1 from '../../assets/works/afriheals/afriheals1.jpeg';
import afrihealsImage2 from '../../assets/works/afriheals/afriheals2.jpeg';

const AfrihealsCareers = () => {
  return (
    <main className="founder-body">
      <style>
        {`
          .founder-body {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            color: #333;
            font-family: "Montserrat";
            line-height: 1.6;
          }
          
          .section {
            margin-bottom: 4rem;
            text-align: left;
            color: #fff;
          }
          
          .title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: initial;
            color: #f4d4b7;
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

          .media-container {
            max-width: 900px;
          }
          
          .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            height: 0;
            overflow: hidden;
          }
          
          .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .image-wrapper {
            margin: 2rem auto;
          }
          
          .image-wrapper img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
          }
          
          .quote {
            font-style: italic;
            font-size: 1.3rem;
            color: #008080;
            padding: 2rem;
            background: #f4d4b7;
            border-left: 4px solid #f4d4b7;
            max-width: 700px;
          }
          
          .highlights {
            text-align: left;
            max-width: 600px;
          }
          
          .highlights li {
            margin-bottom: 1rem;
          }
          
          .press {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin: 2rem 0;
          }
          
          .press-item {
            background: #f5f5f5;
            padding: 1.5rem;
            border-radius: 8px;
            max-width: 300px;
          }
          
          .links {
            margin-top: 3rem;
          }
          
          .links a {
            color: #f5f5f5;
            text-decoration: none;
            margin: 0 1rem;
          }
        `}
      </style>

      <div className="wrapper">
        {/* Current Position Section */}
        <section className="section">
          <h1 className="title">Where It All Started</h1>
          <div className="content">
            <p>In mid-2022, I discovered something that changed everything, I was good at teaching Technical Skills and Tools.
               That year, I joined <a href='https://hagitalconsulting.com/' target='_blank'> Hagital Consulting</a> as a Product Design Instructor, where I physically trained over 200 people in just 3 months, then it went on and on for few months.</p>

            <p>At the time, I was still a generalist, someone who had explored a bit of everything. I had picked up skills in product management, 
              business analytics, and project management. I even led a tech training program for kids in 2023. Every experience added a new layer to what I could offer.</p>
          </div>
        </section>

          {/* Video Section */}
           {/* Image Section */}
          <div className="image-wrapper">
            {/* Replace with actual image */}
            <img src={afrihealsImage1} alt="" />
          </div>

        {/* My Story Section */}
        <section className="section">
          <h2 className="subtitle">My First Community Attempt</h2>
          <div className="content">
            <p>In 2023, I launched a community called <a href='https://thepaxcompany.xyz/portfolio/ux-naija/' target='_blank'> UX Naija</a>. It had potential, but I couldn’t fully commit to managing it well, so I had to let it go. That decision led to something better.</p>
          </div>
          
          <div className="content">
            <h2 className="subtitle">Building a Tech School from Scratch</h2>
            <p>I started a small, fully virtual tech school called TP Academy. From 2023 to 2024, I mentored over 1,000 tech newbies across different tracks. No big team. No funding. Just passion and a laptop. I ran mentoring sessions, led classes, and answered countless career questions—one person at a time.</p>
          

            <h2 className="subtitle">When It Became More Than Just Teaching</h2>
            <p>That’s how <a href='https://www.afrihealscareers.com/' target='_blank'>AfriHeals Careers</a> began.<br />

              Not as a business.<br />
              Not with a business model.<br />
              But as a burden.<br /><br />

              A burden to help fellow Africans in tech who felt stuck, confused, or completely alone.
              It started with free 1-on-1 calls, spontaneous webinars, late-night mentoring sessions, and bootcamps that weren’t planned. They were just necessary.
              <br /><br />
              I kept meeting people who were learning tech skills but didn’t know what to do next.
              Talented individuals with no roadmap, no community, no support.<br /><br />
              I couldn’t ignore it.</p>
          </div>
          
          {/* Image Section */}
          <div className="image-wrapper">
            {/* Replace with actual image */}
            <img src={afrihealsImage2} alt="" />
          </div>
          
          <div className="content">
            <h2 className="subtitle">A Community Was Born</h2>
            <p>From those honest, unfiltered conversations, a community began to take shape.
                Today, <a href='https://www.afrihealscareers.com/' target='_blank'>AfriHeals Careers</a> is more than a brand. <br /></p>

            <p>It's a growing support system for African tech talents</p>

            <p>We offer:</p>

            <div className="highlights">
            <ul>
              <li>Hands-on training</li>
              <li>Expert-led webinars</li>
              <li>Exclusive job alerts</li>
              <li>Career clarity and mentorship</li>
            </ul>
            <p>We’re not here to flood people with endless content. We’re here to give real help.
To offer clarity, connection, and courage to those building a tech career from the ground up. <br /> We’re not chasing numbers, we’re building real stories.</p>
          </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section">
          <h2 className="subtitle">The Mission</h2>
          <p>From the beginning till now, the mission has stayed the same:
            To make tech careers more accessible, more connected, and more purposeful for Africans.

            </p>
        </section>

         <section className="section">
          <h2 className="subtitle">A New Chapter</h2>
          <p>As of May 2025, I decided to step away from AfriHeals Careers to focus on something bigger, my broader career journey, where I continue building, mentoring, and creating opportunities at scale.

            </p>
        </section>

      </div>
    </main>
  );
};

export default AfrihealsCareers;