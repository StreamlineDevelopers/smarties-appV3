import React from 'react';
import ActivityhistorycardtopItem239 from './ActivityhistorycardtopItem239';

const RecentactivitycardItem = ({ divText }) => {
  return (
    <div className={'recentactivity-card'}>
      <div className={'datacollection-text'}>
        {divText || 'IP Address visibility enabled'}
      </div>
      <ActivityhistorycardtopItem239 />
    </div>
  );
};

export default RecentactivitycardItem;
