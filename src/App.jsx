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
  // Controlla se l'URL contiene il trucco segreto (es: ?admin=true)
  const urlParams = new URLSearchParams(window.location.search);
  const isSecretPreview = urlParams.get('admin') === 'true'; 
  
  // Il sito è in WIP a meno che non si stia usando la scorciatoia segreta
  const isWIP = true && !isSecretPreview; 

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
