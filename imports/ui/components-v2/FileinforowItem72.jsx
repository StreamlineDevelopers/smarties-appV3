import React from 'react';

// Component: FileinforowItem72
// Type: repetition
// Props: ["textDiv","textDiv1"]

const FileinforowItem72 = ({ textDiv, textDiv1}) => {
  return (
    <div className="file-info-row"><div className="file-info-label">{textDiv || 'Knowledge Base ID'}</div><div className="file-info-data">{textDiv1 || '97dcd1234567'}</div></div>
  );
};

export default FileinforowItem72;