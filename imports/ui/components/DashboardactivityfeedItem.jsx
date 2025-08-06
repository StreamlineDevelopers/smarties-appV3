import React from 'react';
import ActivityfeedtextcontentItem80 from './ActivityfeedtextcontentItem80';

const DashboardactivityfeedItem = ({}) => {
  return (
    <div className={'dashboard-activityfeed'}>
      <div className={'card-icon bg-orange'}>
        <img
          src={'../images/smarties-bb-btnicon-02-icon.svg'}
          loading={'lazy'}
          width={'25'}
          height={'25'}
          alt={''}
          className={'card-icon-image'}
        />
      </div>
      <ActivityfeedtextcontentItem80 />
    </div>
  );
};

export default DashboardactivityfeedItem;
