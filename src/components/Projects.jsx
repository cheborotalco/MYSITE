import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema di Gestione Progetti Multinazionale",
      description: "Implementazione di una soluzione PMO standardizzata per coordinare 50+ progetti simultanei across 3 continenti",
      role: "Project Manager Lead",
      methodology: "Agile Scaled (SAFe)",
      results: [
        "Riduzione del 30% dei tempi di delivery",
        "Miglioramento del 40% nella visibilità dello stato progetti",
        "Risk mitigation proattiva che ha evitato $2M+ in potenziali perdite"
      ],
      duration: "18 mesi",
      technologies: ["Jira Align", "MS Project", "Power BI", "Confluence"]
    },
    {
      id: 2,
      title: "Migrazione ERP su Cloud",
      description: "Trasformazione digitale completa da sistema legacy on-premise a soluzione cloud-based per azienda manifatturiera",
      role: "Senior Project Manager",
      methodology: "Waterfall con elementi Agile",
      results: [
        "Completato 2 settimane prima della scadenza",
        "Budget rispettato al 95%",
        "Adozione utente del 90% entro il primo mese"
      ],
      duration: "12 mesi",
      technologies: ["SAP S/4HANA", "AWS", "Docker", "Kubernetes"]
    },
    {
      id: 3,
      title: "Programma di Trasformazione Agile",
      description: "Coaching e implementazione di metodologie Agile in organizzazione tradizionale con 200+ dipendenti",
      role: "Agile Transformation Lead",
      methodology: "Scrum, Kanban, XP",
      results: [
        "Velocità di delivery aumentata del 50%",
        "Tempo di mercato ridotto del 35%",
        "Soddisfazione del team migliorata del 45%"
      ],
      duration: "8 mesi",
      technologies: ["Jira Software", "Miro", "VersionOne", "Slack"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS PORTFOLIO</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-role"><strong>Role:</strong> {project.role}</span>
                <span className="project-methodology"><strong>Methodology:</strong> {project.methodology}</span>
                <span className="project-duration"><strong>Duration:</strong> {project.duration}</span>
              </div>
              <div className="project-results">
                <h4>Key Results:</h4>
                <ul>
                  {project.results.map((result, index) => (
                    <li key={index} className="result-item">• {result}</li>
                  ))}
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-label">Technologies:</span>
                <span className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;