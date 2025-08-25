import React from 'react';

// Component: WformdoneItem
// Type: repetition
// Props: []

const WformdoneItem = ({ status = "idle" }) => {
  return (
    <div style={{ display: status === 'success' ? 'block' : 'none' }} className="w-form-done"><div>Thank you! Your submission has been received!</div></div>
  );
};

export default WformdoneItem;