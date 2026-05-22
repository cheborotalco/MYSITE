import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { number: '01.', label: 'About', href: '#about' },
    { number: '02.', label: 'Competencies', href: '#skills' },
    { number: '03.', label: 'Experience', href: '#projects' },
    { number: '04.', label: 'Mindset', href: '#philosophy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen);
    return () => document.body.classList.remove('nav-menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar-tech ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-tech-inner">
          <a href="#" className="nav-logo-tech" onClick={closeMenu}>
            ALISA<span className="text-purple">.</span>C
            <span className="tech-blink">_</span>
          </a>
          
          <nav className="nav-links-tech">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link-tech">
                <span>{item.number}</span> {item.label}
              </a>
            ))}
          </nav>
          
          <a href="#contact" className="btn-tech">GET IN TOUCH</a>

          <button
            className="nav-toggle-tech"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav className="mobile-menu-tech" id="mobile-menu" aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav-link-tech" onClick={closeMenu}>
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="mobile-btn-tech" onClick={closeMenu}>GET IN TOUCH</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
