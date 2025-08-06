import React from 'react';
import ActivityhistoryhandlerItem from './ActivityhistoryhandlerItem';
import Divblock17Item from './Divblock17Item';

const ActivityhistorycardtopItem149 = ({ src, width }) => {
  return (
    <div className="activityhistory-card-top">
      <ActivityhistoryhandlerItem
        src={src || 'images/smarties-head.png'}
        width={width || 'Auto'}
      />
      <Divblock17Item />
    </div>
  );
};

export default ActivityhistorycardtopItem149;
