import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem187 = ({ divText, description }) => {
  return (
    <div className={'step inactive'}>
      <StepnumbercontainerItem divText={'4'} />
      <div className={'step-description'}>
        {description || 'Preview & Publish'}
      </div>
    </div>
  );
};

export default StepItem187;
