import React from 'react';
import CalltranscriptdivItem from './CalltranscriptdivItem';
import MessageplayerItem from './MessageplayerItem';

const ConvobubbleinboundItem_b8043da8 = ({ divText }) => {
  return (
    <div className={'convo-bubble-inbound'}>
      <CalltranscriptdivItem />
      <div>
        {divText ||
          "Sure, it's #12345-AB. I ordered a laptop but received a keyboard instead."}
      </div>
      <MessageplayerItem />
    </div>
  );
};

export default ConvobubbleinboundItem_b8043da8;
