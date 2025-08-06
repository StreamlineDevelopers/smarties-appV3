import React from 'react';
import CardformrowleftItem280 from './CardformrowleftItem280';
import SwitchdivItem from './SwitchdivItem';

const DataenrichmentformrowItem = ({ divText }) => {
  return (
    <div className="dataenrichment-formrow">
      <CardformrowleftItem280 divText={divText || 'IP Address'} />
      <SwitchdivItem />
    </div>
  );
};

export default DataenrichmentformrowItem;
