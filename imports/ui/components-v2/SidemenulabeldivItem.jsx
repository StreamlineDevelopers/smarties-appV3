import React from 'react';

// Component: SidemenulabeldivItem
// Type: repetition
// Props: ["textDiv"]

const SidemenulabeldivItem = ({ textDiv}) => {
  return (
    <div className="sidemenu-label-div"><div className="sidemenu-label">{textDiv || 'OVERVIEW'}</div></div>
  );
};

export default SidemenulabeldivItem;