import React from 'react';

const StepItem_1d0d69f5 = ({ description }) => {
  return (
    <div className={'step'}>
      <div className={'step-number-container done'}>
        <img
          src={'../images/smarties-icon-check.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div className={'step-description'}>
        {description || 'Select Platforms'}
      </div>
    </div>
  );
};

export default StepItem_1d0d69f5;
