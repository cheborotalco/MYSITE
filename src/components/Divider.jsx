import React from 'react';
import './Divider.css';

const Divider = () => {
  return (
    <div className="custom-divider">
      <div className="line"></div>
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Divider;