import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Multinational Project Management System",
      description: "Implementation of a standardized PMO solution to coordinate 50+ simultaneous projects across 3 continents.",
      results: [
        "30% reduction in delivery times",
        "40% improvement in project status visibility",
        "Proactive risk mitigation avoiding $2M+ in potential losses"
      ],
      duration: "18 months"
    },
    {
      id: 2,
      title: "Cloud ERP Migration",
      description: "Complete digital transformation from on-premise legacy system to cloud-based solution for a manufacturing company.",
      results: [
        "Completed 2 weeks ahead of schedule",
        "Delivered at 95% of the allocated budget",
        "90% user adoption within the first month"
      ],
      duration: "12 months"
    },
    {
      id: 3,
      title: "Agile Transformation Program",
      description: "Coaching and implementation of Agile methodologies in a traditional organization with 20 employees.",
      results: [
        "50% increase in delivery speed",
        "35% reduction in time-to-market",
        "45% improvement in team satisfaction"
      ],
      duration: "8 months"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">LATEST PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-duration"><strong>Duration:</strong> {project.duration}</span>
              </div>
              <div className="project-results">
                <h4>Key Results:</h4>
                <ul>
                  {project.results.map((result, index) => (
                    <li key={index} className="result-item">{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;