import React from 'react';
import MessagetypedivItem from './MessagetypedivItem';

const ConvobotavatarItem = ({ dataWId, src, divText, src1 }) => {
  return (
    <div className={'convo-bot-avatar'}>
      <img loading={'lazy'} src={src1 || 'images/smarties-head.png'} alt={''} />
      <MessagetypedivItem
        dataWId={'40f9ab80-2190-4a62-869c-485ed785461a'}
        src={'images/smarties-avatar-icon-chat.svg'}
        divText={'Chat'}
      />
    </div>
  );
};

export default ConvobotavatarItem;
