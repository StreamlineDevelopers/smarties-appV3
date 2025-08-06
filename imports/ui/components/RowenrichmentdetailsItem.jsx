import React from 'react';
import ErnrichmentprgressItem from './ErnrichmentprgressItem';

const RowenrichmentdetailsItem = ({ divText, divText1 }) => {
  return (
    <div className={'row-enrichment-details'}>
      <div>{divText || 'Job Title'}</div>
      <div className={'enrichment-result-info'}>
        {divText1 || 'Senior Marketing Manager'}
      </div>
      <ErnrichmentprgressItem />
    </div>
  );
};

export default RowenrichmentdetailsItem;
