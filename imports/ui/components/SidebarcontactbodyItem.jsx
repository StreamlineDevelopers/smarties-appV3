import React from 'react';
import SidebarhddivItem from './SidebarhddivItem';
import SidebartagbodyItem from './SidebartagbodyItem';

const SidebarcontactbodyItem = ({ props }) => {
  return (
    <div className="sidebar-contact-body">
      <SidebarhddivItem divText="Tags" />
      <SidebartagbodyItem />
    </div>
  );
};

export default SidebarcontactbodyItem;
