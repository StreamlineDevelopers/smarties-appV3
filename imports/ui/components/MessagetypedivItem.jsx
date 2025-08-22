import React from 'react';
import MessagetypetooltipItem from './MessagetypetooltipItem';

const MessagetypedivItem = ({ dataWId, src, divText }) => {
  return (
    <div className={'message-type-div'}>
      <div
        data-w-id={dataWId || '915b5944-3838-0891-c296-c45dd45ff477'}
        className={'message-type'}
      >
        <img
          src={src || 'images/smarties-avatar-icon-chat.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <MessagetypetooltipItem divText={'Chat'} />
    </div>
  );
};

export default MessagetypedivItem;
