import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem220 = ({ divText, description }) => {
  return (
    <div className="step">
      <StepnumbercontainerItem divText={divText || '3'} />
      <div className="step-description">{description || 'Voice Options'}</div>
    </div>
  );
};

export default StepItem220;
