import React from 'react';
import RowenrichmentdetailsItem from './RowenrichmentdetailsItem';
import WcheckboxItem332 from './WcheckboxItem332';

const RowenrichmentItem355 = ({ divText, divText1 }) => {
  return (
    <div className="row-enrichment">
      <RowenrichmentdetailsItem
        divText={divText || 'Job Title'}
        divText1={divText1 || 'Senior Marketing Manager'}
      />
      <WcheckboxItem332 />
    </div>
  );
};

export default RowenrichmentItem355;
