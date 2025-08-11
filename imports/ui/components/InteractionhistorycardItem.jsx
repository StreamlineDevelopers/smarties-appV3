import React from 'react';
import SidebarjourneycardlabeldivItem_f760af4c from './SidebarjourneycardlabeldivItem_f760af4c';
import Divblock21Item from './Divblock21Item';

const InteractionhistorycardItem = ({ label, divText }) => {
  return (
    <div className={'interaction-history-card'}>
      <SidebarjourneycardlabeldivItem_f760af4c
        label={'Birthday Surprise Sent'}
      />
      <div className={'sidebar-journey-card-duration'}>
        {divText ||
          'Sent a personalized birthday email with a $20 gift card for their favorite store.'}
      </div>
      <Divblock21Item />
    </div>
  );
};

export default InteractionhistorycardItem;
