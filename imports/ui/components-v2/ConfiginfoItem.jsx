import React from 'react';

// Component: ConfiginfoItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const ConfiginfoItem = ({ textDiv, textDiv1, onClick }) => {
  return (
    <div style={{ cursor: onClick ? 'pointer' : 'default' }} onClick={onClick} className="config-info"><div className="file-info-label">{textDiv || 'Name'}</div><div className="file-info-data">{textDiv1 || 'Configuration 1'}</div></div>
  );
};

export default ConfiginfoItem;