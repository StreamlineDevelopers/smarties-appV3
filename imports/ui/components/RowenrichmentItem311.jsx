import React from 'react';
import RowenrichmentdetailsItem from './RowenrichmentdetailsItem';
import WcheckboxItem289 from './WcheckboxItem289';

const RowenrichmentItem311 = ({ divText, divText1 }) => {
  return (
    <div className={'row-enrichment'}>
      <RowenrichmentdetailsItem
        divText={'Job Title'}
        divText1={'Senior Marketing Manager'}
      />
      <WcheckboxItem289 />
    </div>
  );
};

export default RowenrichmentItem311;
