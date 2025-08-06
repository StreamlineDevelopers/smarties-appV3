import React from 'react';
import Divblock36Item from './Divblock36Item';
import CardinboxtagItem from './CardinboxtagItem';

const CardcustomerhistorybotItem = ({ src, divText }) => {
  return (
    <div className={'card-customer-history-bot'}>
      <Divblock36Item
        src={'images/smarties-bot-avatar.svg'}
        divText={'Handled by Bot'}
      />
      <CardinboxtagItem />
    </div>
  );
};

export default CardcustomerhistorybotItem;
