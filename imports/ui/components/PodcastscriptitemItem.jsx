import React from 'react';
import PodcastitemtopItem from './PodcastitemtopItem';
import PodcastitembodyItem from './PodcastitembodyItem';

const PodcastscriptitemItem = ({ dataWId, divText, divText1 }) => {
  return (
    <div className={'podcast-script-item'}>
      <PodcastitemtopItem
        dataWId={'a51ec3fe-b720-8090-e699-811edf3d48a2'}
        divText={'Topic A'}
        divText1={'1:50 min'}
      />
      <PodcastitembodyItem />
    </div>
  );
};

export default PodcastscriptitemItem;
