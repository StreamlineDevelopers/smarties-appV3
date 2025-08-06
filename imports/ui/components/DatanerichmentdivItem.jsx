import React from 'react';
import BtndataenrichmentItem from './BtndataenrichmentItem';

const DatanerichmentdivItem = ({ dataWId }) => {
  return (
    <div className={'datanerichment-div'}>
      <BtndataenrichmentItem dataWId={'170a6bed-e932-1987-cb24-7f7bc570b353'} />
      <div className={'dataenrichment-description'}>
        Auto-populate missing fields with external data
      </div>
    </div>
  );
};

export default DatanerichmentdivItem;
