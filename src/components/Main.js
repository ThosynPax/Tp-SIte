import { useState } from "react";
import '../App.css';
import TP from '../assets/thosyn-pax.JPG';


const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="site-body">
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

          .description-list {
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
        <div className="main-grid">
          <div className="main-content">
            <header className="intro">
              <h1 className="intro-title">Hey 👋 I'm Thosyn Pax</h1>
              <h3 className="intro-current-job">
               A Technical Product Designer, UX Engineer, and Startup Product Architect
              </h3>
            </header>
            {/* Image shown only on mobile */}
            <div className="image-content2 mobile-only">
              <img src={TP} alt="Thosyn Pax" />
            </div>
          </div>
          
          
          <div className="image-content">
            <img src={TP} alt="Thosyn Pax" />
          </div>

          {/* Styles */}
          <style jsx>{`
            .skills {
              text-align: left;
              padding: 2rem;
              color: white;
            }
          /* Hide the new image by default on larger screens */
          .mobile-only {
            display: none !important;
          }

          /* Show the image below the header only on mobile */
          @media (max-width: 768px) {
            .mobile-only {
              display: block !important;
              text-align: center;
              position: relative;
              top: 40px;
              margin: calc(-50vw + 50%);
            }
              

            .image-content {
            display: none;
            }

              .mobile-only img {
                width: 100%;
                height: auto;
              }
          }


            .skills-heading {
              font-size: 1.8rem;
              margin-bottom: 1rem;
              display: flex;
              justify-content: left;
              align-items: left;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
              gap: 1rem;
              padding: 1rem;
              justify-content: left;
              align-items: left;
            }
            .skill-item {
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: left;
            }
            .skill-image {
              width: 60px;
              height: 60px;
              object-fit: contain;
              display: block;
            }
            .skill-name {
              margin-top: 0.5rem;
              font-size: 1rem;
              font-family: "Inter";
              display: flex;
              justify-content: left;
              align-items: left;
            }
            @media (max-width: 768px) {
              .skills {
                padding: 1rem;
              }
              .skills-heading {
                font-size: 1.4rem;
              }
              .skills-grid {
                grid-template-columns: repeat(3, minmax(90px, 1fr));
                gap: 0.5rem;
              }
              .skill-image {
                width: 45px;
                height: 45px;
              }
              .skill-name {
                font-size: 0.85rem;
              }
            }
          `}</style>
        </div>
         
        <br />
        <br />
        <br />
        <div className="full-width-black">
            <div className="black-section">
                <section className="content-section container">
                  <div className="brief-content">
                          <p>
                            My story isn't just about coding and designing, it's about crafting products that change how people interact with the digital world.
                            I see each challenge as an opportunity to not only learn but to make a difference. 
                            Every product I work on is part of a bigger picture, whether it’s simplifying complex systems or designing intuitive tools, 
                            my goal has always been to turn ideas to real working product.
                          </p>
                  </div>

                    <h2 className="roles-grid">Current Roles & Impact</h2><br />
                      <ul className="description-list">
                          <li>
                            <b>Afriheals Careers</b><br />
                            Mentor & Tech Instructor
                          </li>
                          <li>
                            <b>The Pax Company</b><br />
                            Startup Product Architect<br />
                            UX Engineer, Technical Product Designer
                          </li>
                          <li>
                            <b>Inflect Innovations</b><br />
                            Co-Founder and Team Lead
                          </li>
                    </ul>
                </section>       
            </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
