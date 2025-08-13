import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem_a2bce708 = ({ divText, description }) => {
  return (
    <div className={'step inactive'}>
      <StepnumbercontainerItem divText={divText} />
      <div className={'step-description'}>
        {description || 'Preview & Publish'}
      </div>
    </div>
  );
};

export default StepItem_a2bce708;
