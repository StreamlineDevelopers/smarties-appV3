import React from 'react';

// Component: CardformrowItem
// Type: repetition
// Props: ["src","textDiv","textDiv1"]

const CardformrowItem = ({ src, textDiv, textDiv1}) => {
  return (
    <div className="card-form-row"><div className="card-form-row-left"><div className="smarties-icon-card-row"><img width="34" height="34" alt="" src={src || "https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfc7e46f2135cf7a6b901_smarties-icon-sound.svg"} loading="lazy" /></div><div className="subrow-text"><div className="card-form-row-text">{textDiv || 'Background Denoising Enabled'}</div><div className="card-form-row-description">{textDiv1 || 'Filter background noise while the user is talking.'}</div></div></div><div className="switch-div"><div className="switch-control"></div></div></div>
  );
};

export default CardformrowItem;