import React from 'react';
import MessagetypedivItem from './MessagetypedivItem';

const ConvoinboundavatarItem = ({ dataWId, src, divText }) => {
  return (
    <div className={'convo-inbound-avatar'}>
      <img
        loading={'lazy'}
        src={'images/smarties-avatar-01_1smarties-avatar-01.png'}
        alt={''}
      />
      <MessagetypedivItem
        dataWId={'915b5944-3838-0891-c296-c45dd45ff477'}
        src={'images/smarties-avatar-icon-chat.svg'}
        divText={'Chat'}
      />
    </div>
  );
};

export default ConvoinboundavatarItem;
