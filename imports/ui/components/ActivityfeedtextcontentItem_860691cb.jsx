import React from 'react';

const ActivityfeedtextcontentItem_860691cb = ({ title, itemText }) => {
  return (
    <div className={'activityfeed-textcontent'}>
      <div className={'db-card-title'}>{title || 'Write Blog'}</div>
      <div className={'uploadeditem-filesize'}>
        {itemText || 'AI-assisted content creation'}
      </div>
    </div>
  );
};

export default ActivityfeedtextcontentItem_860691cb;
