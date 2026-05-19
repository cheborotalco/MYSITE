import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-dark-section">
      <div className="contact-watermark">CONTACT</div>
      <div className="container contact-split">
        <div className="contact-header-side">
          <h2 className="text-huge title-white m-0">GET IN</h2>
          <h2 className="text-huge outline-text-light m-0">TOUCH</h2>
        </div>

        <div className="contact-info-side">
          <div className="info-main-row">
            <div className="info-text-group">
              <span className="contact-label">LET'S TALK //</span>
              <h2 className="contact-phone-bold">+39 327 735 7263</h2>
              <a href="mailto:alisa.1chebotarenko@gmail.com" className="contact-email-link">
                alisa.1chebotarenko@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-actions-row">
            <a href="https://wa.me/393277357263" target="_blank" rel="noreferrer" className="circle-btn-elegant">
              <span>WHATSAPP</span>
            </a>
            <a href="https://t.me/alisachebotarenko" target="_blank" rel="noreferrer" className="circle-btn-elegant">
              <span>TELEGRAM</span>
            </a>
            <a href="https://linkedin.com/in/alisachebotarenko" target="_blank" rel="noreferrer" className="circle-btn-elegant">
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
