import React from 'react';

const MessaginginboxavatarItem230 = ({ src }) => {
  return (
    <div className={'messaging-inbox-avatar'}>
      <img
        src={src || '../images/smarties-avatar-03_1smarties-avatar-03.png'}
        loading={'lazy'}
        alt={''}
      />
      <div className={'dot-online'}></div>
    </div>
  );
};

export default MessaginginboxavatarItem230;
