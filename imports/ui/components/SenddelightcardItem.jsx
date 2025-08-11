import React from 'react';
import ActivityfeedtextcontentItem_b8a265e5 from './ActivityfeedtextcontentItem_b8a265e5';

const SenddelightcardItem = ({ title, itemText }) => {
  return (
    <a href={'#'} className={'senddelight-card w-inline-block'}>
      <div className={'card-icon bg-blue'}>
        <img
          src={'../images/smarties-loyalty-icon-08.svg'}
          loading={'lazy'}
          width={'20'}
          height={'20'}
          alt={''}
          className={'icon-style1'}
        />
      </div>
      <ActivityfeedtextcontentItem_b8a265e5
        title={'Gift Free Dessert'}
        itemText={'Send dessert voucher for next visit'}
      />
    </a>
  );
};

export default SenddelightcardItem;
