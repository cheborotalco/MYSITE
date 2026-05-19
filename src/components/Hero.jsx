import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && window.scrollY < window.innerHeight * 1.5) {
        heroRef.current.style.setProperty('--scroll', window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger iniziale

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero-container">

        <div className="text-block">

          <div className="line-1">
            <h1 className="text-huge m-0" style={{ transform: 'translateX(calc(var(--scroll, 0) * -0.6px))', transition: 'transform 0.1s ease-out' }}>ALISA</h1>
            <div className="subtitle-group">
              <span className="text-purple method-text">Italian, English & Russian speaking</span>
              <span className="text-orange method-text">Tech background.</span>
              <span className="text-orange method-text">Multilingual communication.</span>
              <span className="text-orange method-text">International projects.</span>
            </div>
          </div>

          <div className="line-2">
            <span className="text-purple based-text">Remote-friendly.<br />Often on the move.</span>
            <h1 className="text-huge m-0 chebo-text" style={{ transform: 'translateX(calc(var(--scroll, 0) * 0.6px))', transition: 'transform 0.1s ease-out' }}>CHEBOTARENKO</h1>
          </div>

          <div className="line-3">
            <h1 className="text-huge outline-text m-0">PROJECT MANAGER</h1>
          </div>

        </div>

        <div className="circles-container">
          <div className="circle circle-purple">
            <span>LET'S TALK</span>
          </div>
          <div className="circle circle-image">
            <img src="/alisa.jpg" alt="Alisa Chebotarenko" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
