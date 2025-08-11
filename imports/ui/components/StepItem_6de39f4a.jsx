import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem_6de39f4a = ({ divText, description }) => {
  return (
    <div className={'step'}>
      <StepnumbercontainerItem divText={'3'} />
      <div className={'step-description'}>{description || 'Voice Options'}</div>
    </div>
  );
};

export default StepItem_6de39f4a;
