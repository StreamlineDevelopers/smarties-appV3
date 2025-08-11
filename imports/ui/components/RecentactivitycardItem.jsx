import React from 'react';
import ActivityhistorycardtopItem_39fd0fb1 from './ActivityhistorycardtopItem_39fd0fb1';

const RecentactivitycardItem = ({ divText }) => {
  return (
    <div className={'recentactivity-card'}>
      <div className={'datacollection-text'}>
        {divText || 'IP Address visibility enabled'}
      </div>
      <ActivityhistorycardtopItem_39fd0fb1 />
    </div>
  );
};

export default RecentactivitycardItem;
