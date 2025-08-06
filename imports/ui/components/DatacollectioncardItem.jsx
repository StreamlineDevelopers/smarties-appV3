import React from 'react';
import ActivityhistorycardtopItem126 from './ActivityhistorycardtopItem126';

const DatacollectioncardItem = ({ src, width }) => {
  return (
    <div className={'datacollection-card'}>
      <div className={'datacollection-text'}>
        Customer requested a refund for the invoice discrepancy
      </div>
      <ActivityhistorycardtopItem126
        src={'images/smarties-head.png'}
        width={'Auto'}
      />
    </div>
  );
};

export default DatacollectioncardItem;
