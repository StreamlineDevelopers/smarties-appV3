import React from 'react';
import MessaginginboxavatarcolItem from './MessaginginboxavatarcolItem';
import MessaginginboxtextcontentItem from './MessaginginboxtextcontentItem';

const MessaginginboxitemleftItem = ({ src, divText, divText1 }) => {
  return (
    <div className="messaging-inbox-item-left">
      <MessaginginboxavatarcolItem
        src={src || '../images/smarties-avatar-01_1smarties-avatar-01.png'}
      />
      <MessaginginboxtextcontentItem
        divText={divText || 'Michael Chen'}
        divText1={divText1 || 'johnsmith@email.com'}
      />
    </div>
  );
};

export default MessaginginboxitemleftItem;
