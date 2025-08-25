import React from 'react';

// Component: WformfailItem
// Type: repetition
// Props: []

const WformfailItem = ({ status, message = "Oops! Something went wrong while submitting the form." }) => {
  return (
    <div style={{ display: status === 'fail' ? 'block' : 'none' }} className="w-form-fail"><div>{message}</div></div>
  );
};

export default WformfailItem;