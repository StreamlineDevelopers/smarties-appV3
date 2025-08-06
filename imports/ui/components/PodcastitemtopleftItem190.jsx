import React from 'react';
import TopictagItem185 from './TopictagItem185';

const PodcastitemtopleftItem190 = ({ divText }) => {
  return (
    <div className={'podcast-item-topleft'}>
      <div className={'podcast-filter-item-chevron rotate'}>
        <img
          src={'../images/smarties-filter-chevrondown.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || 'Topic C'}</div>
      <TopictagItem185 />
    </div>
  );
};

export default PodcastitemtopleftItem190;
