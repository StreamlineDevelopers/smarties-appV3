import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem_0c31cf42 = ({ divText, description }) => {
  return (
    <div className={'step'}>
      <StepnumbercontainerItem divText={'4'} />
      <div className={'step-description'}>
        {description || 'Preview & Schedule'}
      </div>
    </div>
  );
};

export default StepItem_0c31cf42;
