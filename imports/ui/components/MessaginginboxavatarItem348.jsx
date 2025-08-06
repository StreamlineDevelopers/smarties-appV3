import React from 'react';
import ChatstatusdivItem from './ChatstatusdivItem';

const MessaginginboxavatarItem348 = ({ src, dataWId }) => {
  return (
    <div className="messaging-inbox-avatar">
      <img
        loading="lazy"
        src={src || 'images/smarties-avatar-01_1smarties-avatar-01.png'}
        alt=""
      />
      <div className="dot-online"></div>
      <ChatstatusdivItem
        dataWId={dataWId || 'da766056-4c22-deca-22ff-455fcbcfc86a'}
      />
    </div>
  );
};

export default MessaginginboxavatarItem348;
