import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import useSEO from '../hooks/useSEO';

const Resources = ({ theme }) => {
  useSEO({
    title: 'Resources | The Product Lab',
    description: 'Free templates, technical blueprints, and tools from The Product Lab.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 10;

  // Resource Data
  const allResources = [
    { 
      id: 1, 
      name: "Founder's Linux Starter Pack", 
      type: "PDF", 
      size: "46 KB", 
      link: "/resources/Founders_Linux_Starter_Pack.pdf", 
      icon: "fas fa-file-pdf", 
      color: "#ff4b4b" 
    },
    // Add more resources here...
  ];

  const totalPages = Math.ceil(allResources.length / resourcesPerPage);
  const currentResources = allResources.slice((currentPage - 1) * resourcesPerPage, currentPage * resourcesPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="lab-page-layout">
      <style>{`
        body { margin: 0; padding: 0; background: #000; }
        
        .lab-page-layout {
          padding: 1rem;
          box-sizing: border-box;
          background-color: transparent;
          font-family: 'Inter', sans-serif;
          min-height: calc(100vh - 110px);
          display: flex;
          flex-direction: column;
        }

        .lab-container {
          flex: 1;
          border-radius: 20px;
          background-color: #0b0b0b;
          background-image: linear-gradient(rgba(11, 11, 11, 0.88), rgba(11, 11, 11, 0.96)), url('/hero.jpg');
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255,255,255,0.05);
          padding: 3rem 4rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        @media (max-width: 900px) {
          .lab-container {
            padding: 2rem 1.5rem;
          }
        }

        .page-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .lab-title {
          font-family: 'Space Mono', monospace;
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          letter-spacing: -1px;
          color: #fff;
        }

        .lab-intro p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          max-width: 600px;
        }

        .project-list {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
        }

        .project-row {
          display: grid;
          grid-template-columns: 8fr 2fr 2fr 15px;
          justify-content: start;
          gap: 1.5rem;
          padding: 1.25rem 0;
          text-decoration: none;
          color: #a0a0a0;
          transition: color 0.2s;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          align-items: center;
        }
        .project-row:last-child { border-bottom: none; }
        .project-row:hover { color: #fff; background: rgba(255,255,255,0.02); }
        .header-row { color: #888; padding-bottom: 0.5rem; border-bottom: none; pointer-events: none; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.5px; }
        
        .p-name { color: #d0d0d0; transition: color 0.2s; font-weight: 500; font-size: 1.05rem; }
        .project-row:hover .p-name { color: #fff; }
        .p-status, .p-domain { color: #666; transition: color 0.2s; }
        .project-row:hover .p-status, .project-row:hover .p-domain { color: #aaa; }
        .p-link { color: #444; transition: color 0.2s; text-align: right; font-weight: 600; }
        .project-row:hover .p-link { color: #fff; }

        @media (max-width: 650px) {
          .lab-title { font-size: 2.2rem; }
          .project-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding: 1.2rem 0;
            gap: 0.6rem;
          }
          .p-name {
            flex: 1 1 100%;
            font-size: 1.15rem;
            color: #fff;
            margin-bottom: 0.2rem;
          }
          .p-status {
            font-size: 0.8rem;
            padding: 0.25rem 0.6rem;
            background: rgba(255,255,255,0.15);
            border-radius: 6px;
            color: #fff;
          }
          .p-domain {
            font-size: 0.95rem;
            flex: 1;
            color: rgba(255,255,255,0.7);
          }
          .p-link {
            font-size: 1.2rem;
            color: #fff;
          }
          .header-row {
            display: none;
          }
        }

        /* Top Nav */
        .lab-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .lab-top-right {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(255,255,255,0.3);
        }
        
        @media (max-width: 650px) {
          .lab-top { flex-direction: column; align-items: flex-start; }
          .lab-top-right { flex-direction: column; align-items: flex-start; gap: 0.3rem; }
        }
        
        .top-link {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .top-link:hover { color: #fff; }

        /* Pagination Controls */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 3rem;
        }

        .page-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
        }

        .page-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.15);
        }

        .page-btn.active {
          background: #fff;
          color: #000;
          font-weight: 600;
        }

        .page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .site-footer {
          margin-top: 1.5rem !important;
        }
      `}</style>

      <div className="lab-container">
        
        <div className="lab-top">
          <Link to="/lab" className="top-link">← Return to Lab</Link>
          <div className="lab-top-right">
            <span>Tools for the factory floor</span>
          </div>
        </div>

        <div className="page-header">
          <h1 className="lab-title">LAB RESOURCES</h1>
          <div className="lab-intro">
            <p>A curated collection of frameworks, templates, and architectural blueprints for building products. Free for builders, founders, and engineers.</p>
          </div>
        </div>

        <div>
          <div className="project-list">
            <div className="project-row header-row">
              <span>Resource Name</span>
              <span>Type</span>
              <span>Size</span>
              <span></span>
            </div>
            
            {currentResources.length > 0 ? (
              currentResources.map(resource => (
                <a key={resource.id} href={resource.link} target="_blank" rel="noopener noreferrer" className="project-row">
                  <span className="p-name">
                    <i className={resource.icon} style={{ marginRight: '8px', color: resource.color }}></i> 
                    {resource.name}
                  </span>
                  <span className="p-status">{resource.type}</span>
                  <span className="p-domain">{resource.size}</span>
                  <span className="p-link">↓</span>
                </a>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.4)' }}>
                No resources found for this page.
              </div>
            )}
            
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                onClick={() => goToPage(currentPage - 1)} 
                disabled={currentPage === 1}
              >
                Prev
              </button>
              
              {[...Array(totalPages)].map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button 
                    key={pageNum}
                    className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => goToPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button 
                className="page-btn" 
                onClick={() => goToPage(currentPage + 1)} 
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default Resources;
