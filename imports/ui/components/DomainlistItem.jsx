import React from 'react';
import DomainitemItem from './DomainitemItem';

const DomainlistItem = ({ dataWId, dataWId1 }) => {
  return (
    <div className="domain-list">
      <DomainitemItem
        dataWId={dataWId || '5cefa7b3-c9ea-0bf4-45d3-c9b1b57787b1'}
      />
      <DomainitemItem
        dataWId={dataWId1 || '1f6da53a-f3c8-f118-6553-1dcc6524de19'}
      />
    </div>
  );
};

export default DomainlistItem;
