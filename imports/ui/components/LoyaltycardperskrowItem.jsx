import React from 'react';
import LoyaltycardperkstagItem from './LoyaltycardperkstagItem';

const LoyaltycardperskrowItem = ({ divText, divText1, divText2 }) => {
  return (
    <div className="loyalty-card-perskrow">
      <LoyaltycardperkstagItem divText={divText || 'Free Shipping'} />
      <LoyaltycardperkstagItem divText={divText1 || '5% Discount'} />
      <LoyaltycardperkstagItem divText={divText2 || 'Birthday Gift'} />
    </div>
  );
};

export default LoyaltycardperskrowItem;
