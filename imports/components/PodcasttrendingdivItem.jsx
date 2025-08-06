import React from 'react';
import PodcasttrendingtextItem from './PodcasttrendingtextItem';
import SocialtopictooltipdivItem from './SocialtopictooltipdivItem';

const PodcasttrendingdivItem = ({ dataWId }) => {
  return (
    <div className="podcast-trending-div">
      <PodcasttrendingtextItem />
      <SocialtopictooltipdivItem
        dataWId={dataWId || '183aca65-1bf9-f04d-110c-920eb3d9fda9'}
      />
    </div>
  );
};

export default PodcasttrendingdivItem;
