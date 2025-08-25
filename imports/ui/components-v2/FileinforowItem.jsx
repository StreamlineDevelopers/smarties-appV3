import React from 'react';

// Component: FileinforowItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const FileinforowItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="file-info-row"><div className="file-info-label">{textDiv || 'Member Since'}</div><div className="file-info-data">{textDiv1 || 'March 2023'}</div></div>
  );
};

export default FileinforowItem;