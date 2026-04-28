import React from 'react';
import './CertificationBanner.css';

const CertificationBanner = () => {
  return (
    <section id="certification" className="certification">
      <div className="container">
        <div className="banner-box">
          <div className="badge">
            <img src="/pmp-logo.png" alt="PMP Certification" className="pmp-official-logo" />
          </div>
          <div className="banner-text">
            <h2>Certified. Not improvised.<br/>Structure saves projects.<br/>Because improvisation has a cost.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;
