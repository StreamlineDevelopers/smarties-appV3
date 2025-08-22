import React from 'react';

const PredefinedmessageitemleftItem = ({ divText }) => {
  return (
    <div className={'predefinedmessage-item-left'}>
      <div className={'card-form-row-text'}>
        {divText || 'Thank you for Contacting Us'}
      </div>
    </div>
  );
};

export default PredefinedmessageitemleftItem;
