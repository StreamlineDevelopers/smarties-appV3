import React from 'react';

const ActivityhistorytabItem = ({ divText }) => {
  return (
    <div className="activityhistory-tab default">
      <div>{divText || '7d'}</div>
    </div>
  );
};

export default ActivityhistorytabItem;
