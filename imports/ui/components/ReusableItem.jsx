import React from 'react';

const ReusableItem = ({ label, description }) => {
  return (
    <div>
      <label htmlFor={''} className={'form-label-2'}>
        {label || 'Model'}
      </label>
      <div className={'text-assistant-card-description'}>
        {description || 'This is the model that will be used.'}
      </div>
    </div>
  );
};

export default ReusableItem;
