import React from 'react';

// Component: CardsettingshddivItem
// Type: repetition
// Props: ["textDiv"]

const CardsettingshddivItem = ({ textDiv}) => {
  return (
    <div className="card-settings-hd-div"><div className="card-settings-hd">{textDiv || 'Upload Documents'}</div></div>
  );
};

export default CardsettingshddivItem;