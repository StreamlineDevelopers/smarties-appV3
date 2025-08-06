import React from 'react';

const PlanusagedivtextcontentItem = ({ label, divText }) => {
  return (
    <div className="plan-usage-div-textcontent">
      <div className="planusage-label">{label || 'Estimated Open Rate:'}</div>
      <div className="planusage-data text-roange">{divText || '38-52%'}</div>
    </div>
  );
};

export default PlanusagedivtextcontentItem;
