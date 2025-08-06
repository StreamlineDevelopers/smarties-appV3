import React from 'react';

const ActivityfeedtextcontentItem260 = ({ title, itemText }) => {
  return (
    <div className="activityfeed-textcontent">
      <div className="db-card-title">{title || 'Write Blog'}</div>
      <div className="uploadeditem-filesize">
        {itemText || 'AI-assisted content creation'}
      </div>
    </div>
  );
};

export default ActivityfeedtextcontentItem260;
