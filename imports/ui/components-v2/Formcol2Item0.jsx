import React from 'react';

// Component: Formcol2Item0
// Type: repetition
// Props: ["textDiv","textDiv1"]

const Formcol2Item0 = ({ textDiv, textDiv1}) => {
  return (
    <div className="formcol2"><div className="file-info-row"><div className="file-info-label">{textDiv || 'Member Since'}</div><div className="file-info-data">{textDiv1 || 'March 2023'}</div></div></div>
  );
};

export default Formcol2Item0;