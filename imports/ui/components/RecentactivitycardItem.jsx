import React from 'react';
import ActivityhistorycardtopItem_aa76d060 from './ActivityhistorycardtopItem_aa76d060';

const RecentactivitycardItem = ({ divText }) => {
  return (
    <div className={'recentactivity-card'}>
      <div className={'datacollection-text'}>
        {divText || 'IP Address visibility enabled'}
      </div>
      <ActivityhistorycardtopItem_aa76d060 />
    </div>
  );
};

export default RecentactivitycardItem;
