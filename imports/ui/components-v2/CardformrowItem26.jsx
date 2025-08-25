import React from 'react';

// Component: CardformrowItem26
// Type: repetition
// Props: ["src","textDiv","textDiv1"]

const CardformrowItem26 = ({ src, textDiv, textDiv1}) => {
  return (
    <div className="card-form-row"><div className="card-form-row-left"><div className="smarties-icon-card-row"><img width="34" height="34" alt="" src={src || "https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18f667ce45112f5bf4_smarties-icon-card.svg"} loading="lazy" /></div><div><div className="card-form-row-text">{textDiv || 'PCI Compliance'}</div><div className="card-form-row-description">{textDiv1 || 'When enabled, only PCI-compliant providers can be selected.'}</div></div></div><div className="switch-div"><div className="switch-control"></div></div></div>
  );
};

export default CardformrowItem26;