import React from 'react';
import ActivityhistorycardtopItem_68f81b4c from './ActivityhistorycardtopItem_68f81b4c';

const DatacollectioncardItem = ({ src, width }) => {
  return (
    <div className={'datacollection-card'}>
      <div className={'datacollection-text'}>
        {'Customer requested a refund for the invoice discrepancy'}
      </div>
      <ActivityhistorycardtopItem_68f81b4c
        src={'images/smarties-head.png'}
        width={'Auto'}
      />
    </div>
  );
};

export default DatacollectioncardItem;
