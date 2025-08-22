import React from 'react';
import ConvoinboundavatarItem from './ConvoinboundavatarItem';
import ConvobubbleinboundItem_b8043da8 from './ConvobubbleinboundItem_b8043da8';
import ConvoinbounddurationItem from './ConvoinbounddurationItem';

const ConvoinboundItem_595b7e7e = ({ dataWId, divText, dataWId1 }) => {
  return (
    <div className={'convo-inbound'}>
      <ConvoinboundavatarItem
        dataWId={'311fae33-37bb-b859-e12e-ed68bbc60ed4'}
        src={'images/smarties-avatar-icon-call.svg'}
        divText={'Call'}
      />
      <ConvobubbleinboundItem_b8043da8
        divText={
          "Sure, it's #12345-AB. I ordered a laptop but received a keyboard instead."
        }
      />
      <ConvoinbounddurationItem
        dataWId={'d2601b0f-93ed-ec78-d431-297ce3d04872'}
        divText={'10:30 AM'}
      />
    </div>
  );
};

export default ConvoinboundItem_595b7e7e;
