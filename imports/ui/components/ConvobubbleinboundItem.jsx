import React from 'react';

const ConvobubbleinboundItem = ({ divText }) => {
  return (
    <div className={'convo-bubble-inbound'}>
      <div>
        {divText || "Hi there! I'm having an issue with my recent purchase."}
      </div>
    </div>
  );
};

export default ConvobubbleinboundItem;
