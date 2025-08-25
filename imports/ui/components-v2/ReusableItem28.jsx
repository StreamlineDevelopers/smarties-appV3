import React from 'react';

// Component: ReusableItem28
// Type: repetition
// Props: ["textDiv","textDiv1"]

const ReusableItem28 = ({ textDiv, textDiv1}) => {
  return (
    <div><div className="card-form-row-text">{textDiv || 'PCI Compliance'}</div><div className="card-form-row-description">{textDiv1 || 'When enabled, only PCI-compliant providers can be selected.'}</div></div>
  );
};

export default ReusableItem28;