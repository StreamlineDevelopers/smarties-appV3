import React from 'react';

const ActivityfeedtextcontentItem = ({ title }) => {
  return (
    <div className="activityfeed-textcontent">
      <div className="db-card-title">{title || 'Suprise Gold Tier User'}</div>
    </div>
  );
};

export default ActivityfeedtextcontentItem;
