import React from 'react';
import PodcastitemcontroldivleftItem from './PodcastitemcontroldivleftItem';
import PodcastitemcontroldivrightItem from './PodcastitemcontroldivrightItem';

const PodcastitemcontroldivItem = ({ props }) => {
  return (
    <div className="podcast-item-controldiv">
      <PodcastitemcontroldivleftItem />
      <PodcastitemcontroldivrightItem />
    </div>
  );
};

export default PodcastitemcontroldivItem;
