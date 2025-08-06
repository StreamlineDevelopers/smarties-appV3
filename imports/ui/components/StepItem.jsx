import React from 'react';

const StepItem = ({ description }) => {
  return (
    <div className="step">
      <div className="step-number-container done">
        <img src="../images/smarties-icon-check.svg" loading="lazy" alt="" />
      </div>
      <div className="step-description">{description || 'Select Topic'}</div>
    </div>
  );
};

export default StepItem;
