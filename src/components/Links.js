// File: LinksPage.tsx
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

        .footer {
          margin-top: 3rem;
          font-size: 0.9rem;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
