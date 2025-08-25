import React from 'react';

// Component: FileinforowItem53
// Type: repetition
// Props: ["textDiv","textDiv1"]

const FileinforowItem53 = ({ textDiv, textDiv1}) => {
  return (
    <div className="file-info-row"><div className="file-info-label">{textDiv || 'File ID'}</div><div className="file-info-data">{textDiv1 || 'FL-123456677'}</div></div>
  );
};

export default FileinforowItem53;