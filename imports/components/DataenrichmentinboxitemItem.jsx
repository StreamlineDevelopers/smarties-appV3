import React from 'react';
import MessaginginboxavatarcolItem275 from './MessaginginboxavatarcolItem275';
import DataenrichmentinboxtextcontentItem from './DataenrichmentinboxtextcontentItem';

const DataenrichmentinboxitemItem = ({ src, divText }) => {
  return (
    <a href="#" className="dataenrichment-inbox-item w-inline-block">
      <MessaginginboxavatarcolItem275
        src={src || '../images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <DataenrichmentinboxtextcontentItem
        divText={divText || 'Sarah Parker'}
        divText1="Agent"
      />
    </a>
  );
};

export default DataenrichmentinboxitemItem;
