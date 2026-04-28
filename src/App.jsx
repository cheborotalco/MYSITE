import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import CertificationBanner from './components/CertificationBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  const isWIP = true; // Imposta a false quando vuoi mostrare il sito completo

  if (isWIP) {
    return <ComingSoon />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Philosophy />
        <CertificationBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
