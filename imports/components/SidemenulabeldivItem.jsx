import React from 'react';

const SidemenulabeldivItem = ({ label }) => {
  return (
    <div className="sidemenu-label-div">
      <div className="sidemenu-label">{label || 'OVERVIEW'}</div>
    </div>
  );
};

export default SidemenulabeldivItem;
