import React from 'react';
import TagpremiumItem from './TagpremiumItem';

const RowenrichmentlabelItem = ({ divText }) => {
  return (
    <div className={'row-enrichment-label'}>
      <div>{divText || 'Company Size'}</div>
      <TagpremiumItem />
    </div>
  );
};

export default RowenrichmentlabelItem;
