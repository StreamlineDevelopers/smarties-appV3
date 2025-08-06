import React from 'react';
import ActivityhistorycardtopItem154 from './ActivityhistorycardtopItem154';
import ActivityhistorycardtopItem from './ActivityhistorycardtopItem';

const ActivityhistorycardItem = ({ props }) => {
  return (
    <div className="activityhistory-card">
      <ActivityhistorycardtopItem154 />
      <div className="activityhistory-title">Order Status Inquiry</div>
      <div className="activityhistory-text">
        Hi, I'd like to check on my order #ORD-2024-456...
      </div>
      <ActivityhistorycardtopItem />
    </div>
  );
};

export default ActivityhistorycardItem;
