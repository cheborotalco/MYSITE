import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="wip-content">
        <div className="wip-status">
          <span className="pulsing-dot"></span>
          <span>SYSTEM UPDATE</span>
        </div>
        <h1 className="wip-title">
          WORK IN <br />
          <span className="wip-purple">PROGRESS</span>
        </h1>
        <p className="wip-subtitle">ALISA CHEBOTARENKO • PROJECT MANAGER</p>
      </div>
    </div>
  );
};

export default ComingSoon;
