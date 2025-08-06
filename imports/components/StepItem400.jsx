import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem400 = ({ divText, description }) => {
  return (
    <div className="step inactive">
      <StepnumbercontainerItem divText={divText || '4'} />
      <div className="step-description">
        {description || 'Preview & Schedule'}
      </div>
    </div>
  );
};

export default StepItem400;
