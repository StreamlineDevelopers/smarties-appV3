import React from 'react';

const DbjourneysmartassistantcardbodyItem = ({ title, itemText }) => {
  return (
    <div className={'db-journey-smartassistant-card-body'}>
      <div className={'db-card-title'}>
        {title || 'This blog is performing 32% above average'}
      </div>
      <div className={'uploadeditem-filesize'}>
        {itemText ||
          'Your article "7 Ways to Automate Customer Journeys" is getting exceptional engagement. Consider creating'}
      </div>
    </div>
  );
};

export default DbjourneysmartassistantcardbodyItem;
