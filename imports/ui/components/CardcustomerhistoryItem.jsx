import React from 'react';
import CardcustomerhistoryhdItem from './CardcustomerhistoryhdItem';
import HistoryconvonameItem from './HistoryconvonameItem';
import Divblock35Item from './Divblock35Item';
import CardcustomerhistorybotItem from './CardcustomerhistorybotItem';

const CardcustomerhistoryItem = ({}) => {
  return (
    <div className={'card-customer-history'}>
      <CardcustomerhistoryhdItem />
      <HistoryconvonameItem />
      <Divblock35Item />
      <CardcustomerhistorybotItem
        src={'images/smarties-avatar-3.svg'}
        divText={'Mike Chen'}
      />
    </div>
  );
};

export default CardcustomerhistoryItem;
