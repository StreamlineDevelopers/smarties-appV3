import React from 'react';
import ActivityhistoryhandlerItem from './ActivityhistoryhandlerItem';
import ActivityhistorycategorytagItem from './ActivityhistorycategorytagItem';

const ActivityhistorycardtopItem = ({}) => {
  return (
    <div className={'activityhistory-card-top'}>
      <ActivityhistoryhandlerItem
        src={'images/img_2img.png'}
        width={'14.661971092224121'}
      />
      <ActivityhistorycategorytagItem />
    </div>
  );
};

export default ActivityhistorycardtopItem;
