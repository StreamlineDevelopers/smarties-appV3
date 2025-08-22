import React from 'react';
import ConvoinbounddurationItem from './ConvoinbounddurationItem';
import ConvobubbleoutboundItem from './ConvobubbleoutboundItem';
import ConvobotavatarItem from './ConvobotavatarItem';

const ConvooutboundItem = ({ dataWId, divText, dataWId1 }) => {
  return (
    <div className={'convo-outbound'}>
      <ConvoinbounddurationItem
        dataWId={'40de4617-1996-b595-f7c8-2ed436404f34'}
        divText={'2:35 PM • AI'}
      />
      <ConvobubbleoutboundItem
        divText={
          "Hi John, I'm SMARTIES from the solutions team. I'm sorry to hear that. Could you please provide your order number so I can look into this for you?"
        }
      />
      <ConvobotavatarItem
        dataWId={'40f9ab80-2190-4a62-869c-485ed785461a'}
        src={'images/smarties-avatar-icon-chat.svg'}
        divText={'Chat'}
        src1={'images/smarties-head.png'}
      />
    </div>
  );
};

export default ConvooutboundItem;
