import React from 'react';
import PodcastitemtopleftItem from './PodcastitemtopleftItem';
import PodcastitemtoprightItem from './PodcastitemtoprightItem';

const PodcastitemtopItem = ({ dataWId, divText, divText1 }) => {
  return (
    <div
      data-w-id={dataWId || 'a51ec3fe-b720-8090-e699-811edf3d48a2'}
      className="podcast-item-top"
    >
      <PodcastitemtopleftItem divText={divText || 'Topic A'} />
      <PodcastitemtoprightItem divText={divText1 || '1:50 min'} />
    </div>
  );
};

export default PodcastitemtopItem;
