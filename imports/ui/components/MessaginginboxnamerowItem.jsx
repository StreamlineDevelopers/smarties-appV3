import React from 'react';

const MessaginginboxnamerowItem = ({ divText }) => {
  return (
    <div className={'messaging-inbox-name-row'}>
      <div>{divText || 'Michael Chen'}</div>
    </div>
  );
};

export default MessaginginboxnamerowItem;
