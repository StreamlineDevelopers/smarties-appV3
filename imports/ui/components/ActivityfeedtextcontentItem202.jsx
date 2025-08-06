import React from 'react';

const ActivityfeedtextcontentItem202 = ({ title, itemText }) => {
  return (
    <div className={'activityfeed-textcontent'}>
      <div className={'db-card-title'}>{title || 'Gift Free Dessert'}</div>
      <div className={'uploadeditem-filesize'}>
        {itemText || 'Send dessert voucher for next visit'}
      </div>
    </div>
  );
};

export default ActivityfeedtextcontentItem202;
