import React from 'react';
import ActivityfeedtextcontentItem202 from './ActivityfeedtextcontentItem202';

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
      <ActivityfeedtextcontentItem202
        title={'Gift Free Dessert'}
        itemText={'Send dessert voucher for next visit'}
      />
    </a>
  );
};

export default SenddelightcardItem;
