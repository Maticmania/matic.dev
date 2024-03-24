import React from 'react';
import '../css/style.css'; // Import your CSS file for styling

const AnimatedCircleLogo = () => {
  return (
    <div className="logo-container">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" className="circle" />
        <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" className="logo-text">
          YjhuhjkhjkhjjhjkhkhTextour Logo 
        </text>
      </svg>
    </div>
  );
};

export default AnimatedCircleLogo;
