import React from 'react';
import MessaginginboxavatarcolItem233 from './MessaginginboxavatarcolItem233';
import DataenrichmentinboxtextcontentItem from './DataenrichmentinboxtextcontentItem';

const DataenrichmentinboxitemItem = ({ src, divText }) => {
  return (
    <a href={'#'} className={'dataenrichment-inbox-item w-inline-block'}>
      <MessaginginboxavatarcolItem233
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
