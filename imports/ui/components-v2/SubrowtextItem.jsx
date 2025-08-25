import React from 'react';

// Component: SubrowtextItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const SubrowtextItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="subrow-text"><div className="card-form-row-text">{textDiv || 'Background Denoising Enabled'}</div><div className="card-form-row-description">{textDiv1 || 'Filter background noise while the user is talking.'}</div></div>
  );
};

export default SubrowtextItem;