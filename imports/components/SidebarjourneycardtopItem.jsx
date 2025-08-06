import React from 'react';
import SidebarjourneycardlabeldivItem201 from './SidebarjourneycardlabeldivItem201';

const SidebarjourneycardtopItem = ({ label }) => {
  return (
    <div className="sidebar-journey-card-top">
      <SidebarjourneycardlabeldivItem201
        label={label || 'Added product to cart'}
      />
      <div className="sidebar-journey-card-duration">
        Campaign strategy discussion - 32 min
      </div>
    </div>
  );
};

export default SidebarjourneycardtopItem;
