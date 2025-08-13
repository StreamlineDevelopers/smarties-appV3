import React from 'react';
import WcheckboxItem_291681b3 from './WcheckboxItem_291681b3';

const RowenrichmentItem = ({ divText }) => {
  return (
    <div className={'row-enrichment'}>
      <div>{divText || 'Job Title'}</div>
      <WcheckboxItem_291681b3 />
    </div>
  );
};

export default RowenrichmentItem;
