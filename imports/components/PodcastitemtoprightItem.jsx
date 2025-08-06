import React from 'react';

const PodcastitemtoprightItem = ({ divText }) => {
  return (
    <div className="podcast-item-topright">
      <div className="podcast-time">{divText || '1:50 min'}</div>
    </div>
  );
};

export default PodcastitemtoprightItem;
