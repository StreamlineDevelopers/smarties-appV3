import React from 'react';

const Divblock20Item = ({ label }) => {
  return (
    <div className="div-block-20">
      <div className="sidebar-journey-card-label">
        {label || 'Birthday Surprise Sent'}
      </div>
      <div className="sidebar-journey-card-duration">
        June 12, 2023 • 2:45 PM
      </div>
    </div>
  );
};

export default Divblock20Item;
