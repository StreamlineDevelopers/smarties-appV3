import React from 'react';

const PlanusagedivtextcontentItem242 = ({ label, divText }) => {
  return (
    <div className="plan-usage-div-textcontent">
      <div className="planusage-label">{label || 'Engagement Score'}</div>
      <div className="planusage-data text-roange">{divText || '92%'}</div>
    </div>
  );
};

export default PlanusagedivtextcontentItem242;
