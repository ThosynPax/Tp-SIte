import { useEffect } from "react";
import { motion } from "framer-motion";
import PageLink from "../assets/logo.png";

const links = [
  { label: "🏠 Get to know me", url: "/" },
  { label: "🎓 Mentorship", url: "/learn" },
  { label: "🧱 Beyond UX – My Industrial Design Story", url: "/blocks" },
  { label: "🛍️ Shop – thosynpax.store", url: "https://www.thosynpax.store" },
  { label: "📓 Pax Trail – Personal Journal", url: "https://trail.thosynpax.com" },
  { label: "🐝 Hustle Hive – Newsletter", url: "https://substack.com/@thosynpax" },
    { label: "💻 Code Meets Design – YouTube", url: "https://www.youtube.com/@thosynpax-2" },
  { label: "🚀  Startup Build Agency", url: "https://www.thepaxcompany.xyz/" },
];

export default function LinksPage() {
  useEffect(() => {
    document.title = "Thosyn Pax | All My Links";
  }, []);

  return (
    <div className="links-wrapper">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="header-section"
      >
        <img src={PageLink} alt="Thosyn Pax Logo" className="logo" />
        <h1>I'm Thosyn Pax</h1>
        <p>Technical Product Designer • UX Engineer • Product Architect</p>
      </motion.div>

      <div className="links-list">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="link-button"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* 🎥 Code Meets Design 
      <section className="youtube-section">
        <h2>💻 Code Meets Design</h2>
        <p>Front-end meets product thinking. See how I explore UI engineering, design systems, and building startups with code.</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=UUQVpAiZ8HG6rAa6ntKJXY4g"
            title="Code Meets Design – YouTube Channel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    – YouTube Preview */}


      {/* 🧮 Equity Calculator */}
      <section className="equity-section">
        <h2>How Much Equity Should You Give Your Co-Founder?</h2>
        <p>Deciding how to split equity with your co-founder can make or break your startup. This FREE Equity Calculator helps you avoid drama, regret, and bad deals. Just answer a few key questions and get a smart, fair split, no guesswork, no Excel sheets.</p>
        <a href="https://www.thepaxcompany.xyz/equity-calculator" target="_blank" rel="noopener noreferrer">
          <button className="equity-button">Try It Now</button>
        </a>
      </section>

      <footer className="footer">
        <p>
          Built with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#f4d4b7"
            style={{ margin: '0 4px', verticalAlign: 'middle' }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 
                  4 4 6.5 4c1.74 0 3.41 1.01 
                  4.13 2.44h1.75C14.09 5.01 15.76 4 
                  17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 
                  6.86-8.55 11.54L12 21.35z" />
          </svg>
          by Thosyn Pax
        </p>
      </footer>

      <style>{`
        .links-wrapper {
          color: #fff;
          min-height: 100vh;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .header-section .logo {
          width: 80px;
          height: 80px;
          margin-bottom: 1rem;
          border-radius: 50%;
        }

        p {
          line-height: 1.6;
          font-size: 0.8rem;
        }

        h1 {
          margin: 0;
          font-size: 2rem;
          color: #f4d4b7;
        }

        .links-list {
          margin-top: 2rem;
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .link-button {
          padding: 1rem;
          border-radius: 12px;
          text-decoration: none;
          background-color: #1f1f1f;
          color: #fff;
          border: 1px solid #333;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .link-button:hover {
          background-color: #f4d4b7;
          color: #000;
        }

        .youtube-section {
          margin-top: 4rem;
          text-align: center;
          padding: 2rem 1rem;
        }

        .youtube-section h2 {
          font-size: 1.5rem;
          color: #f4d4b7;
          margin-bottom: 0.5rem;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          padding-top: 56.25%;
          margin: 1rem auto;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .equity-section {
          background: #1f1f1f;
          margin-top: 4rem;
          padding: 4rem 2rem;
          width: 100%;
          max-width: 800px;
          border-radius: 1.5rem;
          text-align: center;
        }

        .equity-section h2 {
          font-size: 1.8rem;
          color: #f4d4b7;
        }

        .equity-button {
          margin-top: 1.5rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          border: none;
          border-radius: 1rem;
          background-color: #f4d4b7;
          color: #000;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .equity-button:hover {
          background-color: #fff;
        }

        .footer {
          margin-top: 4rem;
          font-size: 0.9rem;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
