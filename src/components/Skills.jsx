import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    "AGILE & WATERFALL EXPERTISE",
    "STAKEHOLDER COMMUNICATION",
    "BUDGET & RESOURCE ALLOCATION",
    "RISK MANAGEMENT & MITIGATION",
    "CROSS-FUNCTIONAL TEAM LEADERSHIP",
    "KPI TRACKING & REPORTING"
  ];

  return (
    <section id="skills" className="skills-light-section">
      <div className="container">
        <h2 className="skills-main-title">
          <span className="title-black">CORE</span><br />
          <span className="title-purple">COMPETENCIES</span>
        </h2>
        <div className="skills-brutalist-grid">
          {skills.map((skill, index) => (
            <div key={index} className="brutalist-card">
              <span className="card-watermark">0{index + 1}</span>
              <div className="card-content">
                <span className="card-number">0{index + 1} //</span>
                <h3 className="card-skill-name">{skill}</h3>
                <div className="card-arrow">&rarr;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
