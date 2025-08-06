import React from 'react';
import SidebarjourneycardlabeldivItem207 from './SidebarjourneycardlabeldivItem207';
import Divblock21Item from './Divblock21Item';

const InteractionhistorycardItem = ({ label, divText }) => {
  return (
    <div className={'interaction-history-card'}>
      <SidebarjourneycardlabeldivItem207 label={'Birthday Surprise Sent'} />
      <div className={'sidebar-journey-card-duration'}>
        {divText ||
          'Sent a personalized birthday email with a $20 gift card for their favorite store.'}
      </div>
      <Divblock21Item />
    </div>
  );
};

export default InteractionhistorycardItem;
