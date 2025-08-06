import React from 'react';
import TopictagItem216 from './TopictagItem216';

const PodcastitemtopleftItem223 = ({ divText }) => {
  return (
    <div className="podcast-item-topleft">
      <div className="podcast-filter-item-chevron rotate">
        <img
          src="../images/smarties-filter-chevrondown.svg"
          loading="lazy"
          alt=""
        />
      </div>
      <div>{divText || 'Topic C'}</div>
      <TopictagItem216 />
    </div>
  );
};

export default PodcastitemtopleftItem223;
