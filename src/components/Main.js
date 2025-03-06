import { useState } from "react";
import '../App.css';
import TP from '../assets/tp.png';
import reactLogo from "../assets/skills/react-logo.svg";
import tailwindLogo from "../assets/skills/tailwindcss-logo.png";
import supabaseLogo from "../assets/skills/supabase-logo.png";
import firebaseLogo from "../assets/skills/firebase-logo.svg";
import jiraLogo from "../assets/skills/jira-logo.png";
import confluenceLogo from "../assets/skills/confluence-logo.png";
import gitLogo from "../assets/skills/git-logo.png";
import threejsLogo from "../assets/skills/threejs-logo.png";
import figmaLogo from "../assets/skills/figma-logo.png";
import notionLogo from "../assets/skills/notion-logo.png";
import javascriptLogo from "../assets/skills/javascript-logo.png";

const skills = [
  { name: "React", img: reactLogo },
  { name: "TailwindCSS", img: tailwindLogo },
  { name: "Supabase", img: supabaseLogo },
  { name: "Firebase", img: firebaseLogo },
  { name: "Jira", img: jiraLogo },
  { name: "Confluence", img: confluenceLogo },
  { name: "Git", img: gitLogo },
  { name: "Three.js", img: threejsLogo },
  { name: "Figma", img: figmaLogo },
  { name: "Notion", img: notionLogo },
  { name: "Javascript", img: javascriptLogo },
];

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="site-body">
      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="main-grid">
          <div className="main-content">
            <header className="intro">
              <h1 className="intro-title">Hey! I'm Thosyn Pax</h1>
              <h4 className="intro-current-job">
                I'm a Technical Product Designer and UX Engineer
              </h4>
            </header>
            {/* Image shown only on mobile */}
            <div className="image-content2 mobile-only">
              <img src={TP} alt="Thosyn Pax" />
            </div>
            <div className="brief-content">
              <p>
              I specialize in designing and developing intuitive, high-performing web and mobile applications, seamlessly blending UX design with engineering expertise.
                <p>I'm currently open to opportunities as a Technical Product Designer and UX Engineer. Let’s connect and build impactful digital experiences together.</p>
              </p>

              {/* New section for partnerships */}
              <div className="partnerships">
                <ul className="partnerships-list">
                  <li style={{ fontWeight: "bold", listStyle: "none" }}>
                    <a
                      href="https://www.thosynpax.com/works"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#C2C2C2", fontWeight: "300", textDecoration: "underline", fontSize: "16px" }}
                    >
                      View My Work
                    </a>
                  </li>

                  <li style={{ fontWeight: "bold", listStyle: "none" }}>
                    <a
                      href="https://dribbble.com/ThosynPax"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#C2C2C2", fontWeight: "300", textDecoration: "underline", fontSize: "16px" }}
                    >
                      Design Portfolio
                    </a>
                  </li>

                  <li style={{ fontWeight: "bold", listStyle: "none" }}>
                    <a
                      href="https://docs.google.com/document/d/1WSfjQNOd7sAHEStPzUVZ4tTNzuiWE0FkSJ8chuWprn0/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#C2C2C2", fontWeight: "300", textDecoration: "underline", fontSize: "16px" }}
                    >
                      Download Resume
                    </a>
                  </li>

                  <li style={{ fontWeight: "bold", listStyle: "none" }}>
                    <a
                      href="https://linkedin.com/in/thosyn-pax"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#C2C2C2", fontWeight: "300", textDecoration: "underline", fontSize: "16px" }}
                    >
                      Let’s Connect
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>

             {/* Tools and Skills */}
          <div className="skills">
          <h2 className="skills-heading">Skills & Tools I Have Acquired During My Tech Journey</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.img} alt={skill.name} className="skill-image" />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
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
              margin-top: 10px;
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
      </div>
    </main>
  );
};

export default Main;
