import React from 'react';
import PlanusagedivtextcontentItem279 from './PlanusagedivtextcontentItem279';
import PlanusageprogressrowItem from './PlanusageprogressrowItem';

const EnrichmentusagecardItem282 = ({ label, divText }) => {
  return (
    <div className="enrichmentusage-card">
      <PlanusagedivtextcontentItem279
        label={label || 'Today'}
        divText={divText || '8 / 25'}
      />
      <PlanusageprogressrowItem />
    </div>
  );
};

export default EnrichmentusagecardItem282;
