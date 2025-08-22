import React from 'react';
import PlayerbarItem from './PlayerbarItem';
import PlayerItem from './PlayerItem';

const PlayermainItem = ({}) => {
  return (
    <div className={'player-main'}>
      <PlayerbarItem />
      <PlayerItem />
    </div>
  );
};

export default PlayermainItem;
