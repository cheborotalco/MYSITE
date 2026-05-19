import React from 'react';
import './SectionDivider.css';

const SectionDivider = () => (
  <div className="section-divider">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="var(--color-accent)" />
    </svg>
  </div>
);

export default SectionDivider;
