import React from 'react';
import ConvoinboundavatarItem from './ConvoinboundavatarItem';
import ConvobubbleinboundItem from './ConvobubbleinboundItem';
import ConvoinbounddurationItem from './ConvoinbounddurationItem';

const ConvoinboundItem = ({ dataWId, divText, dataWId1 }) => {
  return (
    <div className={'convo-inbound'}>
      <ConvoinboundavatarItem
        dataWId={'915b5944-3838-0891-c296-c45dd45ff477'}
        src={'images/smarties-avatar-icon-chat.svg'}
        divText={'Chat'}
      />
      <ConvobubbleinboundItem
        divText={"Hi there! I'm having an issue with my recent purchase."}
      />
      <ConvoinbounddurationItem
        dataWId={'915b5944-3838-0891-c296-c45dd45ff481'}
        divText={'10:30 AM'}
      />
    </div>
  );
};

export default ConvoinboundItem;
