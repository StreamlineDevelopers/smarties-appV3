import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem_c2c32501 = ({ divText, description }) => {
  return (
    <div className={'step inactive'}>
      <StepnumbercontainerItem divText={'4'} />
      <div className={'step-description'}>
        {description || 'Preview & Schedule'}
      </div>
    </div>
  );
};

export default StepItem_c2c32501;
