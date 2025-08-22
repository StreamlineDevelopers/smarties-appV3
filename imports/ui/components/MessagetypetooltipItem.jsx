import React from 'react';

const MessagetypetooltipItem = ({ divText }) => {
  return (
    <div className={'message-type-tooltip'}>
      <div>{divText || 'Chat'}</div>
    </div>
  );
};

export default MessagetypetooltipItem;
