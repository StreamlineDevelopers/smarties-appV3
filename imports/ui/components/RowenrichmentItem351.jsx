import React from 'react';
import RowenrichmentlabelItem from './RowenrichmentlabelItem';
import WcheckboxItem327 from './WcheckboxItem327';

const RowenrichmentItem351 = ({ divText }) => {
  return (
    <div className="row-enrichment disabled">
      <RowenrichmentlabelItem divText={divText || 'Company Size'} />
      <WcheckboxItem327 />
    </div>
  );
};

export default RowenrichmentItem351;
