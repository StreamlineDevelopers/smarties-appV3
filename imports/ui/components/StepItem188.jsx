import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem188 = ({ divText, description }) => {
  return (
    <div className={'step'}>
      <StepnumbercontainerItem divText={'3'} />
      <div className={'step-description'}>{description || 'Voice Options'}</div>
    </div>
  );
};

export default StepItem188;
