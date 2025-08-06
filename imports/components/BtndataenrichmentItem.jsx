import React from 'react';
import BtndataenrichmentleftItem from './BtndataenrichmentleftItem';
import BtnaipowertagItem from './BtnaipowertagItem';

const BtndataenrichmentItem = ({ dataWId }) => {
  return (
    <a
      data-w-id={dataWId || '170a6bed-e932-1987-cb24-7f7bc570b353'}
      href="#"
      target="_blank"
      className="btn-dataenrichment"
    >
      <BtndataenrichmentleftItem />
      <BtnaipowertagItem />
    </a>
  );
};

export default BtndataenrichmentItem;
