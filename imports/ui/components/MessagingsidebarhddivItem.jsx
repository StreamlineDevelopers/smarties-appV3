import React from 'react';

const MessagingsidebarhddivItem = ({ divText, dataWId }) => {
  return (
    <div className={'messaging-sidebar-hd-div align-inbetween'}>
      <div className={'messaging-sidebar-h1'}>
        {divText || 'Customer Intelligence'}
      </div>
      <div
        data-w-id={dataWId || 'd40e6ff1-a7b5-c151-b08f-dd8db3b3dda2'}
        className={'sidebar-close'}
      >
        <img src={'images/Frame_5.svg'} loading={'lazy'} alt={''} />
      </div>
    </div>
  );
};

export default MessagingsidebarhddivItem;
