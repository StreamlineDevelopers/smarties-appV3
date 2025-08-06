import React from 'react';
import InteractionhistorycardItem from './InteractionhistorycardItem';

const SidebarleadinfotimelineitemItem251 = ({ label, divText }) => {
  return (
    <div className="sidebar-leadinfo-timeline-item">
      <div className="sidebar-leadinfo-timeline-item-dot"></div>
      <InteractionhistorycardItem
        label={label || 'Birthday Surprise Sent'}
        divText={
          divText ||
          'Sent a personalized birthday email with a $20 gift card for their favorite store.'
        }
      />
    </div>
  );
};

export default SidebarleadinfotimelineitemItem251;
