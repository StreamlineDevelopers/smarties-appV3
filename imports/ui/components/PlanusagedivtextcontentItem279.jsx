import React from 'react';

const PlanusagedivtextcontentItem279 = ({ label, divText }) => {
  return (
    <div className="plan-usage-div-textcontent">
      <div className="planusage-label">{label || 'Current Usage'}</div>
      <div className="planusage-data">{divText || '7/50 today'}</div>
    </div>
  );
};

export default PlanusagedivtextcontentItem279;
