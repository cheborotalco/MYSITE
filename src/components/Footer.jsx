import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-elegant">
      <div className="container">
        <div className="footer-content">
          <div className="footer-bottom">

            <p className="copyright">
              &copy; {new Date().getFullYear()} Alisa Chebotarenko. All rights reserved.
            </p>
            <div className="footer-info">
              <p className="piva">P.IVA: 01820290086</p>
            </div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#skills">Competencies</a>
              <a href="#projects">Projects</a>
              <a href="#philosophy">Mindset</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
