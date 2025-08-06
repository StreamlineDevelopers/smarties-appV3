import React from 'react';
import PlanusagedivtextcontentItem from './PlanusagedivtextcontentItem';
import PlanusageprogressrowItem from './PlanusageprogressrowItem';
import PlanusagedivtextcontentItem51 from './PlanusagedivtextcontentItem51';

const EnrichmentusagecardItem = ({ label, divText, label1, divText1 }) => {
  return (
    <div className="enrichmentusage-card gap-5">
      <PlanusagedivtextcontentItem
        label={label || 'Estimated Open Rate:'}
        divText={divText || '38-52%'}
      />
      <PlanusageprogressrowItem />
      <PlanusagedivtextcontentItem51
        label={label1 || 'Industry avg: 22%'}
        divText={divText1 || 'Your best: 58%'}
      />
    </div>
  );
};

export default EnrichmentusagecardItem;
