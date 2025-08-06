import React from 'react';
import WcheckboxItem284 from './WcheckboxItem284';

const RowenrichmentItem = ({ divText }) => {
  return (
    <div className={'row-enrichment'}>
      <div>{divText || 'Job Title'}</div>
      <WcheckboxItem284 />
    </div>
  );
};

export default RowenrichmentItem;
