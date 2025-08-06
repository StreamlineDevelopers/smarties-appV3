import React from 'react';

const DbjourneyactionlinkItem = ({ divText }) => {
  return (
    <div className={'db-journey-actionlink'}>
      <div>{divText || 'View Engagement'}</div>
      <div className={'db-journey-actionlink-icon'}>
        <img
          src={'../images/smarties-btnicon-arrow-next.svg'}
          loading={'lazy'}
          width={'20'}
          height={'20'}
          alt={''}
        />
      </div>
    </div>
  );
};

export default DbjourneyactionlinkItem;
