import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-dark-section">
      <div className="about-watermark">ABOUT</div>

      <div className="about-container container">

        <div className="about-left">
          <p className="about-intro-label">INTRODUCTION</p>
          <h2 className="about-main-title"><span className="title-white">ABOUT</span> <span className="title-purple">ME</span></h2>
          <h3 className="about-quote">
            I VIEW METHODOLOGY NOT AS A <span className="text-purple">CONSTRAINT</span>, BUT AS A FRAMEWORK FOR <span className="text-purple">CREATIVE</span> PROBLEM-SOLVING.
          </h3>
          <div className="about-divider-left"></div>
        </div>

        <div className="about-right-card">
          <div className="about-description">
            <p>I am a 26-year-old IT Project Manager with a <strong className="text-purple">Computer Science degree</strong> and a <strong className="text-purple">Master in Project Management</strong>, supported by <strong className="text-purple">PMP CERTIFICATION</strong>. My background allows me to combine technical expertise with strategic thinking, organization, and effective execution.</p>
            <br />
            <p>I am fluent in Italian, Russian, and English, which helps me work confidently in international and multicultural environments. I am naturally curious, proactive, and motivated by new challenges. I thrive in dynamic settings surrounded by talented people, where collaboration and innovation lead to meaningful results.</p>
            <br />
            <p>I approach every project with energy, adaptability, and a strong results-driven mindset, always looking for opportunities to grow, improve, and create value.</p>
          </div>

          <div className="card-divider"></div>

          <div className="card-two-cols">
            <div className="card-col">
              <h4 className="col-title purple-title">MY MISSION</h4>
              <p className="col-text">To deliver results that aren't just on time and on budget, but fundamentally elevate the organization's capabilities and reach.</p>
            </div>
            <div className="card-col">
              <h4 className="col-title orange-title">MY APPROACH</h4>
              <p className="col-text">Brutalist clarity. Every project phase is defined with architectural precision, eliminating ambiguity and driving momentum.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
