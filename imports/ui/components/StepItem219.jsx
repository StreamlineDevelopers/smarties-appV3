import React from 'react';
import StepnumbercontainerItem from './StepnumbercontainerItem';

const StepItem219 = ({ divText, description }) => {
  return (
    <div className="step inactive">
      <StepnumbercontainerItem divText={divText || '4'} />
      <div className="step-description">
        {description || 'Preview & Publish'}
      </div>
    </div>
  );
};

export default StepItem219;
