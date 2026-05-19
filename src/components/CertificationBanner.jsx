import React from 'react';
import './CertificationBanner.css';

const CertificationBanner = () => {
  return (
    <section id="certification" className="cert-elegant-section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <div className="cert-elegant-card">
          <div className="cert-watermark cert-watermark-center" style={{ fontSize: '18.2rem' }}>DEGREE</div>

          <div className="cert-content-wrapper">
            <div className="cert-logo-container">
              <img src="/tor-vergata-logo.svg" alt="Tor Vergata University of Rome" className="cert-official-logo" style={{ objectFit: 'contain', padding: '10px' }} />
            </div>

            <div className="cert-text-container">
              <span className="cert-label">EDUCATION //</span>
              <h2 className="cert-elegant-title">
                COMPUTER SCIENCE<br />
                <span className="text-purple">GRADUATE</span>
              </h2>
              <p className="cert-elegant-desc">
                I hold a <strong>Degree in Computer Science</strong> from the University of Rome Tor Vergata.
                My technical foundation allows me to deeply understand engineering challenges and bridge the gap between development teams and strategic business goals.
              </p>
            </div>
          </div>
        </div>

        <div className="cert-elegant-card">
          <div className="cert-watermark cert-watermark-center" style={{ fontSize: '9.5rem' }}>CERTIFICATION</div>

          <div className="cert-content-wrapper">
            <div className="cert-logo-container">
              <img src="/pmp-logo.png" alt="PMP® Certification" className="cert-official-logo" />
            </div>

            <div className="cert-text-container">
              <span className="cert-label">CERTIFICATION //</span>
              <h2 className="cert-elegant-title">
                PMP® CERTIFIED<br />
                <span className="text-purple">PROJECT MANAGER</span>
              </h2>
              <p className="cert-elegant-desc">
                I am officially <strong>PMP® Certified</strong> by the Project Management Institute.
                Structure saves projects, because improvisation always has a cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;
