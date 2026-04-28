import React from 'react';
import './Contact.css';
import { Mail, Globe, MapPin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact bg-alt">
      <div className="container">
        <h2 className="section-title">Mettiti in <span>Contatto</span></h2>
        
        <div className="contact-wrapper glass">
          <div className="contact-info text-center">
            <h3>Pronto per il prossimo progetto?</h3>
            <p className="contact-subtitle">
              Se stai cercando una Project Manager strutturata per guidare il tuo team, o se vuoi semplicemente scambiare due chiacchiere sulle metodologie, scrivimi!
            </p>
            
            <div className="contact-links d-flex flex-column align-center gap-1">
              <a href="mailto:hello@alisa-pmp.com" className="contact-item d-flex align-center gap-1">
                <Mail className="text-primary" />
                <span>hello@alisa-pmp.com</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact-item d-flex align-center gap-1">
                <Globe className="text-primary" />
                <span>linkedin.com/in/alisachebotarenko</span>
              </a>
              <div className="contact-item d-flex align-center gap-1">
                <MapPin className="text-primary" />
                <span>Disponibile per progetti da remoto / Ibrido</span>
              </div>
            </div>
            
            <button className="btn btn-primary d-flex align-center gap-1" style={{ margin: '2rem auto 0' }}>
              <Download size={18} /> Scarica CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
