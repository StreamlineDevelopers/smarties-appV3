import React from 'react';

const ConvobubbleoutboundItem = ({ divText }) => {
  return (
    <div className={'convo-bubble-outbound'}>
      <div>
        {divText ||
          "Hi John, I'm SMARTIES from the solutions team. I'm sorry to hear that. Could you please provide your order number so I can look into this for you?"}
      </div>
    </div>
  );
};

export default ConvobubbleoutboundItem;
