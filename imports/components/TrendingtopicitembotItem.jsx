import React from 'react';
import HeadlinedurationItem from './HeadlinedurationItem';
import PodcasttrendingdivItem from './PodcasttrendingdivItem';

const TrendingtopicitembotItem = ({ dataWId }) => {
  return (
    <div className="trending-topic-item-bot">
      <HeadlinedurationItem />
      <PodcasttrendingdivItem
        dataWId={dataWId || '183aca65-1bf9-f04d-110c-920eb3d9fda9'}
      />
    </div>
  );
};

export default TrendingtopicitembotItem;
