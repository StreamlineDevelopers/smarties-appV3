import React from 'react';
import ActivityhistorycardtopItem281 from './ActivityhistorycardtopItem281';

const RecentactivitycardItem = ({ divText }) => {
  return (
    <div className="recentactivity-card">
      <div className="datacollection-text">
        {divText || 'IP Address visibility enabled'}
      </div>
      <ActivityhistorycardtopItem281 />
    </div>
  );
};

export default RecentactivitycardItem;
