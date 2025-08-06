import React from 'react';
import UrgencytypeleftItem from './UrgencytypeleftItem';
import UrgencytypelinkItem from './UrgencytypelinkItem';

const UrgencytypeitemItem = ({ divText }) => {
  return (
    <div className={'urgency-type-item'}>
      <UrgencytypeleftItem divText={'Social Proof'} />
      <UrgencytypelinkItem />
    </div>
  );
};

export default UrgencytypeitemItem;
