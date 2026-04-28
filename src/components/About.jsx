import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-dark-section">
      <div className="about-watermark">01</div>
      
      <div className="about-container container">
        
        <div className="about-left">
          <p className="about-intro-label">INTRODUCTION</p>
          <h2 className="about-main-title">
            <span className="title-white">CHI</span>
            <span className="title-purple">SONO</span>
          </h2>
          <h3 className="about-quote">
            I VIEW METHODOLOGY NOT AS A <span className="text-purple">CONSTRAINT</span>, BUT AS A FRAMEWORK FOR <span className="text-purple">CREATIVE</span> PROBLEM-SOLVING.
          </h3>
          <div className="about-divider-left"></div>
        </div>
        
        <div className="about-right-card">
          <p className="about-description">
            Mi chiamo Alisa Chebotarenko, ho 26 anni, sono laureata in informatica, poi ho fatto un master in project management finché poi non ho preso la certificazione. Parlo italiano, russo, inglese. Sono una persona che ama mettersi in gioco ed è stimolata da ambienti di persone in gamba.
          </p>
          
          <div className="card-divider"></div>
          
          <div className="card-two-cols">
            <div className="card-col">
              <h4 className="col-title purple-title">THE MISSION</h4>
              <p className="col-text">To deliver results that aren't just on time and on budget, but fundamentally elevate the organization's capabilities and reach.</p>
            </div>
            <div className="card-col">
              <h4 className="col-title orange-title">THE APPROACH</h4>
              <p className="col-text">Brutalist clarity. Every project phase is defined with architectural precision, eliminating ambiguity and driving momentum.</p>
            </div>
          </div>
          
          <a href="#" className="read-profile-link">READ FULL PROFILE &rarr;</a>
        </div>
        
      </div>
    </section>
  );
};

export default About;
