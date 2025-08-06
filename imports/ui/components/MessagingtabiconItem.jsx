import React from 'react';

const MessagingtabiconItem = ({ iconSrc }) => {
  return (
    <div className={'messaging-tab-icon'}>
      <div className={'code-embed w-embed'}>
        <img src={iconSrc} alt="icon" />
      </div>
    </div>
  );
};

export default MessagingtabiconItem;
