import React from 'react';
import RecentactivitystepcolItem from './RecentactivitystepcolItem';
import RecentactivitytextcontentItem from './RecentactivitytextcontentItem';

const RecentactivityitemItem = ({ props }) => {
  return (
    <div className="recentactivity-item">
      <RecentactivitystepcolItem />
      <RecentactivitytextcontentItem />
    </div>
  );
};

export default RecentactivityitemItem;
