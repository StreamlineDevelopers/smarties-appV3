import React from 'react';
import SidebarleadinfotimelineitemcardItem from './SidebarleadinfotimelineitemcardItem';

const SidebarleadinfotimelineitemItem = ({ label }) => {
  return (
    <div className="sidebar-leadinfo-timeline-item">
      <div className="sidebar-leadinfo-timeline-item-dot"></div>
      <SidebarleadinfotimelineitemcardItem
        label={label || 'Added product to cart'}
      />
    </div>
  );
};

export default SidebarleadinfotimelineitemItem;
