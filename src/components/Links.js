import { useEffect } from "react";
import { motion } from "framer-motion";
import PageLink from "../assets/logo.png";

const links = [
  { label: "Who I Am & What I Do", url: "/" },
  { label: "Level Up with a New Skill", url: "https://www.withpaste.com/" },
  { label: "Tune In: The Product Lab", url: "https://thosynpax.com/lab" },
  { label: "Grants, AI Credits & Startup Opportunities", url: "https://remake.thosynpax.com/" },
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
        <img loading="lazy" src={PageLink} alt="Thosyn Pax Logo" className="logo" />
        <h1>I'm Thosyn Pax</h1>
        <p>Product Architect • Tech Educator • Entrepreneur</p>
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

      {/* 🚀 Premium Startup CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="cta-card"
      >
        <h3>Launch Your Idea with Cre8fast</h3>
        <p>We build and ship high-scale tech products in weeks, not months. Get developer execution, AI orchestration, and scaling blueprints.</p>
        <a href="https://cre8fast.thosynpax.com/" target="_blank" rel="noopener noreferrer" className="cta-button">
          Start Building →
        </a>
      </motion.section>

      <footer className="footer">
        <p>
          Built with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ margin: '0 4px', verticalAlign: 'middle', color: 'var(--link-color)' }}
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
          color: var(--text-color);
          min-height: 100vh;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: var(--bg-color);
          transition: background-color var(--transition-speed), color var(--transition-speed);
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
          color: var(--brief-text);
        }

        h1 {
          margin: 0;
          font-size: 2rem;
          color: var(--header-color);
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
          background-color: var(--card-bg);
          color: var(--text-color);
          border: 1px solid rgba(var(--accent-color), 0.2);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .link-button:hover {
          background-color: var(--accent-color);
          color: var(--bg-color);
        }

        .cta-card {
          margin-top: 3.5rem;
          background: var(--card-bg);
          padding: 2.5rem 1.5rem;
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .cta-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
        }

        .cta-card h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
          color: var(--header-color);
          font-weight: 700;
        }

        .cta-card p {
          margin: 0 0 1.5rem 0;
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--brief-text);
        }

        .cta-button {
          display: inline-block;
          padding: 0.85rem 1.85rem;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 40px;
          background-color: var(--link-color);
          color: var(--bg-color);
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: var(--text-color);
          color: var(--bg-color);
          transform: scale(1.05);
        }

        .footer {
          margin-top: 4rem;
          font-size: 0.9rem;
          color: var(--text-color);
        }
      `}</style>
    </div>
  );
}
