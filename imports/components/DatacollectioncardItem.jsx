import React from 'react';
import ActivityhistorycardtopItem149 from './ActivityhistorycardtopItem149';

const DatacollectioncardItem = ({ src, width }) => {
  return (
    <div className="datacollection-card">
      <div className="datacollection-text">
        Customer requested a refund for the invoice discrepancy
      </div>
      <ActivityhistorycardtopItem149
        src={src || 'images/smarties-head.png'}
        width={width || 'Auto'}
      />
    </div>
  );
};

export default DatacollectioncardItem;
