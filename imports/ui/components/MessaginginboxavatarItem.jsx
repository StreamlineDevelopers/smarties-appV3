import React from 'react';

const MessaginginboxavatarItem = ({ src }) => {
  return (
    <div className={'messaging-inbox-avatar'}>
      <img
        loading={'lazy'}
        src={src || '../images/smarties-avatar-01_1smarties-avatar-01.png'}
        alt={''}
      />
      <div className={'dot-online'}></div>
    </div>
  );
};

export default MessaginginboxavatarItem;
