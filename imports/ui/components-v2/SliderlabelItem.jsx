import React from 'react';

// Component: SliderlabelItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const SliderlabelItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="slider-label"><div>{textDiv || 'Slowest'}</div><div>{textDiv1 || 'Fastest'}</div></div>
  );
};

export default SliderlabelItem;