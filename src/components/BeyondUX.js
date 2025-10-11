import React from 'react';
import '../App.css';

const Blocks = () => {
 const projects = [
  {
    name: "The Pax Company (TPCo)",
    status: "Active",
    category: "Product Studio",
    description:
      "A digital product and innovation studio helping startups and growing businesses bring their ideas to life through MVP design, development, and automation.",
    url: "https://thepaxcompany.xyz/",
    role: "Founder & Product Architect"
  },
  {
    name: "Afribreath",
    status: "Active",
    category: "Venture Studio",
    description:
      "A venture studio that builds and invests in purpose-driven digital products across Africa, focusing on innovation, sustainability, and creative technology.",
    url: "https://afribreath.com/",
    role: "Founder & CEO"
  },
  {
    name: "PaxLite",
    status: "In Development",
    category: "Energy",
    description:
      "A BNPL solution for solar energy and sustainable products in Africa, enabling customers to access clean energy through flexible payment options.",
    url: "https://paxlite.co/",
    role: "Product Lead"
  },
  {
    name: "Pax School",
    status: "Active",
    category: "Education",
    description:
      "A learning community empowering aspiring product managers, designers, and engineers with hands-on practical skills for building tech products.",
    url: "https://www.paxschool.xyz/",
    role: "Founder & Lead Instructor"
  }
];


  const statusColors = {
    "Active": "#10B981",
    "In Development": "#F59E0B",
    "R&D": "#8B5CF6",
    "Maintenance": "#6B7280"
  };

  return (
    <div className="wrapper">
      <div className="main-content">
        <p className="intro-current-job">Building products at the intersection of design and technology</p>
        
        <div className="brief-content">
          <p>
            A portfolio of technology projects and businesses I'm actively building, 
            maintaining, or exploring. Each venture represents a different facet of 
            my approach to product development and entrepreneurship.
          </p>
        </div>

        {/* Projects Grid - Single column layout */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-meta">
                  <span 
                    className="project-status"
                    style={{ backgroundColor: statusColors[project.status] }}
                  >
                    {project.status}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-role">{project.role}</p>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blocks;