import React from 'react';

const ActivityfeedtextcontentItem180 = ({ title, itemText }) => {
  return (
    <div className="activityfeed-textcontent">
      <div className="db-card-title">
        {title || 'Repurpose as Tweet Thread'}
      </div>
      <div className="uploadeditem-filesize">
        {itemText ||
          'Break down key points into a 6-part tweet thread to drive traffic.'}
      </div>
    </div>
  );
};

export default ActivityfeedtextcontentItem180;
