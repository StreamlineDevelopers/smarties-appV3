import React from 'react';
import ActivityhistorycardtopItem_53fbc78b from './ActivityhistorycardtopItem_53fbc78b';
import ActivityhistorycardtopItem from './ActivityhistorycardtopItem';

const ActivityhistorycardItem = ({}) => {
  return (
    <div className={'activityhistory-card'}>
      <ActivityhistorycardtopItem_53fbc78b />
      <div className={'activityhistory-title'}>Order Status Inquiry</div>
      <div className={'activityhistory-text'}>
        Hi, I'd like to check on my order #ORD-2024-456...
      </div>
      <ActivityhistorycardtopItem />
    </div>
  );
};

export default ActivityhistorycardItem;
