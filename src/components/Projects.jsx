import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Multinational Project Management System",
      description: "Implementation of a standardized PMO solution to coordinate 50+ simultaneous projects across 3 continents.",
      duration: "18 months"
    },
    {
      id: 2,
      title: "Cloud ERP Migration",
      description: "Complete digital transformation from on-premise legacy system to cloud-based solution for a manufacturing company.",
      duration: "12 months"
    },
    {
      id: 3,
      title: "Agile Transformation Program",
      description: "Coaching and implementation of Agile methodologies in a traditional organization with 20 employees.",
      duration: "8 months"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-duration"><strong>Duration:</strong> {project.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
