import React from 'react';
import SidebarjourneycardtopItem from './SidebarjourneycardtopItem';

const SidebarleadinfotimelineitemcardItem = ({ label }) => {
  return (
    <div className="sidebar-leadinfo-timeline-itemcard">
      <SidebarjourneycardtopItem label={label || 'Added product to cart'} />
    </div>
  );
};

export default SidebarleadinfotimelineitemcardItem;
