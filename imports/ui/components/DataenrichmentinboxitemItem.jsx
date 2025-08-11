import React from 'react';
import MessaginginboxavatarcolItem_b1a26143 from './MessaginginboxavatarcolItem_b1a26143';
import DataenrichmentinboxtextcontentItem from './DataenrichmentinboxtextcontentItem';

const DataenrichmentinboxitemItem = ({ src, divText }) => {
  return (
    <a href={'#'} className={'dataenrichment-inbox-item w-inline-block'}>
      <MessaginginboxavatarcolItem_b1a26143
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <DataenrichmentinboxtextcontentItem
        divText={'Sarah Parker'}
        divText1={'Agent'}
      />
    </a>
  );
};

export default DataenrichmentinboxitemItem;
