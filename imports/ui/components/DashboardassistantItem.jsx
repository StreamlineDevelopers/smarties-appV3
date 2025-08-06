import React from 'react';
import DashboardassistantleftItem from './DashboardassistantleftItem';
import DashboardassistantrightItem from './DashboardassistantrightItem';

const DashboardassistantItem = ({}) => {
  return (
    <div className={'dashboard-assistant'}>
      <DashboardassistantleftItem />
      <DashboardassistantrightItem />
    </div>
  );
};

export default DashboardassistantItem;
