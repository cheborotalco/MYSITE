import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('alisa.1chebotarenko@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

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
              <a
                href="mailto:alisa.1chebotarenko@gmail.com"
                className="contact-email-link"
                onClick={handleCopy}
              >
                alisa.1chebotarenko@gmail.com
                <span className="copy-icon">📋</span>
                {copied && <span className="copy-success">Copied!</span>}
              </a>
            </div>
          </div>

          <div className="contact-actions-row">
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
