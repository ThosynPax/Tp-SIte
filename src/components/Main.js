import React from 'react';
import '../App.css';
import TP from '../assets/tp.png';
import reactLogo from "../assets/skills/react-logo.svg";
import tailwindLogo from "../assets/skills/tailwindcss-logo.png";
import supabaseLogo from "../assets/skills/supabase-logo.png"
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
  { name: "Javascript", img: javascriptLogo},
];

const Main = () => {
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
      I'm a Frontend/Mobile Engineer & UI/UX Unicorn and a Technical Product Manager, exploring new ways to build products.
    </h4>
  </header>
  <div className="brief-content">
    <p>
      I love experimenting with creative ideas and turning them into real, working products.
      With over 9 years in tech, I’ve dabbled in UX design, software engineering, and product management.
    </p>
    <p>
      <span className='inner-brief-content'>My goal is simple:</span> I want to help you build products that are not just useful, but also unique and innovative in the tech world.
    </p>
    <p>
      I’ve worked with all kinds of clients, from startups to established companies, helping them solve problems with user experience and product development.
      I focus on understanding your needs, so each project feels custom-made.
    </p>
    <p>
      Outside of work, I lead a community where I mentor and support the next wave of African innovators. This isn't just a job for me—it's my passion to shape a brighter future through creativity and tech.
    </p>
    <p>
      Let’s connect and explore how we can make your ideas come to life. <span className='inner-brief-content'><a target="_blank" href='https://thosynpax.mainstackbookings.com/p/678c40e929cc2436245a5b22'>Book a Consultation</a></span>
    </p>
  </div>


           


          </div>
          <div className="image-content">
            <img src={TP} alt="Thosyn Pax" />
          </div>

                  {/* Tools and Skills */}
                  <div className="skills">
      <h2 className="skills-heading">Skills I Have Acquired During My Tech Journey</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.img} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>


        {/* Styles */}
        <style jsx>{`
           .skills {
  text-align: center;
  padding: 2rem;
  color: white;
}

.skills-heading {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  justify-content: left;
  align-items: left;
  display: flex;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  justify-content: left;
  align-items: left;
  padding: 1rem;
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
   justify-content: left;
  align-items: left;
  display: flex;
  font-family: "Inter";
}

/* Media Query for Mobile Screens */
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

        `}</style>


           {/* New section added for your partnerships */}
           <div className="partnerships">
              <h2 className="partnerships-heading">Building the Future with Strong Partnerships</h2>
              <ul className="partnerships-list">
                <li>
                  Co-Founder of  <strong>
                     <a href="#" target="_blank" rel="noopener noreferrer" className="partnership-link">
                        Inflect Innovations
                    </a>
                  </strong>
                </li>
                <li>
                  A partner at <strong>
                     <a href="https://axiomaffiliate.com" target="_blank" rel="noopener noreferrer" className="partnership-link">
                        Axiom Affiliate
                     </a>
                  </strong>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
