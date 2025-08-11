import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem_cedaccbd = ({ divText, description }) => {
  return (
    <div className={'step'}>
      <StepnumbercontainerItem divText={'4'} />
      <div className={'step-description'}>
        {description || 'Preview & Publish'}
      </div>
    </div>
  );
};

export default StepItem_cedaccbd;
