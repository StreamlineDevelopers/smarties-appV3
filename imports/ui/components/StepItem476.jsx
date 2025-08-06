import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem476 = ({ divText, description }) => {
  return (
    <div className="step">
      <StepnumbercontainerItem divText={divText || '4'} />
      <div className="step-description">
        {description || 'Preview & Publish'}
      </div>
    </div>
  );
};

export default StepItem476;
