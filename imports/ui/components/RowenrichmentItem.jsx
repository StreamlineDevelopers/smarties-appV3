import React from 'react';
import WcheckboxItem_795e2775 from './WcheckboxItem_795e2775';

const RowenrichmentItem = ({ divText }) => {
  return (
    <div className={'row-enrichment'}>
      <div>{divText || 'Job Title'}</div>
      <WcheckboxItem_795e2775 />
    </div>
  );
};

export default RowenrichmentItem;
