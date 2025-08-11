import React from 'react';
import TopictagItem_849ca2fc from './TopictagItem_849ca2fc';

const PodcastitemtopleftItem_9e8c9215 = ({ divText }) => {
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
      <TopictagItem_849ca2fc />
    </div>
  );
};

export default PodcastitemtopleftItem_9e8c9215;
