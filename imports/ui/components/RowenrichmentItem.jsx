import React from 'react';
import WcheckboxItem327 from './WcheckboxItem327';

const RowenrichmentItem = ({ divText }) => {
  return (
    <div className="row-enrichment">
      <div>{divText || 'Job Title'}</div>
      <WcheckboxItem327 />
    </div>
  );
};

export default RowenrichmentItem;
