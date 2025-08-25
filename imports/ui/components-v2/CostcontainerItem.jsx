import React from 'react';

// Component: CostcontainerItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const CostcontainerItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="cost-container"><div className="cost-info"><div className="cost-label">{textDiv || 'Cost'}</div><div className="cost-label">{textDiv1 || '~$0.08 /min'}</div></div><img width="407" height="7" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cb4ea107b645038482152_Latency-Bar.svg" loading="lazy" className="cost-bar" /></div>
  );
};

export default CostcontainerItem;