import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy-kinetic">
      <div className="philosophy-watermark">MINDSET</div>
      <div className="kinetic-container">
        <h2 className="kinetic-label">/// THE MINDSET</h2>
        
        <div className="kinetic-manifesto">
          <h3 className="manifesto-huge">
            PROJECT MANAGEMENT<br/>IS <span className="text-outline">NOT</span> ABOUT<br/>FILLING EXCEL SHEETS.
          </h3>
          
          <div className="manifesto-aligning">
            <span className="aligning-text">IT'S ABOUT ALIGNING</span>
            <div className="kinetic-pills">
              <span className="kinetic-pill">PEOPLE</span>
              <span className="kinetic-pill">TIME</span>
              <span className="kinetic-pill">BUDGET</span>
            </div>
            <span className="aligning-text">TOWARDS A SINGLE GOAL.</span>
          </div>
        </div>

        <div className="kinetic-briefing">
          <div className="briefing-corner top-left"></div>
          <div className="briefing-corner top-right"></div>
          <div className="briefing-corner bottom-left"></div>
          <div className="briefing-corner bottom-right"></div>
          <p>
            I combine the structural rigor of the PMP framework with the extreme adaptability of Agile methodologies. I build systems that prevent chaos rather than managing it when it happens. Because fixing mistakes is expensive; preventing them is leadership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
