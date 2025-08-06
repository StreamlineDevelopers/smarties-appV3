import React from 'react';
import Input7Item from './Input7Item';

const UrgencytypeleftItem = ({ divText }) => {
  return (
    <div className={'urgency-type-left'}>
      <Input7Item />
      <div className={'text-78'}>{divText || 'Social Proof'}</div>
    </div>
  );
};

export default UrgencytypeleftItem;
