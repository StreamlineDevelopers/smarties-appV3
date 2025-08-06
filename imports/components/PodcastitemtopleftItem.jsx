import React from 'react';
import TopictagItem from './TopictagItem';

const PodcastitemtopleftItem = ({ divText }) => {
  return (
    <div className="podcast-item-topleft">
      <div className="podcast-filter-item-chevron rotate">
        <img
          src="../images/smarties-filter-chevrondown.svg"
          loading="lazy"
          alt=""
        />
      </div>
      <div>{divText || 'Topic A'}</div>
      <TopictagItem divText="Informative" />
    </div>
  );
};

export default PodcastitemtopleftItem;
