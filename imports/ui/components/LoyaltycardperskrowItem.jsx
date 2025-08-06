import React from 'react';
import LoyaltycardperkstagItem from './LoyaltycardperkstagItem';

const LoyaltycardperskrowItem = ({ divText, divText1, divText2 }) => {
  return (
    <div className={'loyalty-card-perskrow'}>
      <LoyaltycardperkstagItem divText={'Free Shipping'} />
      <LoyaltycardperkstagItem divText={'5% Discount'} />
      <LoyaltycardperkstagItem divText={'Birthday Gift'} />
    </div>
  );
};

export default LoyaltycardperskrowItem;
