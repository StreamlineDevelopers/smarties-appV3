import React from 'react';
import SidebarjourneycardtimeItem from './SidebarjourneycardtimeItem';

const SidebarjourneycardlabeldivItem = ({ props }) => {
  return (
    <div className="sidebar-journey-card-label-div">
      <div className="sidebar-journey-card-duration">2:15 PM</div>
      <SidebarjourneycardtimeItem />
    </div>
  );
};

export default SidebarjourneycardlabeldivItem;
