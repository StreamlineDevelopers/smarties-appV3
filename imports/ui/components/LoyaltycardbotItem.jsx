import React from 'react';
import LoyaltycardperskrowItem from './LoyaltycardperskrowItem';

const LoyaltycardbotItem = ({ divText, divText1, divText2 }) => {
  return (
    <div className={'loyalty-card-bot'}>
      <div className={'loyalty-card-perkslaabel'}>Top Perks</div>
      <LoyaltycardperskrowItem
        divText={'Free Shipping'}
        divText1={'5% Discount'}
        divText2={'Birthday Gift'}
      />
    </div>
  );
};

export default LoyaltycardbotItem;
