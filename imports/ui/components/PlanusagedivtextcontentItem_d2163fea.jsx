import React from 'react';

const PlanusagedivtextcontentItem_d2163fea = ({ label, divText }) => {
  return (
    <div className={'plan-usage-div-textcontent'}>
      <div className={'planusage-label'}>{label || 'Current Usage'}</div>
      <div className={'planusage-data'}>{divText || '7/50 today'}</div>
    </div>
  );
};

export default PlanusagedivtextcontentItem_d2163fea;
