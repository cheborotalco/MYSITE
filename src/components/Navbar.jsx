import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-tech ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-tech-inner">
        <a href="#" className="nav-logo-tech">
          ALISA<span className="text-purple">.</span>C
          <span className="tech-blink">_</span>
        </a>
        
        <nav className="nav-links-tech">
          <a href="#about" className="nav-link-tech"><span>01.</span> About</a>
          <a href="#skills" className="nav-link-tech"><span>02.</span> Competencies</a>
          <a href="#projects" className="nav-link-tech"><span>03.</span> Projects</a>
          <a href="#philosophy" className="nav-link-tech"><span>04.</span> Mindset</a>
        </nav>
        
        <a href="#contact" className="btn-tech">GET IN TOUCH</a>
      </div>
    </header>
  );
};

export default Navbar;
