import React from 'react';
import PlayermainItem from './PlayermainItem';

const MessageplayerItem = ({}) => {
  return (
    <div className={'message-player'}>
      <div className={'btn-play'}>
        <img loading={'lazy'} src={'images/smarties-icon-play.svg'} alt={''} />
      </div>
      <PlayermainItem />
    </div>
  );
};

export default MessageplayerItem;
