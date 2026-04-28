import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="footer-content">
          <p className="logo">ALISA<span className="text-accent">.</span>PMP</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Alisa Chebotarenko. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
