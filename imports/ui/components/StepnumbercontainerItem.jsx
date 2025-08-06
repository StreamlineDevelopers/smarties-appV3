import React from 'react';

const StepnumbercontainerItem = ({ divText }) => {
  return (
    <div className={'step-number-container'}>
      <div className={'step-number'}>{divText || '4'}</div>
    </div>
  );
};

export default StepnumbercontainerItem;
