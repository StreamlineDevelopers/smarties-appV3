import React from 'react';
import MessaginginboxavatarItem from './MessaginginboxavatarItem';

const MessaginginboxavatarcolItem = ({ src }) => {
  return (
    <div className="messaging-inbox-avatar-col">
      <MessaginginboxavatarItem
        src={src || '../images/smarties-avatar-01_1smarties-avatar-01.png'}
      />
    </div>
  );
};

export default MessaginginboxavatarcolItem;
