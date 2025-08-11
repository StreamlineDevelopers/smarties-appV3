import React from 'react';

const PlanusagedivtextcontentItem_a55a9ba3 = ({ label, divText }) => {
  return (
    <div className={'plan-usage-div-textcontent'}>
      <div className={'planusage-label small'}>
        {label || 'Industry avg: 22%'}
      </div>
      <div className={'planusage-data small'}>
        {divText || 'Your best: 58%'}
      </div>
    </div>
  );
};

export default PlanusagedivtextcontentItem_a55a9ba3;
