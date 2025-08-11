import React from 'react';
import PlanusagedivtextcontentItem_d2163fea from './PlanusagedivtextcontentItem_d2163fea';
import PlanusageprogressrowItem from './PlanusageprogressrowItem';

const EnrichmentusagecardItem_f913bdb2 = ({ label, divText }) => {
  return (
    <div className={'enrichmentusage-card'}>
      <PlanusagedivtextcontentItem_d2163fea
        label={'Today'}
        divText={'8 / 25'}
      />
      <PlanusageprogressrowItem />
    </div>
  );
};

export default EnrichmentusagecardItem_f913bdb2;
