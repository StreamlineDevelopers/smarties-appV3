import React from 'react';
import SidebarjourneycardlabeldivItem249 from './SidebarjourneycardlabeldivItem249';
import Divblock21Item from './Divblock21Item';

const InteractionhistorycardItem = ({ label, divText }) => {
  return (
    <div className="interaction-history-card">
      <SidebarjourneycardlabeldivItem249
        label={label || 'Birthday Surprise Sent'}
      />
      <div className="sidebar-journey-card-duration">
        {divText ||
          'Sent a personalized birthday email with a $20 gift card for their favorite store.'}
      </div>
      <Divblock21Item />
    </div>
  );
};

export default InteractionhistorycardItem;
