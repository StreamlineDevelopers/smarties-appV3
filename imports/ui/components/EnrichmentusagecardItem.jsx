import React from 'react';
import PlanusagedivtextcontentItem from './PlanusagedivtextcontentItem';
import PlanusageprogressrowItem from './PlanusageprogressrowItem';
import PlanusagedivtextcontentItem45 from './PlanusagedivtextcontentItem45';

const EnrichmentusagecardItem = ({ label, divText, label1, divText1 }) => {
  return (
    <div className={'enrichmentusage-card gap-5'}>
      <PlanusagedivtextcontentItem
        label={'Estimated Open Rate:'}
        divText={'38-52%'}
      />
      <PlanusageprogressrowItem />
      <PlanusagedivtextcontentItem45
        label={'Industry avg: 22%'}
        divText={'Your best: 58%'}
      />
    </div>
  );
};

export default EnrichmentusagecardItem;
