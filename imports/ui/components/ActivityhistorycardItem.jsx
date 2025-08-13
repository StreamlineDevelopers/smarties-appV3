import React from 'react';
import ActivityhistorycardtopItem_1cba58dc from './ActivityhistorycardtopItem_1cba58dc';
import ActivityhistorycardtopItem from './ActivityhistorycardtopItem';

const ActivityhistorycardItem = ({}) => {
  return (
    <div className={'activityhistory-card'}>
      <ActivityhistorycardtopItem_1cba58dc />
      <div className={'activityhistory-title'}>{'Order Status Inquiry'}</div>
      <div className={'activityhistory-text'}>
        {"Hi, I'd like to check on my order #ORD-2024-456..."}
      </div>
      <ActivityhistorycardtopItem />
    </div>
  );
};

export default ActivityhistorycardItem;
