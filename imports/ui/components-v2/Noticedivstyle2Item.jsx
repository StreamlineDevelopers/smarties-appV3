import React from 'react';

// Component: Noticedivstyle2Item
// Type: repetition
// Props: ["textDiv"]

const Noticedivstyle2Item = ({ textDiv}) => {
  return (
    <div className="notice-div-style2 bg-grey"><div className="notice-text">{textDiv || 'No properties configured. Click "Add Property" to add your first propery.'}</div></div>
  );
};

export default Noticedivstyle2Item;