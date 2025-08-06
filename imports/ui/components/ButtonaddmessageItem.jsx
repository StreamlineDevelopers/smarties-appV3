import React from 'react';

const ButtonaddmessageItem = ({ dataWId, label }) => {
  return (
    <div
      data-w-id={dataWId || '1849b75f-9350-98c1-3481-367f0109f99d'}
      className={'button-addmessage'}
    >
      <div className={'button-label'}>{label || 'Add Property'}</div>
      <img loading={'lazy'} src={'../images/smarties-plus-dark.svg'} alt={''} />
    </div>
  );
};

export default ButtonaddmessageItem;
