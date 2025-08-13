import React from 'react';
import TopictagItem_603759cd from './TopictagItem_603759cd';

const PodcastitemtopleftItem_f06e0df5 = ({ divText }) => {
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
      <TopictagItem_603759cd />
    </div>
  );
};

export default PodcastitemtopleftItem_f06e0df5;
