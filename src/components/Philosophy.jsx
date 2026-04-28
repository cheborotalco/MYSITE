import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <h2 className="section-title">THE MINDSET</h2>
        <div className="philosophy-content">
          <p className="statement">
            PROJECT MANAGEMENT IS NOT ABOUT FILLING EXCEL SHEETS. IT'S ABOUT ALIGNING <span className="highlight">PEOPLE</span>, <span className="highlight">TIME</span>, AND <span className="highlight">BUDGET</span> TOWARDS A SINGLE GOAL.
          </p>
          <div className="philosophy-details">
            <p>I combine the structural rigor of the PMP framework with the extreme adaptability of Agile methodologies. I build systems that prevent chaos rather than managing it when it happens. Because fixing mistakes is expensive; preventing them is leadership.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
