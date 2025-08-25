import React from 'react';

// Component: CostinfoItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const CostinfoItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="cost-info"><div className="cost-label">{textDiv || 'Cost'}</div><div className="cost-label">{textDiv1 || '~$0.08 /min'}</div></div>
  );
};

export default CostinfoItem;