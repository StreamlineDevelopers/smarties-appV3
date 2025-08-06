import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem351 = ({ divText, description }) => {
  return (
    <div className={'step'}>
      <StepnumbercontainerItem divText={'4'} />
      <div className={'step-description'}>
        {description || 'Preview & Schedule'}
      </div>
    </div>
  );
};

export default StepItem351;
