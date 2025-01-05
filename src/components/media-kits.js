import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const MediaKit = () => {
  return (
    <main className="media-kit">
      <style>
        {`
          .content-section {
            margin-bottom: 3rem;
          }

          .title {
            font-size: 3.5rem;
            font-weight: bold;
            color: #fff;
            margin-bottom: 1rem;
            font-family: "AnnieUseYourTelescope
          }

          .description {
            font-size: 1.1rem;
            color: #fff;
            line-height: 1.8rem;
            margin-bottom: 2rem;
            font-family: 'Montserrat';
          }

          .links a {
            font-size: 1.1rem;
            color: #ffe666;
            text-decoration: none;
            margin-right: 1.5rem;
            position: relative;
            padding-bottom: 2px;
          }

          .links a:hover {
            border-bottom: 2px solid #ffe666;
          }

          .section-image img {
            width: 100%;
            max-width: 600px;
            border-radius: 8px;
            margin: 2rem 0;
          }

          .subtitle {
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #fff;
          }

          .links-section {
            margin-bottom: 3rem;
          }

          .photographs img {
            width: 100%;
            max-width: 400px;
            border-radius: 10px;
            margin: 1rem 0;
          }

          @media (max-width: 768px) {
            .wrapper {
              padding: 1rem;
            }

            .title {
              font-size: 2rem;
            }

            .subtitle {
              font-size: 1.5rem;
            }

            .description {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div className="wrapper">
        <header className="content-section">
          <h1 className="title">Thosyn Pax's Press Kit</h1>
          <p className="description">
            This press kit contains essential information for media publishers and event organizers.
          </p>
        </header>

        <section className="content-section">
          <h2 className="subtitle">Basic Information</h2>
          <p className="description">
            Freelance — Software Engineer,and UI/UX Engineer<br />
            Entrepreneur — Founded Afriheals Careers <br />
            Tech Mentor — Afriheals Careers<br />
            Lagos, Nigeria
          </p>
          <div className="links">
            <a href="https://thosynpax.com">Personal Website</a>
            <a href="https://x.com/thosynpax">Twitter</a>
            <a href="https://www.linkedin.com/in/thosyn-pax/">LinkedIn</a>
            <a href="https://www.instagram.com/thosynpax/">Instagram</a>
          </div>
        </section>

        <section className="content-section">
          <h2 className="subtitle">Biography</h2>
          <p className="description">
          Thosyn Pax (Solomon Oladele) is a skilled UX Designer, and Software Engineer with over 9 years of experience in the
           tech industry. Known for his ability to bridge creativity and technology, 
           Thosyn has led various successful projects, turning innovative
            ideas into impactful products. His expertise spans across UX design,
             product management, and software development, making him a versatile 
             leader in the tech space.
          </p>

          <p className="description">
          Beyond his professional roles, Thosyn is the driving force behind AfriHeals Careers, 
          a mentoring community aimed at nurturing and empowering African innovators. 
          Through this initiative, he dedicates his time to mentoring young talent,
           fostering the growth of future leaders in technology and entrepreneurship.
          </p>

          <p className="description">
          Thosyn is committed to continuous learning and sharing knowledge. 
          He actively creates content on platforms like LinkedIn, Instagram, and X (twitter),
           offering insights on product development, tech innovation, and personal growth.
            His work and community efforts reflect his belief in building a brighter future
             through technology, creativity, and collaboration.
          </p>
        </section>

        <section className="content-section photographs">
          <h2 className="subtitle">Photographs</h2>
          <div className="section-image">
            <img src="link-to-photo1" alt="Thosyn Pax" />
            <img src="link-to-photo2" alt="Thosyn Pax" />
          </div>
        </section>

         {/**  
        <section className="content-section">
          <h2 className="subtitle">Press Features</h2>
          <p className="description">
            Ire Aderinokun has been featured in multiple notable media platforms for her remarkable contributions to the tech world and feminist initiatives.
          </p>
          <div className="links">
            <a href="#">Press Feature 1</a>
            <a href="#">Press Feature 2</a>
            <a href="#">Press Feature 3</a>
          </div>
        </section>
        */}
      </div>
    </main>
  );
};

export default MediaKit;
