"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const BeyondUX = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <main className="founder-body" ref={containerRef}>
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
            position: relative;
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
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 1rem;
            line-height: 1.2;
            color: #f4d4b7;
            letter-spacing: -0.02em;
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
            color: #fff;
          }
          
          .content a {
            color: #f4d4b7;
            text-decoration: none;
            font-weight: 500;
          }
          
          .content strong {
            color: #f4d4b7;
            font-weight: 600;
          }
          
          .coming-soon-badge {
            background: rgba(244, 212, 183, 0.2);
            border: 1px solid #f4d4b7;
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 500;
            color: #f4d4b7;
            margin-bottom: 2rem;
            display: inline-block;
          }
          
          .quote-section {
            background: rgba(244, 212, 183, 0.1);
            padding: 3rem;
            border-radius: 12px;
            border-left: 4px solid #f4d4b7;
            margin: 4rem 0;
            font-style: italic;
            max-width: 700px;
          }
          
          .quote-text {
            font-size: 1.4rem;
            color: #f4d4b7;
            margin-bottom: 1rem;
            line-height: 1.6;
          }
          
          .quote-author {
            color: #fff;
            font-weight: 600;
          }
          
          .blueprint-grid {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(244, 212, 183, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(244, 212, 183, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            pointer-events: none;
            opacity: 0.3;
          }
          
          .full-width-section {
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            padding-left: calc(50vw - 50%);
            padding-right: calc(50vw - 50%);
            background: #000;
            padding-top: 4rem;
            padding-bottom: 4rem;
            margin-top: 4rem;
            margin-bottom: 4rem;
          }
          
          .carousel-container {
            margin: 2rem 0;
            overflow: hidden;
            position: relative;
          }
          
          .carousel-track {
            display: flex;
            gap: 2rem;
            animation: scroll 20s linear infinite;
          }
          
          .design-card {
            min-width: 200px;
            height: 200px;
            background: rgba(244, 212, 183, 0.1);
            border: 1px solid rgba(244, 212, 183, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          
          .design-shape {
            width: 80px;
            height: 80px;
            position: relative;
          }
          
          .cube {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #008080, #f4d4b7);
            transform: rotateX(45deg) rotateY(45deg);
            border-radius: 8px;
          }
          
          .cylinder {
            width: 40px;
            height: 80px;
            background: linear-gradient(to bottom, #f4d4b7, #008080);
            border-radius: 20px;
            position: relative;
          }
          
          .cylinder::before {
            content: '';
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 20px;
            background: #f4d4b7;
            border-radius: 50%;
          }
          
          .pyramid {
            width: 0;
            height: 0;
            border-left: 40px solid transparent;
            border-right: 40px solid transparent;
            border-bottom: 80px solid #008080;
          }
          
          .sphere {
            width: 70px;
            height: 70px;
            background: radial-gradient(circle at 30% 30%, #f4d4b7, #008080);
            border-radius: 50%;
          }
          
          .spec-sheet {
            background: rgba(244, 212, 183, 0.05);
            border: 1px solid rgba(244, 212, 183, 0.2);
            border-radius: 12px;
            padding: 3rem;
            margin: 3rem 0;
            max-width: 900px;
          }
          
          .spec-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(244, 212, 183, 0.3);
          }
          
          .spec-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #f4d4b7;
          }
          
          .spec-code {
            font-family: 'Courier New', monospace;
            color: #fff;
            font-size: 0.9rem;
            opacity: 0.7;
          }
          
          .spec-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
          
          .spec-item {
            padding: 1.5rem 0;
            border-bottom: 1px solid rgba(244, 212, 183, 0.1);
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
          }
          
          .spec-item:last-child {
            border-bottom: none;
          }
          
          .spec-icon-container {
            flex-shrink: 0;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            perspective: 1000px;
          }
          
          .spec-3d-icon {
            width: 40px;
            height: 40px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotate3d 4s linear infinite;
          }
          
          .spec-3d-icon.pause-on-hover:hover {
            animation-play-state: paused;
          }
          
          /* 3D Workspace Tool Icon */
          .workspace-tool {
            background: linear-gradient(45deg, #f4d4b7, #008080);
            border-radius: 8px;
            position: relative;
          }
          
          .workspace-tool::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 5px;
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #008080, #f4d4b7);
            border-radius: 8px;
            transform: rotateX(45deg) rotateY(45deg);
            opacity: 0.8;
          }
          
          /* 3D Chair Icon */
          .chair-3d {
            background: linear-gradient(to bottom, #f4d4b7, #008080);
            border-radius: 4px;
            position: relative;
          }
          
          .chair-3d::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            width: 40px;
            height: 20px;
            background: #f4d4b7;
            border-radius: 4px 4px 0 0;
          }
          
          .chair-3d::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 5px;
            width: 30px;
            height: 10px;
            background: #008080;
            border-radius: 2px;
          }
          
          /* 3D Toolbox Icon */
          .toolbox-3d {
            background: linear-gradient(135deg, #008080, #f4d4b7);
            border-radius: 6px;
            position: relative;
            border: 2px solid #f4d4b7;
          }
          
          .toolbox-3d::before {
            content: '';
            position: absolute;
            top: -8px;
            left: 10px;
            width: 20px;
            height: 8px;
            background: #f4d4b7;
            border-radius: 4px 4px 0 0;
          }
          
          /* 3D Ruler Icon */
          .ruler-3d {
            background: linear-gradient(90deg, #f4d4b7, #008080);
            border-radius: 2px;
            position: relative;
          }
          
          .ruler-3d::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: repeating-linear-gradient(
              90deg,
              #008080 0px,
              #008080 4px,
              transparent 4px,
              transparent 8px
            );
          }
          
          /* 3D Package Icon */
          .package-3d {
            background: linear-gradient(45deg, #f4d4b7, #008080);
            border-radius: 4px;
            position: relative;
            border: 1px solid #008080;
          }
          
          .package-3d::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            width: 44px;
            height: 44px;
            background: linear-gradient(45deg, transparent 40%, #f4d4b7 50%, transparent 60%);
            border-radius: 4px;
          }
          
          .spec-content {
            flex: 1;
          }
          
          .spec-number {
            font-size: 0.8rem;
            color: #f4d4b7;
            font-weight: 600;
            margin-bottom: 0.5rem;
            font-family: 'Courier New', monospace;
          }
          
          .spec-name {
            font-size: 1.2rem;
            font-weight: 600;
            color: #f4d4b7;
            margin-bottom: 0.5rem;
          }
          
          .spec-description {
            font-size: 1rem;
            color: #fff;
            line-height: 1.5;
            opacity: 0.9;
          }
          
          @keyframes rotate3d {
            0% { transform: rotateX(0deg) rotateY(0deg); }
            25% { transform: rotateX(90deg) rotateY(0deg); }
            50% { transform: rotateX(90deg) rotateY(90deg); }
            75% { transform: rotateX(0deg) rotateY(90deg); }
            100% { transform: rotateX(0deg) rotateY(0deg); }
          }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .floating {
            animation: float 3s ease-in-out infinite;
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .hero-subtitle {
              font-size: 1.4rem;
            }
            
            .spec-grid {
              grid-template-columns: 1fr;
            }
            
            .spec-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
            }
            
            .quote-section {
              padding: 2rem;
            }
            
            .full-width-section {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            
            .spec-item {
              flex-direction: column;
              text-align: center;
              align-items: center;
            }
          }
        `}
      </style>

      <div className="wrapper">
        <div className="blueprint-grid"></div>

        {/* Hero Section */}
        <motion.section
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="coming-soon-badge"
          >
            Coming Soon
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            BEYOND UX
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A physical design lab by Thosyn Pax
          </motion.p>
        </motion.section>

        {/* What is Beyond UX */}
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What is Beyond UX?
          </motion.h2>

          <motion.div
            className="content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Beyond UX is a design lab focused on <strong>industrial design</strong>. It's where ideas move
              from screen to object,from pixels to products.
            </p>
            <p>
              This is where I experiment, prototype, and release{" "}
              <strong>physical tools, and everyday objects</strong> for thinkers, makers, and creatives.
            </p>
            <p>No fluff. Just form, function, and feeling.</p>
          </motion.div>
        </motion.section>

        {/* 3D Design Carousel - Full Width Black Section */}
        <motion.section
          className="full-width-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.h2
              className="subtitle"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ color: "#f4d4b7" }}
            >
              Design Explorations
            </motion.h2>

            <div className="carousel-container">
              <div className="carousel-track">
                {[...Array(8)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="design-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="design-shape floating">
                      {index % 4 === 0 && <div className="cube" />}
                      {index % 4 === 1 && <div className="cylinder" />}
                      {index % 4 === 2 && <div className="pyramid" />}
                      {index % 4 === 3 && <div className="sphere" />}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* What You'll Find Here - Technical Specification Sheet Style with 3D Icons */}
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What You'll Find Here Soon
          </motion.h2>

          <motion.div
            className="spec-sheet"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="spec-header">
              <div className="spec-title">Product Catalog</div>
              <div className="spec-code">BEYOND UX-2024-CATALOG</div>
            </div>

            <div className="spec-grid">
              {[
                {
                  number: "001",
                  name: "Custom-built workspace tools",
                  description:
                    "Designed for creatives and remote professionals who demand precision and beauty in their work environment.",
                  iconClass: "workspace-tool",
                },
                {
                  number: "002",
                  name: "Minimalist furniture for makers",
                  description:
                    "Compact, functional, and intentional pieces that enhance your creative process without cluttering your space.",
                  iconClass: "chair-3d",
                },
                {
                  number: "003",
                  name: "Design objects & tools",
                  description:
                    "Carefully crafted gear that makes your workflow better, from sketching tools to organizational systems.",
                  iconClass: "toolbox-3d",
                },
                {
                  number: "004",
                  name: "Process breakdowns",
                  description: "Behind-the-scenes look at sketchbooks, prototyping methods, and manufacturing tests.",
                  iconClass: "ruler-3d",
                },
                {
                  number: "005",
                  name: "One-off drops",
                  description:
                    "Limited product runs, studio experiments, and exclusive collaborations with other makers.",
                  iconClass: "package-3d",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="spec-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="spec-icon-container">
                    <div className={`spec-3d-icon pause-on-hover ${item.iconClass}`}></div>
                  </div>
                  <div className="spec-content">
                    <div className="spec-number">#{item.number}</div>
                    <div className="spec-name">{item.name}</div>
                    <div className="spec-description">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Why It Exists */}
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why It Exists
          </motion.h2>

          <motion.div
            className="quote-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="quote-text">Digital isn't everything.</p>
            <p className="quote-text">
              The things we touch, sit on, write with, and work around deserve the same clarity and intention we give to
              screens.
            </p>
            <p className="quote-author">Beyond UX is where I build those things.</p>
          </motion.div>
        </motion.section>
      </div>
    </main>
  )
}

export default BeyondUX
