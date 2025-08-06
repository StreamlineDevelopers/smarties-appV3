import React from 'react';
import DashboardassistantleftItem from './DashboardassistantleftItem';
import DashboardassistantrightItem from './DashboardassistantrightItem';

const DashboardassistantItem = ({ props }) => {
  return (
    <div className="dashboard-assistant">
      <DashboardassistantleftItem />
      <DashboardassistantrightItem />
    </div>
  );
};

export default DashboardassistantItem;
