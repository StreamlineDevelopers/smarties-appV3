import React from 'react';
import AssistanttextcontentItem from './AssistanttextcontentItem';

const DashboardassistantleftItem = ({}) => {
  return (
    <div className={'dashboard-assistant-left'}>
      <div className={'db-assistant-icon'}>
        <img src={'images/smarties-head.png'} loading={'lazy'} alt={''} />
      </div>
      <AssistanttextcontentItem />
    </div>
  );
};

export default DashboardassistantleftItem;
