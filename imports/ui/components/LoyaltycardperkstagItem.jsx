import React from 'react';

const LoyaltycardperkstagItem = ({ divText }) => {
  return (
    <div className={'loyalty-card-perkstag'}>
      <div>{divText || 'Free Shipping'}</div>
    </div>
  );
};

export default LoyaltycardperkstagItem;
