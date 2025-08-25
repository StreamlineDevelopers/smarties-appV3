import React from 'react';

// Component: Divblock12Item
// Type: repetition
// Props: ["textDiv","textDiv1"]

const Divblock12Item = ({ textDiv, textDiv1}) => {
  return (
    <div className="div-block-12"><div className="card-form-row-text">{textDiv || 'Timeout'}</div><div className="card-form-row-description">{textDiv1 || 'The number of seconds to wait before processing the user\'s keypad input. Set to 0 to only wait for a delimiter.'}</div></div>
  );
};

export default Divblock12Item;