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
            border-bottom: 2px solid #00A3A3;
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
            Investor — Limited Partner, Angel Investor <br />
            Entrepreneur — Co-founded Helicarrier <br />
            Frontend Engineer — Google Expert in Web Technologies <br />
            Founding Member — Feminist Coalition <br />
            Lagos, Nigeria
          </p>
          <div className="links">
            <a href="#">Personal Website</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Medium</a>
          </div>
        </section>

        <section className="content-section">
          <h2 className="subtitle">Biography</h2>
          <p className="description">
            Ire Aderinokun is an Investor, Entrepreneur, and Frontend Engineer from Lagos, Nigeria, now based in London, UK. She is renowned for her contributions to technology, gender equity, and social causes...
          </p>
        </section>

        <section className="content-section photographs">
          <h2 className="subtitle">Photographs</h2>
          <div className="section-image">
            <img src="link-to-photo1" alt="Ire Aderinokun" />
            <img src="link-to-photo2" alt="Ire Aderinokun" />
          </div>
        </section>

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
      </div>
    </main>
  );
};

export default MediaKit;
